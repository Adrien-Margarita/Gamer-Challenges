import request from "supertest";
import { app } from "@/server";
import { PrismaClient } from "@/generated/prisma";
import * as argon2 from "argon2";
import { v4 as uuidv4 } from "uuid";

const prisma = new PrismaClient({
  datasourceUrl: process.env.TEST_DATABASE_URL,
  log: ['query', 'info', 'warn', 'error']
});

describe("User Controller", () => {
  let agent: request.SuperTest<request.Test>;
  let authData: { csrfToken: string; cookies: string; authToken: string; userId: string };
  let testUser: any;
  let testGame: any;
  let testChallenge: any;
  let testParticipation: any;
  let adminAuthData: { csrfToken: string; cookies: string; authToken: string; userId: string };

  // Helper function to create a test user
  const createTestUser = async (overrides = {}) => {
    const timestamp = Date.now();
    const userData = {
      email: `test-${timestamp}@example.com`,
      password: "TestPassword123!",
      pseudonym: `testuser-${timestamp}`,
      ...overrides
    };

    const hashedPassword = await argon2.hash(userData.password);
    
    return prisma.user.create({
      data: {
        email: userData.email,
        password_hash: hashedPassword,
        pseudonym: userData.pseudonym,
        role_id: 0, // Default user role
        created_at: new Date(),
        updated_at: new Date()
      }
    });
  };

  beforeAll(async () => {
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

    // Create user role
    const userRole = await prisma.user_role.create({
      data: { 
        role_id: 0, 
        role_name: "USER", 
        created_at: new Date(), 
        updated_at: new Date() 
      }
    });

    // Create admin role
    const adminRole = await prisma.user_role.create({
      data: { 
        role_id: 1, 
        role_name: "ADMIN", 
        created_at: new Date(), 
        updated_at: new Date() 
      }
    });

    // Create test user
    testUser = await createTestUser();

    // Create admin user
    const adminUser = await createTestUser({
      email: 'admin@example.com',
      pseudonym: 'admin',
      role_id: 1
    });

    // Get CSRF token for regular user
    const csrfRes = await agent.get('/api/csrf-token');
    const csrfToken = csrfRes.body.csrfToken;

    // Login as regular user
    const loginRes = await agent
      .post('/api/auth/login')
      .set('X-CSRF-Token', csrfToken)
      .send({
        email: testUser.email,
        password: 'TestPassword123!'
      });

    authData = {
      csrfToken,
      cookies: Array.isArray(loginRes.headers['set-cookie']) ? 
        loginRes.headers['set-cookie'].join('; ') : 
        loginRes.headers['set-cookie'],
      authToken: loginRes.body.token,
      userId: testUser.user_id
    };

    // Login as admin user
    const adminLoginRes = await agent
      .post('/api/auth/login')
      .set('X-CSRF-Token', csrfToken)
      .send({
        email: 'admin@example.com',
        password: 'TestPassword123!'
      });

    adminAuthData = {
      csrfToken,
      cookies: Array.isArray(adminLoginRes.headers['set-cookie']) ? 
        adminLoginRes.headers['set-cookie'].join('; ') : 
        adminLoginRes.headers['set-cookie'],
      authToken: adminLoginRes.body.token,
      userId: adminUser.user_id
    };

    // Create test game
    testGame = await prisma.game.create({
      data: {
        game_id: uuidv4(),
        title: 'Test Game',
        category: 'Test',
        description: 'Test game description',
        release_date: new Date(),
        platform: 'PC',
        created_at: new Date(),
        updated_at: new Date()
      }
    });

    // Create test challenge
    testChallenge = await prisma.challenge.create({
      data: {
        challenge_id: uuidv4(),
        title: 'Test Challenge',
        description: 'Test challenge description',
        rules: 'Test rules',
        user_id: testUser.user_id,
        game_id: testGame.game_id,
        created_at: new Date(),
        updated_at: new Date()
      }
    });

    // Create test participation
    testParticipation = await prisma.participation.create({
      data: {
        participation_id: uuidv4(),
        user_id: testUser.user_id,
        challenge_id: testChallenge.challenge_id,
        video_url: 'https://example.com/video.mp4',
        description: 'Test participation',
        created_at: new Date(),
        updated_at: new Date()
      }
    });
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  describe("GET /api/users", () => {
    it("should get all users", async () => {
      const res = await agent
        .get("/api/users")
        .set('X-CSRF-Token', authData.csrfToken)
        .set('Authorization', `Bearer ${authData.authToken}`);

      expect(res.status).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
      // Should not include password hashes
      res.body.forEach((user: any) => {
        expect(user).not.toHaveProperty('password_hash');
      });
    });
  });

  describe("GET /api/users/:user_id", () => {
    it("should get a user by ID", async () => {
      const res = await agent
        .get(`/api/users/${testUser.user_id}`)
        .set('X-CSRF-Token', authData.csrfToken)
        .set('Authorization', `Bearer ${authData.authToken}`);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('user');
      expect(res.body.user).toHaveProperty('user_id', testUser.user_id);
      expect(res.body.user).not.toHaveProperty('password_hash');
    });

    it("should return 400 for missing user ID", async () => {
      const res = await agent
        .get('/api/users/ ') // Space after the slash to test empty ID
        .set('X-CSRF-Token', authData.csrfToken)
        .set('Authorization', `Bearer ${authData.authToken}`);

      expect(res.status).toBe(400);
      expect(res.body).toHaveProperty('message', 'User ID is required');
    });

    it("should return 404 for non-existent user", async () => {
      const nonExistentId = '00000000-0000-0000-0000-000000000000';
      const res = await agent
        .get(`/api/users/${nonExistentId}`)
        .set('X-CSRF-Token', authData.csrfToken)
        .set('Authorization', `Bearer ${authData.authToken}`);

      expect(res.status).toBe(404);
      expect(res.body).toHaveProperty('message', 'User not found');
    });
  });

  describe("GET /api/users/:id/challenges", () => {
    it("should get challenges by user ID", async () => {
      const res = await agent
        .get(`/api/users/${testUser.user_id}/challenges`)
        .set('X-CSRF-Token', authData.csrfToken)
        .set('Authorization', `Bearer ${authData.authToken}`);

      expect(res.status).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
      // Should include challenge with test data
      expect(res.body.some((c: any) => c.challenge_id === testChallenge.challenge_id)).toBe(true);
    });
  });

  describe("GET /api/users/:id/participations", () => {
    it("should get participations by user ID", async () => {
      const res = await agent
        .get(`/api/users/${testUser.user_id}/participations`)
        .set('X-CSRF-Token', authData.csrfToken)
        .set('Authorization', `Bearer ${authData.authToken}`);

      expect(res.status).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
      // Should include test participation
      expect(res.body.some((p: any) => p.participation_id === testParticipation.participation_id)).toBe(true);
    });
  });

  describe("PUT /api/users/:user_id", () => {
    it("should update a user's information", async () => {
      const updateData = {
        pseudonym: 'UpdatedTestUser',
        email: 'updated@example.com',
        password_hash: 'newpassword123'
      };

      const res = await agent
        .put(`/api/users/${testUser.user_id}`)
        .set('X-CSRF-Token', authData.csrfToken)
        .set('Authorization', `Bearer ${authData.authToken}`)
        .send(updateData);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('message', 'User updated successfully');
      expect(res.body.user).toHaveProperty('pseudonym', updateData.pseudonym);
      expect(res.body.user).toHaveProperty('email', updateData.email);
    });
  });

  describe("DELETE /api/users/me", () => {
    it("should delete the current user's account", async () => {
      // Create a temporary user for this test
      const tempUser = await createTestUser({
        email: 'temp@example.com',
        pseudonym: 'tempuser'
      });

      // Login as the temporary user
      const loginRes = await agent
        .post('/api/auth/login')
        .set('X-CSRF-Token', authData.csrfToken)
        .send({
          email: 'temp@example.com',
          password: 'TestPassword123!'
        });

      const tempAuthData = {
        csrfToken: authData.csrfToken,
        cookies: Array.isArray(loginRes.headers['set-cookie']) ? 
          loginRes.headers['set-cookie'].join('; ') : 
          loginRes.headers['set-cookie'],
        authToken: loginRes.body.token,
        userId: tempUser.user_id
      };

      const res = await agent
        .delete('/api/users/me')
        .set('X-CSRF-Token', tempAuthData.csrfToken)
        .set('Authorization', `Bearer ${tempAuthData.authToken}`);

      expect(res.status).toBe(200);
      expect(res.body.message).toContain('supprimé avec succès');
    });
  });

  describe("DELETE /api/users/:user_id (admin only)", () => {
    it("should allow admin to delete another user", async () => {
      // Create a temporary user to be deleted
      const userToDelete = await createTestUser({
        email: 'tobedeleted@example.com',
        pseudonym: 'tobedeleted'
      });

      const res = await agent
        .delete(`/api/users/${userToDelete.user_id}`)
        .set('X-CSRF-Token', adminAuthData.csrfToken)
        .set('Authorization', `Bearer ${adminAuthData.authToken}`);

      // Check for 200 OK with success message or 204 No Content
      expect([200, 204]).toContain(res.status);
      
      if (res.status === 200) {
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toContain('supprimé avec succès');
      }

      // Verify the user was actually deleted
      const deletedUser = await prisma.user.findUnique({
        where: { user_id: userToDelete.user_id }
      });
      expect(deletedUser).toBeNull();
    });

    it("should not allow non-admin to delete another user", async () => {
      const anotherUser = await createTestUser({
        email: 'anotheruser@example.com',
        pseudonym: 'anotheruser'
      });

      const res = await agent
        .delete(`/api/users/${anotherUser.user_id}`)
        .set('X-CSRF-Token', authData.csrfToken)
        .set('Authorization', `Bearer ${authData.authToken}`);

      // Should return 403 Forbidden or 401 Unauthorized
      expect([401, 403]).toContain(res.status);
    });
  });
});
