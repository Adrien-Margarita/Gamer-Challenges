import { Router } from "express";

import errorHandler from "@/middlewares/errorHandler";
import {
  createParticipationVote,
  deleteParticipationVote,
  getAllParticipationsVotes,
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
 * /api/participation-vote/{participation_id}:
 *   post:
 *     summary: Créer (ou tenter de créer) un vote pour la participation indiquée
 *     tags: [Participation Votes]
 *     parameters:
 *       - in: path
 *         name: participation_id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       201:
 *         description: Vote créé avec succès
 *       400:
 *         description: L'utilisateur a déjà voté
 *       401:
 *         description: Utilisateur non authentifié
 */
participationVoteRouter.post(
  "/:participation_id",
  errorHandler,
  createParticipationVote
);

/**
 * @swagger
 * /api/participation-vote:
 *   get:
 *     summary: Récupérer la liste complète de tous les votes (admin/debug)
 *     tags: [Participation Votes]
 *     responses:
 *       200:
 *         description: Liste des votes récupérée avec succès
 */
participationVoteRouter.get("/", errorHandler, getAllParticipationsVotes);

/**
 * @swagger
 * /api/participation-vote/most-voted-players:
 *   get:
 *     summary: Classement des utilisateurs par nombre total de votes reçus
 *     tags: [Participation Votes]
 *     responses:
 *       200:
 *         description: OK
 */
participationVoteRouter.get(
  "/most-voted-players",
  errorHandler,
  getMostVotedPlayers
);

/**
 * @swagger
 * /api/participation-vote/{participation_id}:
 *   get:
 *     summary: Récupérer tous les votes d'une participation donnée
 *     tags: [Participation Votes]
 *     parameters:
 *       - in: path
 *         name: participation_id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Liste des votes pour la participation
 */
participationVoteRouter.get(
  "/:participation_id",
  errorHandler,
  getAllParticipationVotesByParticipationId
);

/**
 * @swagger
 * /api/participation-vote/{participation_id}:
 *   delete:
 *     summary: Supprimer le vote de l'utilisateur connecté pour cette participation
 *     tags: [Participation Votes]
 *     parameters:
 *       - in: path
 *         name: participation_id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Vote supprimé avec succès
 *       401:
 *         description: Utilisateur non authentifié
 *       404:
 *         description: Vote non trouvé
 */
participationVoteRouter.delete(
  "/:participation_id",
  errorHandler,
  deleteParticipationVote
);

console.log("✅ participationVoteRouter chargé");

export default participationVoteRouter;
