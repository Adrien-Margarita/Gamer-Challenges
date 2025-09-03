import request from "supertest";
import { app, createTestUser } from "@/tests/test-setup";
import { PrismaClient } from "@/generated/prisma";
import { v4 as uuidv4 } from "uuid";

const prisma = new PrismaClient();

describe("Auth Controller", () => {
  let testUser: { id: number; email: string; password: string; pseudonym: string };

  beforeAll(async () => {
    // Create a test user
    testUser = await createTestUser();
  });

  afterAll(async () => {
    // Clean up is handled by test-setup.ts
  });

  describe("POST /api/auth/register", () => {
    it("should register a new user", async () => {
      const newUser = {
        email: `new-${uuidv4()}@example.com`,
        password: "newpassword123",
        pseudonym: `newuser-${uuidv4().substring(0, 8)}`,
      };

      const res = await request(app)
        .post("/api/auth/register")
        .send(newUser);

      expect(res.status).toBe(201);
      expect(res.body).toHaveProperty("user_id");
      expect(res.body.email).toBe(newUser.email);
    });

    it("should not register with existing email", async () => {
      const res = await request(app)
        .post("/api/auth/register")
        .send({
          email: testUser.email,
          password: "password123",
          pseudonym: "newuser"
        });

      expect(res.status).toBe(400);
      expect(res.body).toHaveProperty("message", "Email déjà utilisé.");
    });
  });

  describe("POST /api/auth/login", () => {
    it("should login with correct credentials", async () => {
      const res = await request(app)
        .post("/api/auth/login")
        .send({
          email: testUser.email,
          password: "testpassword123"
        });

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("user_id");
      expect(res.body).toHaveProperty("token");
      expect(res.body.email).toBe(testUser.email);
    });

    it("should not login with incorrect password", async () => {
      const res = await request(app)
        .post("/api/auth/login")
        .send({
          email: testUser.email,
          password: "wrongpassword"
        });

      expect(res.status).toBe(401);
      expect(res.body).toHaveProperty("message", "Email ou mot de passe invalide.");
    });
  });

  describe("GET /api/auth/me", () => {
    let agent: request.SuperTest<request.Test>;
    let authToken: string;

    beforeEach(async () => {
      // Login to get auth token
      const loginRes = await request(app)
        .post("/api/auth/login")
        .send({
          email: testUser.email,
          password: "testpassword123"
        });
      
      authToken = loginRes.body.token;
      agent = request.agent(app);
    });

    it("should get current user when authenticated", async () => {
      const res = await request(app)
        .get("/api/auth/me")
        .set('Authorization', `Bearer ${authToken}`);
      
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("user_id");
      expect(res.body.email).toBe(testUser.email);
    });

    it("should return 401 when not authenticated", async () => {
      const res = await request(app).get("/api/auth/me");
      expect(res.status).toBe(401);
    });
  });

  describe("POST /api/auth/logout", () => {
    it("should logout user", async () => {
      // First login
      const loginRes = await request(app)
        .post("/api/auth/login")
        .send({
          email: testUser.email,
          password: "testpassword123"
        });
      
      const authToken = loginRes.body.token;
      
      // Then logout
      const res = await request(app)
        .post("/api/auth/logout")
        .set('Authorization', `Bearer ${authToken}`);
      
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("message", "Déconnexion réussie.");
    });
  });

  describe("POST /api/auth/forgot-password", () => {
    it("should send reset password email for existing user", async () => {
      const res = await request(app)
        .post("/api/auth/forgot-password")
        .send({ email: testUser.email });

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("message", "Lien de réinitialisation envoyé.");
    });

    it("should return success even for non-existent email", async () => {
      const res = await request(app)
        .post("/api/auth/forgot-password")
        .send({ email: "nonexistent@example.com" });

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("message", "Si un compte existe, un lien a été envoyé.");
    });
  });
});
