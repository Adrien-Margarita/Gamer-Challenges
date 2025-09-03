import request from "supertest";
import { app } from "@/server";
import { PrismaClient } from "@/generated/prisma";
import * as argon2 from "argon2";
import { v4 as uuidv4 } from "uuid";

const prisma = new PrismaClient({
  datasourceUrl: process.env.TEST_DATABASE_URL,
  log: ['query', 'info', 'warn', 'error']
});

describe("Challenge Controller", () => {
  let agent: request.SuperTest<request.Test>;
  let authData: { csrfToken: string; cookies: string; authToken: string; userId: string };
  let testGame: { game_id: string };

  beforeAll(async () => {
    await prisma.challenge_vote.deleteMany({});
    await prisma.participation_vote.deleteMany({});
    await prisma.participation.deleteMany({});
    await prisma.challenge.deleteMany({});
    await prisma.game.deleteMany({});
    await prisma.user.deleteMany({});
    await prisma.user_role.deleteMany({});

    agent = request.agent(app) as unknown as request.SuperTest<request.Test>;

    // Get CSRF token if needed
    const csrfRes = await agent.get('/api/csrf-token');
    const csrfToken = csrfRes.body.csrfToken;

    // Create user role
    const userRole = await prisma.user_role.create({
      data: { role_id: 0, role_name: "USER", created_at: new Date(), updated_at: new Date() }
    });

    // Create test user
    const password = "testpassword";
    const hashedPassword = await argon2.hash(password);
    const testUser = await prisma.user.create({
      data: {
        email: "test@example.com",
        pseudonym: "testuser123",
        password_hash: hashedPassword,
        role_id: userRole.role_id,
        created_at: new Date(),
        updated_at: new Date()
      }
    });

    // Login to get auth token
    const loginRes = await agent
      .post('/api/auth/login')
      .set('X-CSRF-Token', csrfToken)
      .send({
        email: "test@example.com",
        password: password
      });

    authData = {
      csrfToken,
      cookies: Array.isArray(loginRes.headers['set-cookie']) ? loginRes.headers['set-cookie'].join('; ') : loginRes.headers['set-cookie'],
      authToken: loginRes.body.token,
      userId: testUser.user_id
    };

    // Create test game
    const game = await prisma.game.create({
      data: {
        game_id: uuidv4(),
        title: `Test Game ${Date.now()}`,
        category: "Test",
        description: "Game for challenge tests",
        release_date: new Date(),
        platform: "Test",
        created_at: new Date(),
        updated_at: new Date()
      }
    });
    testGame = { game_id: game.game_id };
  });

  afterAll(async () => {
    await prisma.challenge_vote.deleteMany({});
    await prisma.participation_vote.deleteMany({});
    await prisma.participation.deleteMany({});
    await prisma.challenge.deleteMany({});
    await prisma.game.deleteMany({});
    await prisma.user.deleteMany({});
    await prisma.user_role.deleteMany({});
    await prisma.$disconnect();
  });

  describe("POST /api/challenges", () => {
    it("should create a new challenge", async () => {
      const res = await agent
        .post("/api/challenges")
        .set('X-CSRF-Token', authData.csrfToken)
        .set('Cookie', authData.cookies)
        .set('Authorization', `Bearer ${authData.authToken}`)
        .send({
          title: "Test Challenge",
          description: "Challenge description",
          game_id: testGame.game_id,
          rules: "Test rules",
          user_id: authData.userId
        });

      expect(res.status).toBe(201);
      expect(res.body).toHaveProperty("challenge_id");
      expect(res.body.title).toBe("Test Challenge");
    });

    it("should not create a challenge with missing required fields", async () => {
      const res = await agent
        .post("/api/challenges")
        .set('X-CSRF-Token', authData.csrfToken)
        .set('Cookie', authData.cookies)
        .set('Authorization', `Bearer ${authData.authToken}`)
        .send({
          title: "Incomplete Challenge"
          // Missing required fields
        });

      expect(res.status).toBe(400);
      expect(res.body).toHaveProperty("message");
      expect(res.body.message).toContain("is required");
    });
  });

  describe("GET /api/challenges", () => {
    it("should get all challenges", async () => {
      const res = await agent
        .get("/api/challenges")
        .set('Cookie', authData.cookies)
        .set('Authorization', `Bearer ${authData.authToken}`);

      expect(res.status).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
    });
  });

  describe("GET /api/challenges/:id", () => {
    it("should get a challenge by id", async () => {
      // Create a challenge to test with
      const createdChallenge = await prisma.challenge.create({
        data: {
          challenge_id: uuidv4(),
          title: "Challenge to get",
          description: "desc",
          game_id: testGame.game_id,
          user_id: authData.userId,
          rules: "rules",
          created_at: new Date(),
          updated_at: new Date()
        }
      });

      const res = await agent
        .get(`/api/challenges/${createdChallenge.challenge_id}`)
        .set('Cookie', authData.cookies)
        .set('Authorization', `Bearer ${authData.authToken}`);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("challenge_id", createdChallenge.challenge_id);
      expect(res.body.title).toBe("Challenge to get");
    });

    it("should return 404 for non-existent challenge", async () => {
      const nonExistentId = uuidv4();
      const res = await agent
        .get(`/api/challenges/${nonExistentId}`)
        .set('Cookie', authData.cookies)
        .set('Authorization', `Bearer ${authData.authToken}`);

      expect(res.status).toBe(404);
      expect(res.body).toHaveProperty("message");
    });
  });

  describe("PUT /api/challenges/:id", () => {
    it("should update a challenge", async () => {
      // Create a challenge to update
      const createdChallenge = await prisma.challenge.create({
        data: {
          challenge_id: uuidv4(),
          title: "Challenge to update",
          description: "desc",
          game_id: testGame.game_id,
          user_id: authData.userId,
          rules: "rules",
          created_at: new Date(),
          updated_at: new Date()
        }
      });

      const updatedData = {
        title: "Updated Challenge",
        description: "Updated desc",
        rules: "Updated rules",
      };

      const res = await agent
        .put(`/api/challenges/${createdChallenge.challenge_id}`)
        .set('X-CSRF-Token', authData.csrfToken)
        .set('Cookie', authData.cookies)
        .set('Authorization', `Bearer ${authData.authToken}`)
        .send(updatedData);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("challenge_id", createdChallenge.challenge_id);
      expect(res.body.title).toBe(updatedData.title);
    });
  });

  describe("DELETE /api/challenges/:id", () => {
    it("should delete a challenge", async () => {
      // Create a challenge to delete
      const challengeToDelete = await prisma.challenge.create({
        data: {
          challenge_id: uuidv4(),
          title: "Challenge to delete",
          description: "desc",
          game_id: testGame.game_id,
          user_id: authData.userId,
          rules: "rules",
          created_at: new Date(),
          updated_at: new Date()
        }
      });

      const res = await agent
        .delete(`/api/challenges/${challengeToDelete.challenge_id}`)
        .set('X-CSRF-Token', authData.csrfToken)
        .set('Cookie', authData.cookies)
        .set('Authorization', `Bearer ${authData.authToken}`);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("message");
      expect(res.body.message).toContain("supprimé");

      // Verify the challenge was deleted
      const deletedChallenge = await prisma.challenge.findUnique({
        where: { challenge_id: challengeToDelete.challenge_id }
      });
      expect(deletedChallenge).toBeNull();
    });
  });
});
