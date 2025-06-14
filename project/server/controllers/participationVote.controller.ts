import { PrismaClient } from "@/generated/prisma";
import { Request, Response, NextFunction } from "express";
import { createHttpError } from "@/utils/httpError";

const prisma = new PrismaClient();

// Créer un vote pour une participation
export const createParticipationVote = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { user_id } = req.params;

  try {
    const newParticipationVote = await prisma.participation_vote.create({
      data: {
        ...req.body,
        user_id: user_id,
      },
    });
    res.status(201).json({ participation: newParticipationVote });
  } catch (error) {
    next(error);
  }
};

// Récupérer tous les votes à une participation
export const getAllParticipationVotes = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const participationVotes = await prisma.participation_vote.findMany();

    res.status(200).json(participationVotes);
  } catch (error) {
    next(error);
  }
};

// Récupérer tous les votes à une participation
export const getMostVotedPlayers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Récupérer les joueurs ayant le plus de votes
    // On groupe par user_id et on compte le nombre de votes pour chaque utilisateur    
    const mostVotedPlayers = await prisma.participation_vote.groupBy({
      by: ["user_id"],
      _count: { user_id: true },
      orderBy: { _count: { user_id: "desc" } },
    });

    const result = await Promise.all(
      mostVotedPlayers.map(async (vote) => {
        const user = await prisma.user.findUnique({
          where: { user_id: vote.user_id },
          select: { pseudonym: true, user_id: true, avatar_url: true },
        });
        return {
          user: user,
          votes: vote._count.user_id,
        };
      })
    );

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

// Récupérer le vote d'une participation par son ID
export const getAllParticipationVotesByParticipationId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { participation_id } = req.params;

  try {
    const participationVotes = await prisma.participation_vote.findMany({
      where: { participation_id },
    });
    res.status(200).json(participationVotes);
  } catch (error) {
    next(error);
  }
};

// Supprimer un vote pour une participation
export const deleteParticipationVote = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { participation_id, user_id } = req.params;

  try {
    const participationVote = await prisma.participation_vote.findFirst({
      where: { participation_id, user_id },
    });

    if (!participationVote) {
      throw createHttpError(404, `Vote de la participation non trouvé`);
    }

    const participation_vote_id = participationVote.participation_vote_id;

    const participationVoteToDelete = await prisma.participation_vote.delete({
      where: { participation_vote_id },
    });

    res.status(200).json({ message: `Vote supprimé avec succès` });
  } catch (error) {
    next(error);
  }
};
