import request from "supertest";
import { app } from "@/server";
import { PrismaClient } from "@/generated/prisma";
import { v4 as uuidv4 } from "uuid";

const prisma = new PrismaClient();

describe("Game Controller", () => {
  let testGame = {
    game_id: `test-${uuidv4()}`,
    title: `Test Game ${Date.now()}`,
    description: "A test game description",
    release_date: new Date(),
    image_url: "https://example.com/game.jpg",
    platform: "PC"
  };

  beforeAll(async () => {
    await prisma.$connect();
  });

  afterAll(async () => {
    // Clean up test data
    await prisma.game.deleteMany({
      where: {
        OR: [
          { game_id: testGame.game_id },
          { title: { startsWith: 'Test Game ' } }
        ],
      },
    });
    await prisma.$disconnect();
  });

  describe("POST /api/games", () => {
    it("should create a new game", async () => {
      const res = await request(app)
        .post("/api/games")
        .send(testGame);

      expect(res.status).toBe(201);
      expect(res.body.game).toHaveProperty("game_id");
      expect(res.body.game.title).toBe(testGame.title);
    });

    it("should not create a game with missing required fields", async () => {
      const res = await request(app)
        .post("/api/games")
        .send({
          title: "Incomplete Game"
          // Missing required fields
        });

      expect(res.status).toBe(500);
    });
  });

  describe("GET /api/games", () => {
    it("should get all games", async () => {
      const res = await request(app).get("/api/games");

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
      const res = await request(app).get("/api/games/latest");

      expect(res.status).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
      expect(res.body.length).toBeLessThanOrEqual(4);
    });
  });

  describe("GET /api/games/popular", () => {
    it("should get games ordered by popularity", async () => {
      const res = await request(app).get("/api/games/popular");

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

      const res = await request(app).get(`/api/games/${createdGame.game_id}`);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("game_id", createdGame.game_id);
      expect(res.body).toHaveProperty("title", createdGame.title);
    });

    it("should return 404 for non-existent game", async () => {
      const nonExistentId = `non-existent-${uuidv4()}`;
      const res = await request(app).get(`/api/games/${nonExistentId}`);

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
        description: "Updated description"
      };

      const res = await request(app)
        .put(`/api/games/${createdGame.game_id}`)
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
    });
  });

  describe("DELETE /api/games/:id", () => {
    it("should delete a game", async () => {
      const createdGame = await prisma.game.create({
        data: {
          ...testGame,
          game_id: `delete-test-${uuidv4()}`,
          title: `Game to delete ${Date.now()}`
        }
      });

      const res = await request(app)
        .delete(`/api/games/${createdGame.game_id}`);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("message");
      expect(res.body.message).toContain("supprimé avec succès");

      // Verify deletion
      const deletedGame = await prisma.game.findUnique({
        where: { game_id: createdGame.game_id }
      });
      expect(deletedGame).toBeNull();
    });
  });
});
