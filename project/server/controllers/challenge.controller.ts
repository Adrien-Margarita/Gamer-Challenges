import { PrismaClient } from "@/generated/prisma";
import { Request, Response, NextFunction } from "express";
import { createHttpError } from "@/utils/httpError";
import { ILatestChallenge } from "@/@types/IChallenge";

const prisma = new PrismaClient();

// Créer un nouvel challenge
export const createChallenge = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = req.session.userId;

    if (!userId) {
      res.status(401).json({ error: "Non authentifié" });
      return;
    }

    delete req.body.user_id;

    const { title, description, rules, image_url, game_id } = req.body;

    const newChallenge = await prisma.challenge.create({
      data: {
        title,
        description,
        rules,
        image_url: image_url || "",
        game_id,
        user_id: userId,
      },
    });

    res.status(201).json(newChallenge);
  } catch (error) {
    next(error);
  }
};

// Récupérer tous les challenges avec pagination et filtres optionnels
export const getAllChallenges = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const challenges = await prisma.challenge.findMany({
      orderBy: {
        title: "asc",
      },
    });

    res.status(200).json(challenges);
  } catch (error) {
    next(error);
  }
};

// Récupérer un challenge par son ID
export const getChallengeById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { id } = req.params;

  try {
    const challenge = await prisma.challenge.findUnique({
      where: { challenge_id: id },
      include: {
        game: {
          select: {
            title: true,
          },
        },
      },
    });

    if (!challenge) {
      res.status(404).json({ message: "Challenge non trouvé" });
      return;
    }

    res.status(200).json(challenge);
  } catch (error) {
    next(error);
  }
};

// Récupérer les challenges par l'ID du jeu
export const getChallengesByGameId = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { id } = req.params;

  try {
    const challenges = await prisma.challenge.findMany({
      where: { game_id: id },
    });
    res.status(200).json(challenges);
  } catch (error) {
    next(error);
  }
};

// Récupérer les challenges les plus populaires (avec le plus de votes)
export const getMostPopularChallenges = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const challenges = await prisma.challenge.findMany({
      orderBy: {
        challenge_vote: {
          _count: "desc",
        },
      },
      include: {
        game: true,
        challenge_vote: {
          select: {
            challenge_vote_id: true,
          },
        },
      },
    });

    const result = challenges.map((challenge) => ({
      challenge_id: challenge.challenge_id,
      title: challenge.title,
      description: challenge.description,
      rules: challenge.rules,
      created_at: challenge.created_at,
      updated_at: challenge.updated_at,
      game: challenge.game,
      votes: challenge.challenge_vote.length,
      image_url: challenge.image_url,
    }));

    res.json(result);
  } catch (error) {
    next(error);
  }
};

// Récupérer les derniers challenges
export const getLastChallenges = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const challenges = await prisma.challenge.findMany({
      orderBy: {
        created_at: "desc",
      },
      include: {
        game: true,
        challenge_vote: {
          select: { challenge_vote_id: true },
        },
      },
    });

    const result = challenges.map((challenge) => ({
      challenge_id: challenge.challenge_id,
      user_id: challenge.user_id,
      game_id: challenge.game_id,
      title: challenge.title,
      description: challenge.description,
      rules: challenge.rules,
      created_at: challenge.created_at,
      updated_at: challenge.updated_at,
      game: {
        game_id: challenge.game.game_id,
        title: challenge.game.title,
        description: challenge.game.description,
        image_url: challenge.game.image_url,
        platform: challenge.game.platform,
        release_date: challenge.game.release_date,
        category: challenge.game.category,
      },
      votes: challenge.challenge_vote.length,
    }));

    res.json(result);
  } catch (error) {
    next(error);
  }
};

// Mettre à jour un challenge existant
export const updateChallenge = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { challenge_id } = req.params;
  const { title, description, rules, image_url, game_id } = req.body;

  try {
    const updatedChallenge = await prisma.challenge.update({
      where: { challenge_id },
      data: {
        title,
        description,
        rules,
        image_url,
        game_id,
        updated_at: new Date(),
      },
    });

    res.status(200).json(updatedChallenge);
  } catch (error) {
    if ((error as { code?: string }).code === "P2025") {
      res.status(404).json({ message: "Challenge non trouvé" });
      return;
    }
    next(error);
  }
};

// Supprimer un challenge
export const deleteChallenge = async (
  req: Request<{ challenge_id: string }>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { challenge_id } = req.params;

  try {
    const challenge = await prisma.challenge.findUnique({
      where: { challenge_id },
    });

    if (!challenge) {
      throw createHttpError(404, `Challenge non trouvé`);
    }

    const challengeToDelete = await prisma.challenge.delete({
      where: { challenge_id },
    });
    res.status(200).json({
      message: `Challenge ${challengeToDelete.title} supprimé avec succès`,
    });
  } catch (error) {
    next(error);
  }
};
