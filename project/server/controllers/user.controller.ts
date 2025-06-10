import { PrismaClient } from "@/prisma";
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
      omit: {
        password_hash: true,
      },
    });

    res.status(200).json({ users });
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
        updatedAt: new Date(),
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
export const deleteUser = async (
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

    if (!user) {
      throw createHttpError(404, `Utilisateur non trouvé`);
    }

    const userToDelete = await prisma.user.delete({
      where: { user_id },
    });
    res.status(200).json({
      message: `Utilisateur ${userToDelete.pseudonym} supprimé avec succès`,
    });
  } catch (error) {
    next(error);
  }
};
