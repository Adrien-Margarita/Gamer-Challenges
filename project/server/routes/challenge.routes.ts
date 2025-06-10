import { Router } from "express";

import {
  createChallenge,
  getAllChallenges,
  getChallengeById,
  updateChallenge,
  deleteChallenge
} from "@/controllers/challenge.controller";

import errorHandler from "@/middlewares/errorHandler";

const challengeRouter = Router();

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
challengeRouter.post("/", createChallenge);

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
challengeRouter.put("/:id", updateChallenge);

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
