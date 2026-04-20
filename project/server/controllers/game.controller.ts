import { PrismaClient } from "@/generated/prisma";
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

    res.status(200).json(games);
  } catch (error) {
    next(error);
  }
};

// Récupère les 4 derniers jeux créés
export const getLastGames = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const latestGames = await prisma.game.findMany({
      orderBy: {
        created_at: "desc",
      },
      take: 4,
    });

    res.status(200).json(latestGames);
  } catch (error) {
    next(error);
  }
};

// Récupérer les jeux les plus populaires (avec le plus de votes)
export const getMostPopularGames = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const games = await prisma.game.findMany({
      orderBy: {
        challenge: {
          _count: "desc",
        },
      },
      include: {
        challenge: {
          include: {
            challenge_vote: {
              select: {
                challenge_vote_id: true,
              },
            },
          },
        },
      },
    });

    const result = games.map((game) => {
      const totalVotes = game.challenge.reduce(
        (acc, challenge) => acc + challenge.challenge_vote.length,
        0
      );

      return {
        game_id: game.game_id,
        title: game.title,
        description: game.description,
        release_date: game.release_date,
        image_url: game.image_url,
        platform: game.platform,
        created_at: game.created_at,
        updated_at: game.updated_at,
        totalVotes,
      };
    });

    res.json(result);
  } catch (error) {
    next(error);
  }
};

// Récupérer un jeu par son ID
export const getGameById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const game = await prisma.game.findUnique({
      where: { game_id: id },
      include: {
        _count: { select: { challenge: true } },
        challenge: true,
      },
    });

    if (!game) {
      return next(createHttpError(404, "Jeu non trouvé"));
    }

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

    const updatedGame = await prisma.game.update({
      data: {
        ...req.body,
        updated_at: new Date(),
      },
      where: { game_id },
    });
    
    res.status(200).json({ game: updatedGame });
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
