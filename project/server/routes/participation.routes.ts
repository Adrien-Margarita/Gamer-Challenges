import { Router } from "express";
import errorHandler from "@/middlewares/errorHandler";
import { createParticipation, deleteParticipation, getAllParticipations, getParticipationById, updateParticipation } from "@/controllers/participation.controller";
import { validate } from "@/middlewares/validate";
import { participationSchema } from "@/validators/participation.validator";

const participationRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Participations
 *   description: API pour gérer les participations
 */

/**
 * @swagger
 * /api/participations:
 *   post:
 *     summary: Créer une nouvelle participation
 *     tags: [Participations]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Participation'
 *     responses:
 *       201:
 *         description: Participation créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Participation'
 *       400:
 *         description: Données invalides
 */
participationRouter.post('/', validate(participationSchema), errorHandler, createParticipation);


/**
 * @swagger
 * /api/participations:
 *   get:
 *     summary: Récupérer la liste des participations
 *     tags: [Participations]
 *     responses:
 *       200:
 *         description: Liste des participations
 */
participationRouter.get('/', errorHandler, getAllParticipations);

/**
 * @swagger
 * /api/participations/{id}:
 *   get:
 *     summary: Récupérer un participation par son ID
 *     tags: [Participations]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: cuid
 *         required: true
 *         description: ID de la participation
 *     responses:
 *       200:
 *         description: participation récupéré avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Participation'
 *       404:
 *         description: participation non trouvé
 */
participationRouter.get('/:id', errorHandler, getParticipationById);

/**
 * @swagger
 * /api/participations/{id}:
 *   put:
 *     summary: Mettre à jour une participation
 *     tags: [Participations]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: cuid
 *         required: true
 *         description: ID de la participation
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Participation'
 *     responses:
 *       200:
 *         description: participation mise à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Participation'
 *       404:
 *         description: Participation non trouvée
 */
participationRouter.put('/:id', validate(participationSchema), errorHandler, updateParticipation);

/**
 * @swagger
 * /api/participations/{id}:
 *   delete:
 *     summary: Supprimer une participation
 *     tags: [Participations]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: cuid
 *         required: true
 *         description: ID de la participation
 *     responses:
 *       200:
 *         description: participation supprimée avec succès
 *       404:
 *         description: participation non trouvée
 */
participationRouter.delete('/:id', errorHandler, deleteParticipation);

export default participationRouter;