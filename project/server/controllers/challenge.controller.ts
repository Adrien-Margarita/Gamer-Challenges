import { PrismaClient } from "@/generated/prisma"
import { Request, Response, NextFunction } from "express";
import { createHttpError } from "@/utils/httpError";

const prisma = new PrismaClient();

// Créer un nouvel challenge
export const createChallenge = async (req: Request, res: Response, next: NextFunction) => {
  const { user_id } = req.params;

  try {
    const newChallenge = await prisma.challenge.create({
      data: {
        ...req.body,
        user_id: user_id
      }
    });
    res.status(201).json({ challenge: newChallenge });
  } catch (error) {
    next(error);
  };
};

// Récupérer tous les challenges avec pagination et filtres optionnels
export const getAllChallenges = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const challenges = await prisma.challenge.findMany({
      orderBy: {
        title: 'asc',
      },
    });

    res.status(200).json(challenges);
  } catch (error) {
    next(error);
  }
};

// Récupérer un challenge par son ID
export const getChallengeById = async (req: Request, res: Response, next: NextFunction) => {

  const { challenge_id } = req.params;

  try {
    const challenge = await prisma.challenge.findUnique({
      where: { challenge_id },

    });
    res.status(200).json({ challenge });
  } catch (error) {
    next(error);
  }
};

// Mettre à jour un challenge existant
export const updateChallenge = async (req: Request, res: Response, next: NextFunction) => {
  const { challenge_id } = req.params;

  try {
    const challenge = await prisma.challenge.findUnique({
      where: { challenge_id },
    });

    if (!challenge) {
      throw createHttpError(404, `Challenge non trouvé`);
    }

    const challengeToUpdate = await prisma.challenge.update({
      data: {
        ...req.body,
        updatedAt: new Date()
      },
      where: { challenge_id },
    })
    res.status(200).json({ message: `Challenge ${challengeToUpdate.title} mis à jour avec succès` });
  } catch (error) {
    next(error);
  }
};

// Supprimer un challenge
export const deleteChallenge = async (req: Request<{ challenge_id: string }>, res: Response, next: NextFunction) => {
  const { challenge_id } = req.params;

  try {

    const challenge = await prisma.challenge.findUnique({
      where: { challenge_id },
    });

    if (!challenge) {
      throw createHttpError(404, `Challenge non trouvé`);
    }


    const challengeToDelete = await prisma.challenge.delete({
      where: { challenge_id }
    });
    res.status(200).json({ message: `Challenge ${challengeToDelete.title} supprimé avec succès` });
  } catch (error) {
    next(error);
  }
}



