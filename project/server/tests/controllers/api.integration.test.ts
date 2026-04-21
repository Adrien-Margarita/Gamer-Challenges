/// <reference types="jest" />

import request from "supertest";
import argon2 from "argon2";

// Mock minimal de Prisma utilisé par tous les contrôleurs testés.
const prismaMock = {
  user: {
    findUnique: jest.fn(),
  },
  challenge: {
    findMany: jest.fn(),
    create: jest.fn(),
  },
  participation: {
    create: jest.fn(),
  },
};

jest.mock("@/generated/prisma", () => ({
  PrismaClient: jest.fn(() => prismaMock),
}));

jest.mock("argon2", () => ({
  __esModule: true,
  default: {
    verify: jest.fn(),
    hash: jest.fn(),
  },
}));

import { app } from "../../server";

const mockedArgon2 = argon2 as unknown as {
  verify: jest.Mock;
};

const validUser = {
  user_id: "2a9a78dc-f0d6-4b45-86d4-f43211d9a9f0",
  email: "adrien-margarita@hotmail.fr",
  password_hash: "$argon2id$fakehash",
  pseudonym: "Froch",
  avatar_url: "https://example.com/avatar.jpg",
  created_at: new Date("2026-01-01T00:00:00.000Z"),
  updated_at: new Date("2026-01-01T00:00:00.000Z"),
  role: {
    role_id: 1,
    role_name: "admin",
  },
};

const loginPayload = {
  email: "adrien-margarita@hotmail.fr",
  password: "admin",
};

const validChallengePayload = {
  title: "Challenge RNCP API",
  description: "Description de test stable",
  rules: "Respecter les regles",
  game_id: "11111111-1111-1111-1111-111111111111",
  image_url: "",
};

const getCsrfToken = async (agent: ReturnType<typeof request.agent>) => {
  const csrfResponse = await agent.get("/api/csrf-token");
  return csrfResponse.body.csrfToken as string;
};

const loginWithSession = async (agent: ReturnType<typeof request.agent>) => {
  return agent.post("/api/auth/login").send(loginPayload);
};

describe("API integration - critical paths", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("T001 - GET /api/challenges returns 200 and an array", async () => {
    prismaMock.challenge.findMany.mockResolvedValue([
      {
        challenge_id: "c1",
        title: "Challenge A",
      },
    ]);

    const response = await request(app).get("/api/challenges");

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(prismaMock.challenge.findMany).toHaveBeenCalledTimes(1);
  });

  test("T002 - POST /api/auth/login returns success for valid credentials", async () => {
    const agent = request.agent(app);

    prismaMock.user.findUnique.mockResolvedValue(validUser);
    mockedArgon2.verify.mockResolvedValue(true);

    const response = await loginWithSession(agent);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("user_id");
    expect(response.body).not.toHaveProperty("password_hash");
  });

  test("T003 - POST /api/auth/login returns 401 for invalid credentials", async () => {
    const agent = request.agent(app);

    prismaMock.user.findUnique.mockResolvedValue(null);

    const response = await agent
      .post("/api/auth/login")
      .send({
        email: "unknown@example.com",
        password: "wrong",
      });

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty("message");
  });

  test("T004 - GET /api/auth/me returns 401 without session", async () => {
    const response = await request(app).get("/api/auth/me");

    expect(response.status).toBe(401);
    expect(response.body.message).toBe("Non autorisé");
  });

  test("T005 - POST /api/challenges returns 201 with valid data", async () => {
    const agent = request.agent(app);

    // 1) Authenticate and keep session cookie in the same agent.
    prismaMock.user.findUnique.mockResolvedValue(validUser);
    mockedArgon2.verify.mockResolvedValue(true);

    const loginResponse = await loginWithSession(agent);
    expect(loginResponse.status).toBe(200);

    // 2) Get a fresh CSRF token for protected POST routes.
    const csrfToken = await getCsrfToken(agent);

    prismaMock.challenge.create.mockResolvedValue({
      challenge_id: "22222222-2222-2222-2222-222222222222",
      ...validChallengePayload,
      user_id: validUser.user_id,
    });

    const response = await agent
      .post("/api/challenges")
      .set("x-csrf-token", csrfToken)
      .send(validChallengePayload);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("challenge_id");
    expect(prismaMock.challenge.create).toHaveBeenCalledTimes(1);
  });

  test("T006 - POST /api/challenges returns 400 with invalid data", async () => {
    const agent = request.agent(app);

    prismaMock.user.findUnique.mockResolvedValue(validUser);
    mockedArgon2.verify.mockResolvedValue(true);
    await loginWithSession(agent);

    const csrfToken = await getCsrfToken(agent);

    const response = await agent
      .post("/api/challenges")
      .set("x-csrf-token", csrfToken)
      .send({
        title: "Challenge incomplet",
      });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("message");
    expect(prismaMock.challenge.create).not.toHaveBeenCalled();
  });

  test("T007 - BONUS POST /api/participations returns 201 with valid data", async () => {
    const agent = request.agent(app);

    prismaMock.user.findUnique.mockResolvedValue(validUser);
    mockedArgon2.verify.mockResolvedValue(true);
    await loginWithSession(agent);

    const csrfToken = await getCsrfToken(agent);

    prismaMock.participation.create.mockResolvedValue({
      participation_id: "33333333-3333-3333-3333-333333333333",
      description: "Ma participation vidéo",
      challenge_id: "22222222-2222-2222-2222-222222222222",
      user_id: validUser.user_id,
      video_url: "https://example.com/video.mp4",
      image_url: null,
    });

    const response = await agent
      .post("/api/participations")
      .set("x-csrf-token", csrfToken)
      .send({
        description: "Ma participation vidéo",
        challenge_id: "22222222-2222-2222-2222-222222222222",
        video_url: "https://example.com/video.mp4",
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("participation");
    expect(prismaMock.participation.create).toHaveBeenCalledTimes(1);
  });
});
