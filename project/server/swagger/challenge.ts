/**
 * @swagger
 * components:
 *   schemas:
 *     Challenge:
 *       type: object
 *       properties:
 *         challenge_id:
 *           type: string
 *           format: uuid
 *           example: "550e8400-e29b-41d4-a716-446655440000"
 *         title:
 *           type: string
 *           example: "Défi de vitesse"
 *         description:
 *           type: string
 *           example: "Un défi pour terminer un niveau rapidement"
 *         rules:
 *           type: string
 *           example: "Pas d'aide extérieure"
 *         user_id:
 *           type: string
 *           format: uuid
 *           example: "123e4567-e89b-12d3-a456-426614174000"
 *         game_id:
 *           type: string
 *           format: uuid
 *           example: "987e6543-e21b-32d1-b654-426655440000"
 *         created_at:
 *           type: string
 *           format: date-time
 *           example: "2025-06-10T12:00:00Z"
 *         updated_at:
 *           type: string
 *           format: date-time
 *           example: "2025-06-10T12:00:00Z"
 */

export {};
