import request from "supertest";
import { app } from "@/server";
import { PrismaClient } from "@/generated/prisma";
import { v4 as uuidv4 } from "uuid";
import * as argon2 from 'argon2';

const prisma = new PrismaClient({
  datasourceUrl: process.env.TEST_DATABASE_URL,
  log: ['query', 'info', 'warn', 'error']
});

describe("Game Controller", () => {
  // Test game data
  const testGameTitle = `Test Game ${Date.now()}`;
  const testGame = {
    title: testGameTitle,
    description: "A test game description",
    release_date: new Date(),
    platform: "PC",
    category: "Action"
  };

  let authData: { csrfToken: string; cookies: string; authToken: string; userId: string };
  let agent: request.SuperTest<request.Test>;

  beforeAll(async () => {
    await prisma.$connect();
    
    // Clean up test data
    await prisma.challenge_vote.deleteMany({});
    await prisma.participation_vote.deleteMany({});
    await prisma.participation.deleteMany({});
    await prisma.challenge.deleteMany({});
    await prisma.game.deleteMany({});
    await prisma.user.deleteMany({});
    await prisma.user_role.deleteMany({});
    
    // Create test agent
    agent = request.agent(app) as unknown as request.SuperTest<request.Test>;
    
    // Get CSRF token
    const csrfRes = await agent.get('/api/csrf-token');
    const csrfToken = csrfRes.body.csrfToken;
    
    // First, ensure the admin role exists
    const adminRole = await prisma.user_role.upsert({
      where: { 
        role_id: 1
      },
      update: {},
      create: {
        role_id: 1,
        role_name: 'ADMIN',
        created_at: new Date(),
        updated_at: new Date()
      },
    });

    // Hash the test password
    const password = 'testpassword';
    const hashedPassword = await argon2.hash(password);

    // Create test user with admin role
    const testUser = await prisma.user.upsert({
      where: { email: 'test@example.com' },
      update: {
        pseudonym: 'testuser123',
        password_hash: hashedPassword,
        role_id: adminRole.role_id,
        updated_at: new Date()
      },
      create: {
        email: 'test@example.com',
        pseudonym: 'testuser123',
        password_hash: hashedPassword,
        role_id: adminRole.role_id,
        created_at: new Date(),
        updated_at: new Date()
      },
    });

    // Login to get auth token
    const loginRes = await agent
      .post('/api/auth/login')
      .set('X-CSRF-Token', csrfToken)
      .send({
        email: 'test@example.com',
        password: password
      });

    // Store auth data
    authData = {
      csrfToken,
      cookies: Array.isArray(loginRes.headers['set-cookie']) ? loginRes.headers['set-cookie'].join('; ') : loginRes.headers['set-cookie'],
      authToken: loginRes.body.token,
      userId: testUser.user_id
    };
  });

  afterAll(async () => {
    // Clean up test data
    await prisma.challenge_vote.deleteMany({});
    await prisma.participation_vote.deleteMany({});
    await prisma.participation.deleteMany({});
    await prisma.challenge.deleteMany({});
    await prisma.game.deleteMany({});
    await prisma.user.deleteMany({});
    await prisma.user_role.deleteMany({});
    
    await prisma.$disconnect();
  });

  describe("POST /api/games", () => {
    it("should create a new game", async () => {
      const uniqueTitle = `Test Game ${Date.now()}`;
      const res = await agent
        .post("/api/games")
        .set('X-CSRF-Token', authData.csrfToken)
        .set('Cookie', authData.cookies)
        .set('Authorization', `Bearer ${authData.authToken}`)
        .send({
          ...testGame,
          title: uniqueTitle
        });

      expect(res.status).toBe(201);
      expect(res.body).toHaveProperty("game");
      expect(res.body.game).toHaveProperty("game_id");
      expect(res.body.game.title).toBe(uniqueTitle);
      expect(res.body.game.category).toBe(testGame.category);
    });

    it("should not create a game with missing required fields", async () => {
      const res = await agent
        .post("/api/games")
        .set('X-CSRF-Token', authData.csrfToken)
        .set('Cookie', authData.cookies)
        .set('Authorization', `Bearer ${authData.authToken}`)
        .send({ 
          title: "Incomplete Game",
          // Missing required fields: description, release_date, platform, category
        });

      expect(res.status).toBe(400);
      expect(res.body).toHaveProperty("message");
      expect(res.body.message).toContain("is required");
    });
  });

  describe("GET /api/games", () => {
    it("should get all games", async () => {
      const res = await agent
        .get("/api/games")
        .set('Cookie', authData.cookies)
        .set('Authorization', `Bearer ${authData.authToken}`);

      expect(res.status).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
      // Check if the response is sorted by title
      const titles = res.body.map((game: any) => game.title);
      const sortedTitles = [...titles].sort();
      expect(titles).toEqual(sortedTitles);
    });
  });

  describe("GET /api/games/latest", () => {
    it("should get the 4 latest games", async () => {
      const res = await agent
        .get("/api/games/latest")
        .set('Cookie', authData.cookies)
        .set('Authorization', `Bearer ${authData.authToken}`);

      expect(res.status).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
      expect(res.body.length).toBeLessThanOrEqual(4);
    });
  });

  describe("GET /api/games/popular", () => {
    it("should get games ordered by popularity", async () => {
      const res = await agent
        .get("/api/games/popular")
        .set('Cookie', authData.cookies)
        .set('Authorization', `Bearer ${authData.authToken}`);

      expect(res.status).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
      // Check if the response has the expected structure
      if (res.body.length > 1) {
        expect(res.body[0]).toHaveProperty('totalVotes');
      }
    });
  });

  describe("GET /api/games/:id", () => {
    it("should get a game by id", async () => {
      // First create a game to test with
      const uniqueTitle = `Test Game ${Date.now()}`;
      const createdGame = await prisma.game.create({
        data: {
          ...testGame,
          title: uniqueTitle,
          game_id: uuidv4(),
          created_at: new Date(),
          updated_at: new Date()
        }
      });

      const res = await agent
        .get(`/api/games/${createdGame.game_id}`)
        .set('Cookie', authData.cookies)
        .set('Authorization', `Bearer ${authData.authToken}`);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("game");
      expect(res.body.game.game_id).toBe(createdGame.game_id);
      expect(res.body.game.title).toBe(uniqueTitle);
    });

    it("should return 404 for non-existent game", async () => {
      const nonExistentId = uuidv4();
      const res = await agent
        .get(`/api/games/${nonExistentId}`)
        .set('Cookie', authData.cookies)
        .set('Authorization', `Bearer ${authData.authToken}`);

      expect(res.status).toBe(404);
      expect(res.body).toHaveProperty("message");
    });
  });

  describe("PUT /api/games/:id", () => {
    it("should update a game", async () => {
      // First create a game to update
      const uniqueTitle = `Game to update ${Date.now()}`;
      const createdGame = await prisma.game.create({
        data: {
          ...testGame,
          title: uniqueTitle,
          game_id: uuidv4(),
          created_at: new Date(),
          updated_at: new Date()
        }
      });

      const updatedData = {
        title: `Updated ${uniqueTitle}`,
        description: "Updated description",
        platform: "PS5",
        release_date: new Date().toISOString(),
        category: "Updated Category"
      };

      const res = await agent
        .put(`/api/games/${createdGame.game_id}`)
        .set('X-CSRF-Token', authData.csrfToken)
        .set('Cookie', authData.cookies)
        .set('Authorization', `Bearer ${authData.authToken}`)
        .send(updatedData);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("game");
      expect(res.body.game.title).toBe(updatedData.title);
      expect(res.body.game.category).toBe(updatedData.category);
    });
  });

  describe("DELETE /api/games/:id", () => {
    it("should delete a game", async () => {
      // First create a game to delete
      const gameToDelete = await prisma.game.create({
        data: {
          ...testGame,
          game_id: uuidv4(),
          title: `Game to delete ${Date.now()}`,
          created_at: new Date(),
          updated_at: new Date()
        }
      });

      const res = await agent
        .delete(`/api/games/${gameToDelete.game_id}`)
        .set('X-CSRF-Token', authData.csrfToken)
        .set('Cookie', authData.cookies)
        .set('Authorization', `Bearer ${authData.authToken}`);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("message");
      expect(res.body.message).toContain("supprimé avec succès");

      // Verify the game was deleted
      const deletedGame = await prisma.game.findUnique({
        where: { game_id: gameToDelete.game_id }
      });
      expect(deletedGame).toBeNull();
    });
  });
});
