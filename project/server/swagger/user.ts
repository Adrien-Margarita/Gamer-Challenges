/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         user_id:
 *           type: string
 *           format: uuid
 *           example: "123e4567-e89b-12d3-a456-426614174000"
 *         pseudonym:
 *           type: string
 *           example: "johnDoe"
 *         email:
 *           type: string
 *           format: email
 *           example: "john@example.com"
 *         password_hash:
 *           type: string
 *           example: "$argon2id$v=19$m=65536,t=3,p=4$somehashedpassword"
 *         avatar_url:
 *           type: string
 *           format: uri
 *           nullable: true
 *           example: "http://example.com/avatar.png"
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
