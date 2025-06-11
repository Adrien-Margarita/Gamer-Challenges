import { Router } from "express";

import errorHandler from "@/middlewares/errorHandler";
import { validate } from "@/middlewares/validate";
import { participationVoteCreateSchema } from "@/validators/participationVote.validator";

import {
  createParticipationVote,
  deleteParticipationVote,
  getAllParticipationVotes,
  getAllParticipationVotesByParticipationId,
} from "@/controllers/participationVote.controller";

const participationVoteRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Participation Votes
 *   description: API pour gérer les votes d'une participation
 */

/**
 * @swagger
 * /api/participation/votes:
 *   post:
 *     summary: Créer un nouveau vote pour une participation
 *     tags: [Participation Votes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Participation Vote'
 *     responses:
 *       201:
 *         description: Vote créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Challenge'
 *       400:
 *         description: Données invalides
 */
participationVoteRouter.post(
  "/",
  validate(participationVoteCreateSchema),
  errorHandler,
  createParticipationVote
);

/**
 * @swagger
 * /api/participation/votes:
 *   get:
 *     summary: Récupérer la liste des votes pour une participation
 *     tags: [Participation Votes]
 *     responses:
 *       200:
 *         description: Liste des votes pour une participation
 */
participationVoteRouter.get("/", errorHandler, getAllParticipationVotes);

/**
 * @swagger
 * /api/participation/vote/{id}:
 *   get:
 *     summary: Récupérer un vote d'une participation par son ID
 *     tags: [Participation Votes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *         description: ID du vote d'une participation
 *     responses:
 *       200:
 *         description: Vote récupéré avec succès
 */
participationVoteRouter.get(
  "/:id",
  errorHandler,
  getAllParticipationVotesByParticipationId
);

/**
 * @swagger
 * /api/participation/vote/{vote_id}/{user_id}:
 *   delete:
 *     summary: Supprimer un vote pour une participation
 *     tags: [Participation Votes]
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
participationVoteRouter.delete(
  "/:vote_id/:user_id",
  errorHandler,
  deleteParticipationVote
);

export default participationVoteRouter;
