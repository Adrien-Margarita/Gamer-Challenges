import { Router } from "express";

import errorHandler from "@/middlewares/errorHandler";
import { validate } from "@/middlewares/validate";
import { participationVoteCreateSchema } from "@/validators/participationVote.validator";

import {
  createParticipationVote,
  deleteParticipationVote,
  getAllParticipationVotes,
  getAllParticipationVotesByParticipationId,
  getMostVotedPlayers,
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
 * /api/participation-vote:
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
 * /api/participation-vote:
 *   get:
 *     summary: Récupérer la liste des votes pour une participation
 *     tags: [Participation Votes]
 *     responses:
 *       200:
 *         description: Liste des votes récupérée avec succès
 */
participationVoteRouter.get("/", errorHandler, getAllParticipationVotes);

/**
 * @swagger
 * /api/participation-vote/most-voted-players:
 *   get:
 *     summary: Récupérer le nombre total de votes reçus par chaque utilisateur
 *     tags: [Participation Votes]
 *     responses:
 *       200:
 *         description: Liste des utilisateurs groupés par nombre de votes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   user_id:
 *                     type: string
 *                     format: uuid
 *                   user_pseudonym:
 *                     type: string
 *                   votes:
 *                     type: number
 *       500:
 *         description: Erreur serveur lors de la récupération des votes
 */
participationVoteRouter.get(
  "/most-voted-players",
  errorHandler,
  getMostVotedPlayers
);

/**
 * @swagger
 * /api/participation-vote/{id}:
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
 * /api/participation-vote/{vote_id}/{user_id}:
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
 *       - in: path
 *         name: user_id
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
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

console.log("✅ participationVoteRouter chargé");

export default participationVoteRouter;
