import { PrismaClient } from "@/generated/prisma";
import { Request, Response, NextFunction } from "express";
import { createHttpError } from "@/utils/httpError";

const prisma = new PrismaClient();

// Créer une nouvelle participation
export const createParticipation = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    delete req.body.user_id;

    const userId = req.session.userId;

    if (!userId) {
      res.status(401).json({ error: "Non authentifié" });
      return;
    }

    const { video_url, image_url, description, challenge_id } = req.body;

    const newParticipation = await prisma.participation.create({
      data: {
        video_url,
        image_url,
        description,
        challenge_id,
        user_id: userId,
      },
    });

    res.status(201).json({ participation: newParticipation });
  } catch (error) {
    next(error);
  }
};

// Récupérer toutes les participations
export const getAllParticipations = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const participations = await prisma.participation.findMany({
      orderBy: {
        created_at: "asc",
      },
    });

    res.status(200).json(participations);
  } catch (error) {
    next(error);
  }
};

// Récupérer une participation par son ID
export const getParticipationById = async (
  req: Request<{ participation_id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { participation_id } = req.params;

  try {
    const participation = await prisma.participation.findUnique({
      where: { participation_id },
    });
    res.status(200).json({ participation });
  } catch (error) {
    next(error);
  }
};

// Récupérer les participations par l'ID du challenge
export const getParticipationsByChallengeId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const participations = await prisma.participation.findMany({
      where: { challenge_id: id },
      include: {
        user: {
          select: {
            user_id: true,
            pseudonym: true,
          },
        },
      },
    });
    res.status(200).json(participations);
  } catch (error) {
    next(error);
  }
};

// Mettre à jour une participation existante
export const updateParticipation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { participation_id } = req.params;

  try {
    const participation = await prisma.participation.findUnique({
      where: { participation_id },
    });

    if (!participation) {
      throw createHttpError(404, `Participation non trouvée`);
    }

    const participationToUpdate = await prisma.participation.update({
      data: {
        ...req.body,
        updated_at: new Date(),
      },
      where: { participation_id },
    });
    res.status(200).json({ message: `Participation mise à jour avec succès` });
  } catch (error) {
    next(error);
  }
};

// Supprimer une participation
export const deleteParticipation = async (
  req: Request<{ participation_id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { participation_id } = req.params;

  try {
    const participation = await prisma.participation.findUnique({
      where: { participation_id },
    });

    if (!participation) {
      throw createHttpError(404, `Participation non trouvée`);
    }

    const participationToDelete = await prisma.participation.delete({
      where: { participation_id },
    });
    res.status(200).json({ message: `Participation supprimée avec succès` });
  } catch (error) {
    next(error);
  }
};
