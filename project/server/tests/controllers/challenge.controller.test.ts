import request from "supertest";
import { app, createTestUser } from "@/tests/test-setup";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

describe("Challenge Controller", () => {
  let testUser: { id: number; email: string; password: string; pseudonym: string };
  let authToken: string;

  beforeAll(async () => {
    // Create a test user and get auth token
    testUser = await createTestUser();
    
    const loginRes = await request(app)
      .post("/api/auth/login")
      .send({
        email: testUser.email,
        password: "testpassword123"
      });
    
    authToken = loginRes.body.token;
  });

  afterAll(async () => {
    // Clean up is handled by test-setup.ts
  });

  describe("GET /api/challenges", () => {
    it("devrait récupérer la liste des challenges", async () => {
      const res = await request(app)
        .get("/api/challenges")
        .set('Authorization', `Bearer ${authToken}`);

      expect(res.status).toBe(200);
      expect(Array.isArray(res.body.challenges)).toBe(true);
    });
  });

  describe("POST /api/challenges", () => {
    it("devrait créer un nouveau challenge", async () => {
      const newChallenge = {
        title: "Test Challenge",
        description: "This is a test challenge",
        start_date: new Date().toISOString(),
        end_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
        game_id: 1, // Make sure this game exists in your test DB
        rules: "Test rules",
        reward: "Test reward"
      };

      const res = await request(app)
        .post("/api/challenges")
        .set('Authorization', `Bearer ${authToken}`)
        .send(newChallenge);

      expect(res.status).toBe(201);
      expect(res.body).toHaveProperty("challenge_id");
      expect(res.body.title).toBe(newChallenge.title);
    });
  });

  describe("GET /api/challenges/:id", () => {
    it("devrait récupérer un challenge par son ID", async () => {
      // First create a test challenge
      const newChallenge = await prisma.challenge.create({
        data: {
          title: "Test Get Challenge",
          description: "Test description",
          start_date: new Date(),
          end_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          game_id: 1,
          created_by: testUser.id,
          rules: "Test rules",
          reward: "Test reward"
        }
      });

      const res = await request(app)
        .get(`/api/challenges/${newChallenge.id}`)
        .set('Authorization', `Bearer ${authToken}`);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("id", newChallenge.id);
      expect(res.body.title).toBe("Test Get Challenge");
    });
  });
});
