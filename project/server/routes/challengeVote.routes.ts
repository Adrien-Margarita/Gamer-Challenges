import { Router } from "express";

import errorHandler from "@/middlewares/errorHandler";
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
 *   description: API pour gérer les votes d'un challenge
 */

/**
 * @swagger
 * /api/challenge-vote:
 *   get:
 *     summary: Récupérer la liste complète des votes (admin/debug)
 *     tags: [Challenge Votes]
 *     responses:
 *       200:
 *         description: OK
 */
challengeVoteRouter.get("/", errorHandler, getAllChallengeVotes);

/**
 * @swagger
 * /api/challenge-vote/{challenge_id}:
 *   post:
 *     summary: Ajouter un vote pour le challenge indiqué
 *     tags: [Challenge Votes]
 *     parameters:
 *       - in: path
 *         name: challenge_id
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
challengeVoteRouter.post("/:challenge_id", errorHandler, createChallengeVote);

/**
 * @swagger
 * /api/challenge-vote/{challenge_id}:
 *   get:
 *     summary: Récupérer tous les votes d'un challenge
 *     tags: [Challenge Votes]
 *     parameters:
 *       - in: path
 *         name: challenge_id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Liste des votes
 */
challengeVoteRouter.get(
  "/:challenge_id",
  errorHandler,
  getAllChallengeVotesByChallengeId
);

/**
 * @swagger
 * /api/challenge-vote/{challenge_id}:
 *   delete:
 *     summary: Supprimer le vote de l'utilisateur connecté pour ce challenge
 *     tags: [Challenge Votes]
 *     parameters:
 *       - in: path
 *         name: challenge_id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Vote supprimé
 *       401:
 *         description: Utilisateur non authentifié
 *       404:
 *         description: Vote non trouvé
 */
challengeVoteRouter.delete("/:challenge_id", errorHandler, deleteChallengeVote);

export default challengeVoteRouter;
