import { PrismaClient } from "@/generated/prisma";
import { Request, Response, NextFunction } from "express";
import { createHttpError } from "@/utils/httpError";

const prisma = new PrismaClient();

// Crée un nouveau vote pour un challenge
export const createChallengeVote = async (
  req: Request<{ challenge_id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { challenge_id } = req.params;
  const user_id = req.session.userId;

  try {
    if (!user_id) throw createHttpError(401, "Utilisateur non authentifié.");

    const already = await prisma.challenge_vote.findFirst({
      where: { challenge_id, user_id },
    });
    if (already) throw createHttpError(400, "Vous avez déjà voté.");

    const vote = await prisma.challenge_vote.create({
      data: { challenge_id, user_id },
    });

    res.status(201).json({ vote });
  } catch (error) {
    next(error);
  }
};


// Récupère tous les votes
export const getAllChallengeVotes = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const votes = await prisma.challenge_vote.findMany();
    res.status(200).json(votes);
  } catch (error) {
    next(error);
  }
};

// Récupère tous les votes d'un challenge
export const getAllChallengeVotesByChallengeId = async (
  req: Request<{ challenge_id: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const votes = await prisma.challenge_vote.findMany({
      where: { challenge_id: req.params.challenge_id },
    });
    res.status(200).json(votes);
  } catch (error) {
    next(error);
  }
};

// Récupère un vote d'un challenge par son ID
export const deleteChallengeVote = async (
  req: Request<{ challenge_id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { challenge_id } = req.params;
  const user_id = req.session.userId;

  try {
    if (!user_id) throw createHttpError(401, "Utilisateur non authentifié.");

    const vote = await prisma.challenge_vote.findFirst({
      where: { challenge_id, user_id },
    });

    if (!vote) {
      throw createHttpError(404, "Vote non trouvé.");
    }

    await prisma.challenge_vote.delete({
      where: { challenge_vote_id: vote.challenge_vote_id },
    });

    res.status(200).json({ message: "Vote supprimé avec succès." });
  } catch (error) {
    next(error);
  }
};
