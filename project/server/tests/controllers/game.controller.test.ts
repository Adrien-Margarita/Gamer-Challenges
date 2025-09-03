import request from "supertest";
import { app } from "@/server";
import { PrismaClient } from "@/generated/prisma";
import { v4 as uuidv4 } from "uuid";
import * as argon2 from 'argon2';

const prisma = new PrismaClient({
  datasourceUrl: process.env.TEST_DATABASE_URL,
  log: ['query', 'info', 'warn', 'error']
});

// Helper function to get auth token and CSRF token
const getAuthData = async () => {
  // First, ensure the admin role exists
  const adminRole = await prisma.user_role.upsert({
    where: { role_id: 1 }, 
    update: {
      role_name: 'ADMIN',
      updated_at: new Date()
    },
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

  // Create or update test user with admin role
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

  // Get CSRF token
  const csrfRes = await request(app).get('/api/csrf-token');
  const csrfToken = csrfRes.body.csrfToken;
  
  // Create an agent to maintain session
  const agent = request.agent(app);
  
  // Login to get auth token
  const loginRes = await agent
    .post('/api/auth/login')
    .set('X-CSRF-Token', csrfToken)
    .send({
      email: 'test@example.com',
      password: password
    });

  // Get the session cookies
  const cookies = loginRes.headers['set-cookie'];
  
  return {
    csrfToken,
    cookies,
    authToken: loginRes.body.token,
    userId: testUser.user_id
  };
};

describe("Game Controller", () => {
  const testGameTitle = `Test Game ${Date.now()}`;
  const testGame = {
    game_id: uuidv4(),
    title: testGameTitle,
    description: "A test game description",
    release_date: new Date(),
    image_url: "https://example.com/game.jpg",
    platform: "PC",
    category: "Action"
  };

  let authData: { csrfToken: string; cookies: string[]; authToken: string; userId: number };

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
    
    // Get auth data
    authData = await getAuthData();
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
      const agent = request.agent(app);
      const res = await agent
        .post("/api/games")
        .set('X-CSRF-Token', authData.csrfToken)
        .set('Cookie', authData.cookies)
        .set('Authorization', `Bearer ${authData.authToken}`)
        .send(testGame);

      expect(res.status).toBe(201);
      expect(res.body.game).toHaveProperty("game_id");
      expect(res.body.game.title).toBe(testGame.title);
      expect(res.body.game.category).toBe(testGame.category);
    });

    it("should not create a game with missing required fields", async () => {
      const agent = request.agent(app);
      const res = await agent
        .post("/api/games")
        .set('X-CSRF-Token', authData.csrfToken)
        .set('Cookie', authData.cookies)
        .set('Authorization', `Bearer ${authData.authToken}`)
        .send({
          title: "Incomplete Game",
          category: "Action"
        });

      expect(res.status).toBe(400);
      expect(res.body).toHaveProperty("message");
    });
  });

  describe("GET /api/games", () => {
    it("should get all games", async () => {
      const agent = request.agent(app);
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
      const agent = request.agent(app);
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
      const agent = request.agent(app);
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
      const createdGame = await prisma.game.create({
        data: testGame
      });

      const agent = request.agent(app);
      const res = await agent
        .get(`/api/games/${createdGame.game_id}`)
        .set('Cookie', authData.cookies)
        .set('Authorization', `Bearer ${authData.authToken}`);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("game_id", createdGame.game_id);
      expect(res.body).toHaveProperty("title", createdGame.title);
      expect(res.body).toHaveProperty("category", createdGame.category);
    });

    it("should return 404 for non-existent game", async () => {
      const nonExistentId = uuidv4();
      const agent = request.agent(app);
      const res = await agent
        .get(`/api/games/${nonExistentId}`)
        .set('Cookie', authData.cookies)
        .set('Authorization', `Bearer ${authData.authToken}`);

      expect(res.status).toBe(404);
    });
  });

  describe("PUT /api/games/:id", () => {
    it("should update a game", async () => {
      const createdGame = await prisma.game.create({
        data: testGame
      });

      const updates = {
        title: "Updated Game Title",
        description: "Updated description",
        category: "Adventure"
      };

      const agent = request.agent(app);
      const res = await agent
        .put(`/api/games/${createdGame.game_id}`)
        .set('X-CSRF-Token', authData.csrfToken)
        .set('Cookie', authData.cookies)
        .set('Authorization', `Bearer ${authData.authToken}`)
        .send(updates);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("message");
      expect(res.body.message).toContain(updates.title);

      // Verify the update
      const updatedGame = await prisma.game.findUnique({
        where: { game_id: createdGame.game_id }
      });
      expect(updatedGame?.title).toBe(updates.title);
      expect(updatedGame?.description).toBe(updates.description);
      expect(updatedGame?.category).toBe(updates.category);
    });
  });

  describe("DELETE /api/games/:id", () => {
    it("should delete a game", async () => {
      // First, create a game with the test user as the owner
      const gameToDelete = {
        ...testGame,
        game_id: uuidv4(),
        title: `Game to delete ${Date.now()}`,
        category: "Action"
      };
      
      const createdGame = await prisma.game.create({
        data: gameToDelete
      });

      // Create a new agent for this test to ensure a clean session
      const agent = request.agent(app);
      
      // Get a fresh CSRF token
      const csrfRes = await agent.get('/api/csrf-token');
      const csrfToken = csrfRes.body.csrfToken;
      
      // Login with the same agent to maintain session
      await agent
        .post('/api/auth/login')
        .set('X-CSRF-Token', csrfToken)
        .send({
          email: 'test@example.com',
          password: 'testpassword'
        });

      // Now make the DELETE request with the same agent to maintain session
      const res = await agent
        .delete(`/api/games/${createdGame.game_id}`)
        .set('X-CSRF-Token', csrfToken);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("message");
      expect(res.body.message).toContain("supprimé avec succès");

      // Verify the game was deleted
      const deletedGame = await prisma.game.findUnique({
        where: { game_id: createdGame.game_id }
      });
      expect(deletedGame).toBeNull();
    });
  });
});
