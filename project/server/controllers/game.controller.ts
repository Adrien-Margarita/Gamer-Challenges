import { PrismaClient } from "@/prisma";
import { Request, Response, NextFunction } from "express";
import { createHttpError } from "@/utils/httpError";

const prisma = new PrismaClient();

// Créer un nouveau jeu
export const createGame = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newGame = await prisma.game.create({
      data: req.body,
    });
    res.status(201).json({ game: newGame });
  } catch (error) {
    next(error);
  }
};

// Récupérer tous les jeux
export const getAllGames = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const games = await prisma.game.findMany({
      orderBy: {
        title: "asc",
      },
    });

    res.status(200).json({ games });
  } catch (error) {
    next(error);
  }
};

// Récupérer un jeu par son ID
export const getGameById = async (
  req: Request<{ game_id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { game_id } = req.params;

  try {
    const game = await prisma.game.findUnique({
      where: { game_id },
    });
    res.status(200).json({ game });
  } catch (error) {
    next(error);
  }
};

// Mettre à jour un jeu existant
export const updateGame = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { game_id } = req.params;

  try {
    const game = await prisma.game.findUnique({
      where: { game_id },
    });

    if (!game) {
      throw createHttpError(404, `Jeu non trouvé`);
    }

    const gameToUpdate = await prisma.game.update({
      data: {
        ...req.body,
        updatedAt: new Date(),
      },
      where: { game_id },
    });
    res
      .status(200)
      .json({ message: `Jeu ${gameToUpdate.title} mis à jour avec succès` });
  } catch (error) {
    next(error);
  }
};

// Supprimer un jeu
export const deleteGame = async (
  req: Request<{ game_id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { game_id } = req.params;

  try {
    const game = await prisma.game.findUnique({
      where: { game_id },
    });

    if (!game) {
      throw createHttpError(404, `Jeu non trouvé`);
    }

    const gameToDelete = await prisma.game.delete({
      where: { game_id },
    });
    res
      .status(200)
      .json({ message: `Jeu ${gameToDelete.title} supprimé avec succès` });
  } catch (error) {
    next(error);
  }
};
