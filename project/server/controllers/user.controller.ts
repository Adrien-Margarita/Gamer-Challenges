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

  if (!user_id) {
    return next(createHttpError(400, 'User ID is required'));
  }

  try {
    const user = await prisma.user.findUnique({
      where: { user_id },
      omit: {
        password_hash: true,
      },
    });

    if (!user) {
      return next(createHttpError(404, 'User not found'));
    }

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
  req: Request<{ user_id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { user_id } = req.params;
  const updateData = req.body;

  if (!user_id) {
    return next(createHttpError(400, 'User ID is required'));
  }

  try {
    // Vérifier si l'utilisateur existe
    const existingUser = await prisma.user.findUnique({
      where: { user_id }
    });

    if (!existingUser) {
      return next(createHttpError(404, 'User not found'));
    }

    // Mettre à jour l'utilisateur
    const updatedUser = await prisma.user.update({
      where: { user_id },
      data: {
        ...updateData,
        updated_at: new Date(),
      },
      omit: {
        password_hash: true,
      },
    });

    res.status(200).json({
      message: 'User updated successfully',
      user: updatedUser,
    });
  } catch (error) {
    next(error);
  }
};

// Supprimer un utilisateur
export const deleteAccount = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const currentUser = (req as any).user; // User from auth middleware
  const { user_id } = req.params;

  // Vérifier si l'utilisateur est autorisé à supprimer ce compte
  if (user_id && user_id !== currentUser.user_id) {
    return next(createHttpError(403, 'You are not authorized to delete this account'));
  }

  const userIdToDelete = user_id || currentUser.user_id;

  try {
    // Vérifier si l'utilisateur existe
    const userToDelete = await prisma.user.findUnique({
      where: { user_id: userIdToDelete }
    });

    if (!userToDelete) {
      return next(createHttpError(404, 'User not found'));
    }

    // Supprimer l'utilisateur
    await prisma.user.delete({
      where: { user_id: userIdToDelete }
    });

    // Retourner 204 No Content ou 200 avec message
    if (req.headers.prefer === 'return=representation') {
      res.status(200).json({
        message: 'Your account has been deleted successfully',
        deletedUser: {
          user_id: userToDelete.user_id,
          pseudonym: userToDelete.pseudonym,
          email: userToDelete.email
        }
      });
    } else {
      res.status(204).send();
    }
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
