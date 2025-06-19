import { Router } from "express";

import {
  createChallenge,
  getAllChallenges,
  getChallengeById,
  updateChallenge,
  deleteChallenge,
  getMostPopularChallenges,
  getLastChallenges,
  getChallengesByGameId,
} from "@/controllers/challenge.controller";

import { challengeSchema } from "@/validators/challenge.validator";
import { validate } from "@/middlewares/validate";
import { isAuthenticated } from "@/middlewares/isAuthenticated";
import { sanitizeBody } from "@/middlewares/sanitize";
import errorHandler from "@/middlewares/errorHandler";

const challengeRouter = Router();
const forbiddenFields = ["user_id"];

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
challengeRouter.post(
  "/",
  isAuthenticated,
  sanitizeBody(forbiddenFields),
  validate(challengeSchema),
  createChallenge
);

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
challengeRouter.get("/", getAllChallenges);


/**
 * @swagger
 * /api/challenges/popular:
 *   get:
 *     summary: Get popular challenges ordered by number of votes
 *     tags: [Challenges]
 *     responses:
 *       200:
 *         description: Liste des challenges populaires
 */
challengeRouter.get("/popular", getMostPopularChallenges);

/**
 * @swagger
 * /api/challenges/latest:
 *   get:
 *     summary: Get the last challenges
 *     tags: [Challenges]
 *     responses:
 *       200:
 *         description: Liste des derniers challenges
 */
challengeRouter.get("/latest", getLastChallenges);

/**
 * @swagger
 * /api/challenges/game/{id}:
 *   get:
 *     summary: Récupérer les challenges par ID de jeu
 *     tags: [Challenges]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *         description: ID du jeu
 *     responses:
 *       200:
 *         description: Liste des challenges associés à un jeu
 */
challengeRouter.get("/game/:id", getChallengesByGameId);

/**
 * @swagger
 * /api/challenges/{id}:
 *   get:
 *     summary: Récupérer un challenge par ID
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
 *         description: Challenge trouvé
 */
challengeRouter.get("/:id", getChallengeById);

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
 *         description: ID du challenge à récupérer
 *     responses:
 *       200:
 *         description: Challenge trouvé
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Challenge'
 *       404:
 *         description: Challenge non trouvé
 */
challengeRouter.get("/:id", getChallengeById);

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
challengeRouter.put(
  "/:challenge_id",
  isAuthenticated,
  sanitizeBody(forbiddenFields),
  validate(challengeSchema),
  updateChallenge
);

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
challengeRouter.delete("/:id", deleteChallenge);

export default challengeRouter;
