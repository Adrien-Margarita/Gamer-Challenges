import { Router } from "express";
import { createUser, getAllUsers, getUserById, updateUser, getChallengesByUserId, getParticipationByUserId, deleteAccount, deleteUserByAdmin } from "@/controllers/user.controller";
import errorHandler from "@/middlewares/errorHandler";
import { validate } from "@/middlewares/validate";
import { userSchema } from "@/validators/user.validator";
import { valid } from "joi";

const userRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API pour gérer les utilisateurs
 */

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Créer un nouvel utilisateur
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Utilisateur créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Données invalides
 */
userRouter.post('/', validate(userSchema), errorHandler, createUser);


/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Récupérer la liste des utilisateurs
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Liste des utilisateurs
 */
userRouter.get('/', errorHandler, getAllUsers);

/**
 * @swagger
 * /api/users/{user_id}:
 *   get:
 *     summary: Récupérer un utilisateur par son ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: user_id
 *         schema:
 *           type: string
 *           format: cuid
 *         required: true
 *         description: ID de l'utilisateur
 *     responses:
 *       200:
 *         description: Utilisateur récupéré avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: Utilisateur non trouvé
 */
userRouter.get('/:user_id', errorHandler, getUserById);

/**
 * @swagger
 * /api/users/{user_id}/challenges:
 *   get:
 *     summary: Récupérer les challenges créés par un utilisateur
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: user_id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l’utilisateur
 *     responses:
 *       200:
 *         description: Liste des challenges créés par l’utilisateur
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Challenge'
 *       404:
 *         description: Utilisateur non trouvé
 */
userRouter.get('/:user_id/challenges', errorHandler, getChallengesByUserId);

/**
 * @swagger
 * /api/users/{user_id}/participations:
 *   get:
 *     summary: Récupérer les participations d’un utilisateur
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: user_id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l’utilisateur
 *     responses:
 *       200:
 *         description: Liste des participations de l’utilisateur
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Participation'
 *       404:
 *         description: Utilisateur non trouvé
 */
userRouter.get('/:user_id/participations', errorHandler, getParticipationByUserId);


/**
 * @swagger
 * /api/users/{user_id}:
 *   put:
 *     summary: Mettre à jour un utilisateur
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: user_id
 *         schema:
 *           type: string
 *           format: cuid
 *         required: true
 *         description: ID de l'utilisateur
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Utilisateur mis à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: Utilisateur non trouvé
 */
userRouter.put('/:user_id', validate(userSchema), errorHandler, updateUser);

/**
 * @swagger
 * /api/users/{user_id}:
 *   delete:
 *     summary: Supprimer un utilisateur
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: user_id
 *         schema:
 *           type: string
 *           format: cuid
 *         required: true
 *         description: ID de l'utilisateur
 *     responses:
 *       200:
 *         description: Utilisateur supprimé avec succès
 *       404:
 *         description: Utilisateur non trouvé
 */
userRouter.delete('/:user_id', errorHandler, deleteAccount);

/**
 * @swagger
 * /api/users/user-to-delete/{user_id}:
 *   delete:
 *     summary: Supprimer un utilisateur
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: user_id
 *         schema:
 *           type: string
 *           format: cuid
 *         required: true
 *         description: ID de l'utilisateur
 *     responses:
 *       200:
 *         description: Utilisateur supprimé avec succès
 *       404:
 *         description: Utilisateur non trouvé
 */
userRouter.delete('/user-to-delete/:user_id', errorHandler, deleteUserByAdmin);


export default userRouter;
