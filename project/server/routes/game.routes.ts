import { Router } from "express";
import errorHandler from "@/middlewares/errorHandler";
import {
  createGame,
  getAllGames,
  getGameById,
  updateGame,
  deleteGame,
} from "@/controllers/game.controller";

const gameRouter = Router();

/**
 * @swagger
 * /api/games:
 *   post:
 *     summary: Créer un nouveau jeu
 *     tags: [Games]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Game'
 *     responses:
 *       201:
 *         description: Jeu créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Game'
 *       400:
 *         description: Données invalides
 */
gameRouter.post("/", createGame);

/**
 * @swagger
 * /api/games:
 *   get:
 *     summary: Récupérer la liste des jeux
 *     tags: [Games]
 *     responses:
 *       200:
 *         description: Liste des jeux
 */
gameRouter.get("/", errorHandler, getAllGames);

/**
 * @swagger
 * /api/games/{id}:
 *   get:
 *     summary: Récupérer un jeu par son ID
 *     tags: [Games]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: cuid
 *         required: true
 *         description: ID du jeu
 *     responses:
 *       200:
 *         description: Jeu récupéré avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Game'
 *       404:
 *         description: Jeu non trouvé
 */
gameRouter.get("/:id", errorHandler, getGameById);

/**
 * @swagger
 * /api/games/{id}:
 *   put:
 *     summary: Mettre à jour un jeu
 *     tags: [Games]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: cuid
 *         required: true
 *         description: ID du jeu
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Game'
 *     responses:
 *       200:
 *         description: Jeu mis à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Game'
 *       404:
 *         description: Jeu non trouvé
 */
gameRouter.put("/:id", updateGame);

/**
 * @swagger
 * /api/games/{id}:
 *   delete:
 *     summary: Supprimer un jeu
 *     tags: [Games]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: cuid
 *         required: true
 *         description: ID du jeu
 *     responses:
 *       200:
 *         description: Jeu supprimé avec succès
 *       404:
 *         description: Jeu non trouvé
 */
gameRouter.delete("/:id", errorHandler, deleteGame);

export default gameRouter;
