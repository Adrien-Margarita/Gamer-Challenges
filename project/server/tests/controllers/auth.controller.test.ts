import request, { Agent } from "supertest";
import { app } from "@/server";
import { PrismaClient } from "@/generated/prisma";
import { v4 as uuidv4 } from "uuid";
import * as argon2 from 'argon2';

const prisma = new PrismaClient({
  datasourceUrl: process.env.TEST_DATABASE_URL,
  log: process.env.DEBUG ? ['query', 'info', 'warn', 'error'] : ['error']
});

type TestUser = {
  email: string;
  password: string;
  pseudonym: string;
  userId?: string;
};

describe("Auth Controller", () => {
  let agent: Agent;
  let csrfToken: string;
  let testUser: TestUser;

  // Helper to create a test user
  const createTestUser = async (): Promise<TestUser> => {
    // Ensure the role exists
    await prisma.user_role.upsert({
      where: { role_id: 0 },
      update: {},
      create: {
        role_id: 0,
        role_name: 'user',
        created_at: new Date(),
        updated_at: new Date()
      }
    });

    const timestamp = new Date().getTime();
    const user = {
      email: `test-${timestamp}@example.com`,
      password: "TestPassword123!",
      pseudonym: `testuser-${timestamp.toString().slice(-6)}`,
    };

    const createdUser = await prisma.user.create({
      data: {
        email: user.email,
        password_hash: await argon2.hash(user.password),
        pseudonym: user.pseudonym,
        role_id: 0,
        created_at: new Date(),
        updated_at: new Date(),
        avatar_url: `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.pseudonym}`
      },
    });

    return { ...user, userId: createdUser.user_id };
  };

  // Clean up all test data
  const cleanupTestData = async () => {
    const tables = [
      'challenge_vote',
      'participation_vote',
      'participation',
      'challenge',
      'game',
      'password_reset_token',
      'user',
      'user_role'
    ];

    // Disable foreign key checks
    await prisma.$executeRaw`SET session_replication_role = 'replica'`;
    
    // Delete data from all tables
    for (const table of tables) {
      await prisma.$executeRawUnsafe(`DELETE FROM "${table}"`);
    }
    
    // Re-enable foreign key checks
    await prisma.$executeRaw`SET session_replication_role = 'origin'`;
    
    // Ensure user role exists
    await prisma.user_role.upsert({
      where: { role_id: 0 },
      update: {},
      create: {
        role_id: 0,
        role_name: "USER",
        created_at: new Date(),
        updated_at: new Date()
      },
    });
  };

  beforeAll(async () => {
    await prisma.$connect();
    await cleanupTestData();
    
    // Create test agent and get CSRF token
    agent = request.agent(app);
    const csrfRes = await agent.get('/api/csrf-token');
    csrfToken = csrfRes.body.csrfToken;
    
    // Set up test user
    testUser = await createTestUser();
  });

  afterEach(async () => {
    // Clean up any test data after each test
    await cleanupTestData();
    // Recreate test user after cleanup
    if (testUser) {
      testUser = await createTestUser();
    }
  });

  afterAll(async () => {
    await cleanupTestData();
    await prisma.$disconnect();
  });

  describe("POST /api/auth/register", () => {
    it("should register a new user", async () => {
      const newUser = {
        email: `new-${uuidv4()}@example.com`,
        password: "newpassword123",
        pseudonym: `newuser-${uuidv4().substring(0, 8)}`,
      };

      const res = await agent
        .post("/api/auth/register")
        .set('X-CSRF-Token', csrfToken)
        .send(newUser);

      expect(res.status).toBe(201);
      expect(res.body).toHaveProperty('user_id');
      expect(res.body).toHaveProperty('email', newUser.email);
      expect(res.body).toHaveProperty('pseudonym', newUser.pseudonym);
      expect(res.body).not.toHaveProperty('password');
      expect(res.body).not.toHaveProperty('password_hash');
    });

    it("should not register with existing email", async () => {
      const res = await agent
        .post("/api/auth/register")
        .set('X-CSRF-Token', csrfToken)
        .send({
          email: testUser.email,
          password: "somepassword",
          pseudonym: "newuser"
        });

      expect(res.status).toBe(400);
      expect(res.body).toHaveProperty('message', 'Email déjà utilisé.');
    });
  });

  describe("POST /api/auth/login", () => {
    it("should login with correct credentials", async () => {
      const response = await agent
        .post("/api/auth/login")
        .set('X-CSRF-Token', csrfToken)
        .send({
          email: testUser.email,
          password: testUser.password
        });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('user_id');
      expect(response.body.email).toBe(testUser.email);
    });

    it("should not login with incorrect password", async () => {
      const response = await agent
        .post("/api/auth/login")
        .set('X-CSRF-Token', csrfToken)
        .send({
          email: testUser.email,
          password: "wrongpassword"
        });

      expect(response.status).toBe(401);
      expect(response.body).toHaveProperty('message', 'Email ou mot de passe invalide.');
    });
  });

  describe("POST /api/auth/logout", () => {
    it("should logout user", async () => {
      // First login
      await agent
        .post("/api/auth/login")
        .set('X-CSRF-Token', csrfToken)
        .send({
          email: testUser.email,
          password: testUser.password
        });

      // Then logout
      const logoutResponse = await agent
        .post("/api/auth/logout")
        .set('X-CSRF-Token', csrfToken);
      
      expect(logoutResponse.status).toBe(200);

      // Verify user is logged out
      const meResponse = await agent
        .get("/api/auth/me")
        .set('X-CSRF-Token', csrfToken);
      
      expect(meResponse.status).toBe(401);
    });
  });

  describe("POST /api/auth/forgot-password", () => {
    it("should send reset password email for existing user", async () => {
      const response = await agent
        .post("/api/auth/forgot-password")
        .set('X-CSRF-Token', csrfToken)
        .send({ email: testUser.email });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('message');
    });

    it("should return success even for non-existent email", async () => {
      const response = await agent
        .post("/api/auth/forgot-password")
        .set('X-CSRF-Token', csrfToken)
        .send({ email: "nonexistent@example.com" });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('message');
    });
  });
});
