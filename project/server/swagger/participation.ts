/**
 * @swagger
 * components:
 *   schemas:
 *     Participation:
 *       type: object
 *       properties:
 *         participation_id:
 *           type: string
 *           format: uuid
 *           example: "11223344-5566-7788-99aa-bbccddeeff00"
 *         user_id:
 *           type: string
 *           format: uuid
 *           example: "123e4567-e89b-12d3-a456-426614174000"
 *         video_url:
 *           type: string
 *           format: uri
 *           nullable: true
 *           example: "http://example.com/video.mp4"
 *         image_url:
 *           type: string
 *           format: uri
 *           nullable: true
 *           example: "http://example.com/image.png"
 *         description:
 *           type: string
 *           example: "Ma participation au challenge"
 *         challenge_id:
 *           type: string
 *           format: uuid
 *           example: "550e8400-e29b-41d4-a716-446655440000"
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
