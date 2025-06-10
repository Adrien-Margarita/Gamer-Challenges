/**
 * @swagger
 * components:
 *   schemas:
 *     Game:
 *       type: object
 *       properties:
 *         game_id:
 *           type: string
 *           format: uuid
 *           example: "a1b2c3d4-e5f6-7g8h-9i10-j11k12l13m14"
 *         title:
 *           type: string
 *           example: "Super Game"
 *         category:
 *           type: string
 *           example: "Action"
 *         description:
 *           type: string
 *           example: "Un jeu d'action intense"
 *         release_date:
 *           type: string
 *           format: date-time
 *           example: "2023-01-01T00:00:00Z"
 *         image_url:
 *           type: string
 *           format: uri
 *           example: "http://example.com/image.png"
 *         platform:
 *           type: string
 *           example: "PC"
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
