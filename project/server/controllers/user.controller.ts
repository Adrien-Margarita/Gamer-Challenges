import { PrismaClient } from "@/generated/prisma";
import { Request, Response, NextFunction } from "express";
import { createHttpError } from "@/utils/httpError";

const prisma = new PrismaClient();

// Créer un nouvel utilisateur
export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newUser = await prisma.user.create({
      data: req.body,
    });
    res.status(201).json({ user: newUser });
  } catch (error) {
    next(error);
  }
};

// Récupérer tous les utilisateurs
export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await prisma.user.findMany({
      orderBy: {
        pseudonym: "asc",
      },
      include: {
        role: {
          select: {
            role_name: true
          }
        }
      },
    });

    const safeUsers = users.map(({ password_hash, ...rest }) => rest);

    res.status(200).json(safeUsers);
  } catch (error) {
    next(error);
  }
};

// Récupérer un utilisateur par son ID
export const getUserById = async (
  req: Request<{ user_id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { user_id } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: { user_id },
      omit: {
        password_hash: true,
      },
    });
    res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
};

// Récupérer les challenges créés par un utilisateur donné
export const getChallengesByUserId = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const challenges = await prisma.challenge.findMany({
      where: { user_id: id },
      include: {
        game: true, // Infos sur le jeu associé au challenge
        participation: {
          include: {
            user: {
              select: {
                user_id: true,
                pseudonym: true,
              },
            },
            participation_vote: true, // votes par participation
          },
        },
        challenge_vote: true, // votes globaux sur le challenge
      },
      orderBy: {
        created_at: "desc",
      },
    });

    res.status(200).json(challenges);
  } catch (error) {
    next(error);
  }
};

// Récupérer les participations par l'ID de l'utilisateur
export const getParticipationByUserId = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const participations = await prisma.participation.findMany({
      where: { user_id: id },
      include: {
        challenge: {
          include: {
            game: true, // Ajoute les infos du jeu lié au challenge
          },
        },
        user: {
          select: {
            user_id: true,
            pseudonym: true,
          },
        },
        participation_vote: true, // infos des votes
      },
      orderBy: {
        created_at: "desc",
      },
    });

    res.status(200).json(participations);
  } catch (error) {
    next(error);
  }
};

// Mettre à jour un utilisateur existant
export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { user_id } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: { user_id },
    });

    if (!user) {
      throw createHttpError(404, `Utilisateur non trouvé`);
    }

    const userToUpdate = await prisma.user.update({
      data: {
        ...req.body,
        updated_at: new Date(),
      },
      where: { user_id },
    });
    res.status(200).json({
      message: `Utilisateur ${userToUpdate.pseudonym} mis à jour avec succès`,
    });
  } catch (error) {
    next(error);
  }
};

// Supprimer un utilisateur
export const deleteAccount = async (
  req: Request<{ user_id: string }>,
  res: Response,
  next: NextFunction
) => {
  const user_id = req.session.userId;

  try {
    const user = await prisma.user.findUnique({
      where: { user_id },
      omit: {
        password_hash: true,
      },
    });

    if (!user) {
      throw createHttpError(404, `Utilisateur non trouvé`);
    }

    const userToDelete = await prisma.user.delete({
      where: { user_id },
    });
    res.status(200).json({
      message: `Compte supprimé avec succès`,
    });
  } catch (error) {
    next(error);
  }
};

// Suppression d’un utilisateur par un admin
export const deleteUserByAdmin = async (
  req: Request<{ user_id: string }>,
  res: Response,
  next: NextFunction
) => {
  const adminId = req.session.userId;
  const { user_id: userIdToDelete } = req.params;

  try {
    const adminUser = await prisma.user.findUnique({
      where: { user_id: adminId },
      select: { role: true },
    });

    if (!adminUser || adminUser.role.role_name !== 'admin') {
      throw createHttpError(403, `Accès refusé : seuls les administrateurs peuvent supprimer un utilisateur.`);
    }

    const userToDelete = await prisma.user.findUnique({
      where: { user_id: userIdToDelete },
    });

    if (!userToDelete) {
      throw createHttpError(404, `Utilisateur à supprimer non trouvé.`);
    }

    await prisma.user.delete({
      where: { user_id: userIdToDelete },
    });

    res.status(200).json({
      message: `L'utilisateur avec l'ID ${userIdToDelete} a été supprimé avec succès.`,
    });
  } catch (error) {
    next(error);
  }
};

