import { PrismaClient } from "@/generated/prisma";
import { Request, Response, NextFunction } from "express";
import { createHttpError } from "@/utils/httpError";

const prisma = new PrismaClient();

/**
 * Ajoute un vote pour la participation indiquée.
 * L’utilisateur est déterminé par req.session.userId.
 */
export const createParticipationVote = async (
  req: Request<{ participation_id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { participation_id } = req.params;
  const user_id = req.session.userId;           

  try {
    if (!user_id) throw createHttpError(401, "Utilisateur non authentifié.");

    // Empêche le double-vote : 1 user / 1 vote par participation
    const already = await prisma.participation_vote.findFirst({
      where: { participation_id, user_id },
    });
    if (already) throw createHttpError(400, "Vous avez déjà voté.");

    const vote = await prisma.participation_vote.create({
      data: { participation_id, user_id },
    });

    res.status(201).json({ vote });
  } catch (error) {
    next(error);
  }
};

//  Récupère tous les votes
export const getAllParticipationsVotes = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const votes = await prisma.participation_vote.findMany();
    res.status(200).json(votes);
  } catch (error) {
    next(error);
  }
};


// Récupère tous les votes d'une participation
export const getAllParticipationVotesByParticipationId = async (
  req: Request<{ participation_id: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const votes = await prisma.participation_vote.findMany({
      where: { participation_id: req.params.participation_id },
    });
    res.status(200).json(votes);
  } catch (error) {
    next(error);
  }
};


// Classement des utilisateurs ayant reçu le plus de votes
export const getMostVotedPlayers = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const grouped = await prisma.participation_vote.groupBy({
      by: ["user_id"],
      _count: { user_id: true },
      orderBy: { _count: { user_id: "desc" } },
    });

    const result = await Promise.all(
      grouped.map(async (g) => {
        const user = await prisma.user.findUnique({
          where: { user_id: g.user_id },
          select: { user_id: true, pseudonym: true, avatar_url: true },
        });
        return { user, votes: g._count.user_id };
      })
    );

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

// Supprime le vote de l’utilisateur connecté sur la participation.
export const deleteParticipationVote = async (
  req: Request<{ participation_id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { participation_id } = req.params;
  const user_id = req.session.userId;            

  try {
    if (!user_id) throw createHttpError(401, "Utilisateur non authentifié.");

    const vote = await prisma.participation_vote.findFirst({
      where: { participation_id, user_id },
    });
    if (!vote) throw createHttpError(404, "Vote non trouvé.");

    await prisma.participation_vote.delete({
      where: { participation_vote_id: vote.participation_vote_id },
    });

    res.status(200).json({ message: "Vote supprimé avec succès." });
  } catch (error) {
    next(error);
  }
};
