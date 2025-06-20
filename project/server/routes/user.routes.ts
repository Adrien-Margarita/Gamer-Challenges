import { Router } from "express";
import { createUser, getAllUsers, getUserById, updateUser, deleteUser, getChallengesByUserId, getParticipationByUserId } from "@/controllers/user.controller";
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
 * /api/users/{id}:
 *   get:
 *     summary: Récupérer un utilisateur par son ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
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
userRouter.get('/:id', errorHandler, getUserById);

/**
 * @swagger
 * /api/users/{id}/challenges:
 *   get:
 *     summary: Récupérer les challenges créés par un utilisateur
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
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
userRouter.get('/:id/challenges', errorHandler, getChallengesByUserId);

/**
 * @swagger
 * /api/users/{id}/participations:
 *   get:
 *     summary: Récupérer les participations d’un utilisateur
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
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
userRouter.get('/:id/participations', errorHandler, getParticipationByUserId);


/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Mettre à jour un utilisateur
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
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
userRouter.put('/:id', validate(userSchema), errorHandler, updateUser);

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Supprimer un utilisateur
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
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
userRouter.delete('/:user_id', errorHandler, deleteUser);

export default userRouter;
