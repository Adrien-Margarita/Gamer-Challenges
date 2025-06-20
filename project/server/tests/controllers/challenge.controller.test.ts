import request from "supertest";
import app from "@/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

beforeAll(async () => {
  await prisma.$connect();
});

afterAll(async () => {
  await prisma.$disconnect();
});

describe("Challenge Controller", () => {
  // describe('POST /api/challenges', () => {
  //   it('devrait créer un nouveau challenge', async () => {
  //     const newChallenge = {
  //       title: 'Nouveau Challenge',
  //       description: 'Description du challenge',

  //     };

  //     const res = await request(app).post('/api/challenges').send(newChallenge);

  //     expect(res.status).toBe(201);
  //     expect(res.body.challenge).toHaveProperty('challenge_id');
  //     expect(res.body.challenge.title).toBe(newChallenge.title);
  //   });
  // });

  describe("GET /api/challenges", () => {
    it("devrait récupérer la liste des challenges", async () => {
      const res = await request(app).get("/api/challenges");

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("challenges");
      expect(Array.isArray(res.body.challenges)).toBe(true);
    });
  });
});
