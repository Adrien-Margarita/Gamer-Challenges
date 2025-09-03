import request from "supertest";
import { app } from "@/server";
import { PrismaClient } from "@/generated/prisma";
import * as argon2 from "argon2";
import { v4 as uuidv4 } from "uuid";

const prisma = new PrismaClient({
  datasourceUrl: process.env.TEST_DATABASE_URL,
  log: ['query', 'info', 'warn', 'error']
});

// Helper function to create a test participation
const createTestParticipation = async (challengeId: string, userId: string, overrides = {}) => {
  return {
    video_url: `https://example.com/video-${Date.now()}.mp4`,
    description: `Test participation description ${Date.now()}`,
    challenge_id: challengeId,
    user_id: userId,
    ...overrides
  };
};

describe("Participation Controller", () => {
  let agent: request.SuperTest<request.Test>;
  let authData: { csrfToken: string; cookies: string; authToken: string; userId: string };
  let testChallenge: { challenge_id: string; game_id: string };
  let testGame: { game_id: string };

  beforeAll(async () => {
    // Clean up test data
    await prisma.participation_vote.deleteMany({});
    await prisma.participation.deleteMany({});
    await prisma.challenge.deleteMany({});
    await prisma.game.deleteMany({});
    await prisma.user.deleteMany({});
    await prisma.user_role.deleteMany({});

    agent = request.agent(app) as unknown as request.SuperTest<request.Test>;

    // Get CSRF token
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
      cookies: Array.isArray(loginRes.headers['set-cookie']) ? 
        loginRes.headers['set-cookie'].join('; ') : 
        loginRes.headers['set-cookie'],
      authToken: loginRes.body.token,
      userId: testUser.user_id
    };

    // Create test game
    const game = await prisma.game.create({
      data: {
        game_id: uuidv4(),
        title: `Test Game ${Date.now()}`,
        category: "Test",
        description: "Game for participation tests",
        release_date: new Date(),
        platform: "Test",
        created_at: new Date(),
        updated_at: new Date()
      }
    });
    testGame = { game_id: game.game_id };

    // Create test challenge
    const challenge = await prisma.challenge.create({
      data: {
        challenge_id: uuidv4(),
        title: `Test Challenge ${Date.now()}`,
        description: "Challenge for participation tests",
        rules: "Test rules",
        game_id: testGame.game_id,
        user_id: authData.userId,
        created_at: new Date(),
        updated_at: new Date()
      }
    });
    testChallenge = { 
      challenge_id: challenge.challenge_id,
      game_id: testGame.game_id
    };
  });

  afterAll(async () => {
    // Clean up test data
    await prisma.participation_vote.deleteMany({});
    await prisma.participation.deleteMany({});
    await prisma.challenge.deleteMany({});
    await prisma.game.deleteMany({});
    await prisma.user.deleteMany({});
    await prisma.user_role.deleteMany({});
    await prisma.$disconnect();
  });

  describe("POST /api/participations", () => {
    it("should create a new participation with video_url", async () => {
      const participationData = {
        video_url: `https://example.com/video-${Date.now()}.mp4`,
        description: "Test participation with video",
        challenge_id: testChallenge.challenge_id
      };
      
      const res = await agent
        .post("/api/participations")
        .set('X-CSRF-Token', authData.csrfToken)
        .set('Cookie', authData.cookies)
        .set('Authorization', `Bearer ${authData.authToken}`)
        .send(participationData);

      expect(res.status).toBe(201);
      expect(res.body).toHaveProperty("participation");
      expect(res.body.participation).toHaveProperty("participation_id");
      expect(res.body.participation.video_url).toBe(participationData.video_url);
      expect(res.body.participation.description).toBe(participationData.description);
      expect(res.body.participation.challenge_id).toBe(participationData.challenge_id);
      expect(res.body.participation.user_id).toBe(authData.userId);
    });

    it("should create a new participation with image_url", async () => {
      const participationData = {
        image_url: `https://example.com/image-${Date.now()}.jpg`,
        description: "Test participation with image",
        challenge_id: testChallenge.challenge_id
      };
      
      const res = await agent
        .post("/api/participations")
        .set('X-CSRF-Token', authData.csrfToken)
        .set('Cookie', authData.cookies)
        .set('Authorization', `Bearer ${authData.authToken}`)
        .send(participationData);

      expect(res.status).toBe(201);
      expect(res.body).toHaveProperty("participation");
      expect(res.body.participation.image_url).toBe(participationData.image_url);
    });

    it("should not create a participation with missing required fields", async () => {
      const res = await agent
        .post("/api/participations")
        .set('X-CSRF-Token', authData.csrfToken)
        .set('Cookie', authData.cookies)
        .set('Authorization', `Bearer ${authData.authToken}`)
        .send({
          // Missing required fields
        });

      expect(res.status).toBe(400);
      expect(res.body).toHaveProperty("message");
      expect(res.body.message).toContain("description");
      expect(res.body.message).toContain("challenge_id");
    });

    it("should not create a participation without video_url or image_url", async () => {
      const res = await agent
        .post("/api/participations")
        .set('X-CSRF-Token', authData.csrfToken)
        .set('Cookie', authData.cookies)
        .set('Authorization', `Bearer ${authData.authToken}`)
        .send({
          description: "Test participation without media",
          challenge_id: testChallenge.challenge_id
        });

      expect(res.status).toBe(400);
      expect(res.body).toHaveProperty("message");
      expect(res.body.message).toContain("must contain at least one of");
    });
  });

  describe("GET /api/participations", () => {
    it("should get all participations", async () => {
      const res = await agent
        .get("/api/participations")
        .set('Cookie', authData.cookies)
        .set('Authorization', `Bearer ${authData.authToken}`);

      expect(res.status).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
    });
  });

  describe("GET /api/participations/challenge/:id", () => {
    it("should get participations by challenge ID", async () => {
      const res = await agent
        .get(`/api/participations/challenge/${testChallenge.challenge_id}`)
        .set('Cookie', authData.cookies)
        .set('Authorization', `Bearer ${authData.authToken}`);

      expect(res.status).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
    });

    it("should return 404 for non-existent challenge ID", async () => {
      const nonExistentId = uuidv4();
      const res = await agent
        .get(`/api/participations/challenge/${nonExistentId}`)
        .set('Cookie', authData.cookies)
        .set('Authorization', `Bearer ${authData.authToken}`);

      expect(res.status).toBe(200);
      expect(res.body).toEqual([]);
    });
  });

  describe("GET /api/participations/:participation_id", () => {
    let testParticipation: any;

    beforeAll(async () => {
      // Create a test participation
      testParticipation = await prisma.participation.create({
        data: {
          participation_id: uuidv4(),
          video_url: `https://example.com/video-${Date.now()}.mp4`,
          description: `Test participation ${Date.now()}`,
          challenge_id: testChallenge.challenge_id,
          user_id: authData.userId,
          created_at: new Date(),
          updated_at: new Date()
        }
      });
    });

    it("should get a participation by id", async () => {
      const res = await agent
        .get(`/api/participations/${testParticipation.participation_id}`)
        .set('X-CSRF-Token', authData.csrfToken)
        .set('Cookie', authData.cookies)
        .set('Authorization', `Bearer ${authData.authToken}`);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("participation");
      expect(res.body.participation).toHaveProperty("participation_id", testParticipation.participation_id);
    });

    it("should return 404 for non-existent participation", async () => {
      const nonExistentId = uuidv4();
      const res = await agent
        .get(`/api/participations/${nonExistentId}`)
        .set('X-CSRF-Token', authData.csrfToken)
        .set('Cookie', authData.cookies)
        .set('Authorization', `Bearer ${authData.authToken}`);

      expect(res.status).toBe(404);
      expect(res.body).toHaveProperty("message", "Participation non trouvée");
    });
  });

  describe("PUT /api/participations/:participation_id", () => {
    it("should update a participation", async () => {
      // First create a participation to update
      const participation = await prisma.participation.create({
        data: {
          participation_id: uuidv4(),
          challenge_id: testChallenge.challenge_id,
          user_id: authData.userId,
          video_url: 'https://example.com/original-video',
          description: 'Original description',
          created_at: new Date(),
          updated_at: new Date()
        },
      });

      const updateData = {
        video_url: 'https://example.com/updated-video',
        description: 'Updated description',
        challenge_id: testChallenge.challenge_id
      };

      const res = await agent
        .put(`/api/participations/${participation.participation_id}`)
        .set('X-CSRF-Token', authData.csrfToken)
        .set('Cookie', authData.cookies)
        .set('Authorization', `Bearer ${authData.authToken}`)
        .send(updateData);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('message', 'Participation mise à jour avec succès');
      expect(res.body.participation).toMatchObject({
        video_url: updateData.video_url,
        description: updateData.description,
        challenge_id: updateData.challenge_id,
      });
    });

    it("should return 400 when updating with invalid data", async () => {
      // First create a participation to update
      const participation = await prisma.participation.create({
        data: {
          participation_id: uuidv4(),
          challenge_id: testChallenge.challenge_id,
          user_id: authData.userId,
          video_url: 'https://example.com/valid-video',
          description: 'Valid description',
          created_at: new Date(),
          updated_at: new Date()
        },
      });

      // Try to update with invalid data (missing required fields)
      const invalidUpdateData = {
        video_url: null,  // This will be converted to string "null"
        // Missing required fields: description, challenge_id
      };

      const res = await agent
        .put(`/api/participations/${participation.participation_id}`)
        .set('X-CSRF-Token', authData.csrfToken)
        .set('Cookie', authData.cookies)
        .set('Authorization', `Bearer ${authData.authToken}`)
        .send(invalidUpdateData);

      expect(res.status).toBe(400);
      expect(res.body).toHaveProperty('message');
    });
  });

  describe("DELETE /api/participations/:participation_id", () => {
    it("should delete a participation", async () => {
      // Create a new participation to delete
      const participation = await prisma.participation.create({
        data: {
          user_id: authData.userId,
          challenge_id: testChallenge.challenge_id,
          video_url: 'https://example.com/to-delete.mp4',
          description: 'To be deleted'
        }
      });

      const res = await agent
        .delete(`/api/participations/${participation.participation_id}`)
        .set('X-CSRF-Token', authData.csrfToken)
        .set('Cookie', authData.cookies)
        .set('Authorization', `Bearer ${authData.authToken}`);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("message", "Participation supprimée avec succès");

      // Verify the participation was actually deleted
      const deletedParticipation = await prisma.participation.findUnique({
        where: { participation_id: participation.participation_id }
      });
      expect(deletedParticipation).toBeNull();
    });

    it("should return 404 when deleting non-existent participation", async () => {
      const nonExistentId = uuidv4();
      const res = await agent
        .delete(`/api/participations/${nonExistentId}`)
        .set('X-CSRF-Token', authData.csrfToken)
        .set('Cookie', authData.cookies)
        .set('Authorization', `Bearer ${authData.authToken}`);

      expect(res.status).toBe(404);
      expect(res.body).toHaveProperty("message", "Participation non trouvée");
    });
  });
});
