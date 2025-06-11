import { Router } from "express";

import errorHandler from "@/middlewares/errorHandler";
import { validate } from "@/middlewares/validate";
import { challengeVoteCreateSchema } from "@/validators/challengeVote.validator";
import {
  createChallengeVote,
  deleteChallengeVote,
  getAllChallengeVotes,
  getAllChallengeVotesByChallengeId,
} from "@/controllers/challengeVote.controller";

const challengeVoteRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Challenge Votes
 *   description: API pour gérer les challenges
 */

/**
 * @swagger
 * /api/challenge/votes:
 *   post:
 *     summary: Créer un nouveau vote pour un challenge
 *     tags: [Challenge Votes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Challenge Vote'
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
challengeVoteRouter.post(
  "/",
  validate(challengeVoteCreateSchema),
  errorHandler,
  createChallengeVote
);

/**
 * @swagger
 * /api/challenge/votes:
 *   get:
 *     summary: Récupérer la liste des votes pour un challenge
 *     tags: [Challenge Votes]
 *     responses:
 *       200:
 *         description: Liste des votes pour un challenge
 */
challengeVoteRouter.get("/", errorHandler, getAllChallengeVotes);

/**
 * @swagger
 * /api/challenge/vote/{id}:
 *   get:
 *     summary: Récupérer un vote d'un challenge par son ID
 *     tags: [Challenge Votes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *         description: ID du vote du challenge
 *     responses:
 *       200:
 *         description: Vote récupéré avec succès
 */
challengeVoteRouter.get(
  "/:id",
  errorHandler,
  getAllChallengeVotesByChallengeId
);

/**
 * @swagger
 * /api/challenge/vote/{vote_id}/{user_id}:
 *   delete:
 *     summary: Supprimer un vote pour un challenge
 *     tags: [Challenge Votes]
 *     parameters:
 *       - in: path
 *         name: vote_id
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *         description: ID du vote à supprimer
 *       - in: path
 *         name: user_id
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *         description: ID de l'utilisateur ayant effectué le vote
 *     responses:
 *       200:
 *         description: Vote supprimé avec succès
 *       404:
 *         description: Vote non trouvé
 */
challengeVoteRouter.delete(
  "/:vote_id/:user_id",
  errorHandler,
  deleteChallengeVote
);

export default challengeVoteRouter;
