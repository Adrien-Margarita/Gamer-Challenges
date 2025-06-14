import { PrismaClient } from "@/generated/prisma"
import { Request, Response, NextFunction } from "express";
import { createHttpError } from "@/utils/httpError";

const prisma = new PrismaClient();

// Créer un vote pour un challenge
export const createChallengeVote = async (req: Request, res: Response, next: NextFunction) => {
  const { user_id } = req.params;

  try {
    const newChallengeVote = await prisma.challenge_vote.create({
      data: {
        ...req.body,
        user_id: user_id
      },
    });
    res.status(201).json({ challenge: newChallengeVote });
  } catch (error) {
    next(error);
  };
};

// Récupérer tous les votes d'un challenge
export const getAllChallengeVotes = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const challengesVotes = await prisma.challenge_vote.findMany();

    res.status(200).json(challengesVotes);
  } catch (error) {
    next(error);
  }
};

// Récupérer le vote d'un challenge par son ID
export const getAllChallengeVotesByChallengeId = async (req: Request, res: Response, next: NextFunction) => {

  const { challenge_id } = req.params;

  try {
    const challengeVotes = await prisma.challenge_vote.findMany({
      where: { challenge_id },

    });
    res.status(200).json(challengeVotes);
  } catch (error) {
    next(error);
  }
};

// Récupérer les challenges les plus populaires (avec le plus de votes)
export const getMostPopularChallenges = async (req: Request, res: Response, next: NextFunction) => {
  try {

    const challenges = await prisma.challenge.findMany({
      orderBy: {
        challenge_vote: {
          _count: 'desc',
        },
      },
      include: {
        game: true, // si tu veux récupérer les infos du jeu associé
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
    }));

    res.json(result);
  } catch (error) {
    next(error);
  }
};

// Supprimer un vote pour un challenge
export const deleteChallengeVote = async (req: Request, res: Response, next: NextFunction) => {
  const { challenge_id, user_id } = req.params;

  try {

    const challengeVote = await prisma.challenge_vote.findFirst({
      where: { challenge_id, user_id },
    });

    if (!challengeVote) {
      throw createHttpError(404, `Vote du challenge non trouvé`);
    }

    const challenge_vote_id = challengeVote.challenge_vote_id;

    const challengeVoteToDelete = await prisma.challenge_vote.delete({
      where: { challenge_vote_id }
    });

    res.status(200).json({ message: `Vote supprimé avec succès` });
  } catch (error) {
    next(error);
  }
}