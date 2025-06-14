import { Router } from "express";

import {
  createChallenge,
  getAllChallenges,
  getChallengeById,
  updateChallenge,
  deleteChallenge,
  getMostPopularChallenges,
  getLastChallenges
} from "@/controllers/challenge.controller";

import { challengeSchema } from "@/validators/challenge.validator";
import errorHandler from "@/middlewares/errorHandler";
import { validate } from "@/middlewares/validate";

const challengeRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Challenges
 *   description: API pour gérer les challenges
 */

/**
 * @swagger
 * /api/challenges:
 *   post:
 *     summary: Créer un nouveau challenge
 *     tags: [Challenges]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Challenge'
 *     responses:
 *       201:
 *         description: Challenge créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Challenge'
 *       400:
 *         description: Données invalides
 */
challengeRouter.post("/", validate(challengeSchema), errorHandler, createChallenge);

/**
 * @swagger
 * /api/challenges:
 *   get:
 *     summary: Récupérer la liste des challenges
 *     tags: [Challenges]
 *     responses:
 *       200:
 *         description: Liste des challenges
 */
challengeRouter.get("/", errorHandler, getAllChallenges);

/**
 * @swagger
 * /challenges/popular:
 *   get:
 *     summary: Get popular challenges ordered by number of votes
 *     tags:
 *       - Challenges
 *     responses:
 *       200:
 *         description: List of popular challenges
 */
challengeRouter.get('/popular', getMostPopularChallenges);

/**
 * @swagger
 * /challenges/latest:
 *   get:
 *     summary: Get the last 3 challenges
 *     tags:
 *       - Challenges
 *     responses:
 *       200:
 *         description: List of latest challenges
 */
challengeRouter.get('/latest', getLastChallenges);

/**
 * @swagger
 * /api/challenges/{id}:
 *   get:
 *     summary: Récupérer un challenge par son ID
 *     tags: [Challenges]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *         description: ID du challenge
 *     responses:
 *       200:
 *         description: Challenge récupéré avec succès
 */
challengeRouter.get("/:id", errorHandler, getChallengeById);

/**
 * @swagger
 * /api/challenges/{id}:
 *   put:
 *     summary: Mettre à jour un challenge existant
 *     tags: [Challenges]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *         description: ID du challenge à mettre à jour
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Challenge'
 *     responses:
 *       200:
 *         description: Challenge mis à jour avec succès
 */
challengeRouter.put("/:id",validate(challengeSchema), errorHandler, updateChallenge);

/**
 * @swagger
 * /api/challenges/{id}:
 *   delete:
 *     summary: Supprimer un challenge
 *     tags: [Challenges]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *         description: ID du challenge à supprimer
 *     responses:
 *       200:
 *         description: Challenge supprimé avec succès
 */
challengeRouter.delete("/:id", errorHandler, deleteChallenge);

export default challengeRouter;
