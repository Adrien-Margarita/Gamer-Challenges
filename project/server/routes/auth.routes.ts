import { Router } from "express";

import { 
    register,
    login,
    logout,
    getMe,
    forgotPassword,
    resetPassword
 } from "@/controllers/auth.controller";

const authRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: API pour gérer l'authentification des utilisateurs
 */

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Un utilisateur créé un compte
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Auth'
 *     responses:
 *       201:
 *         description: Utilisateur créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Auth'
 *       400:
 *         description: Données invalides
 */
authRouter.post("/register", register);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Un utilisateur se connecte
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Auth'
 *     responses:
 *       200:
 *         description: Utilisateur connecté avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Auth'
 *       400:
 *         description: Pseudonyme ou mot de passe invalide
 */
authRouter.post("/login", login);

/**
 * @swagger
 * /api/auth/logout:
 *   post:
 *     summary: Un utilisateur se déconnecte
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: Utilisateur déconnecté avec succès
 *       400:
 *         description: Erreur lors de la déconnexion
 */
authRouter.post("/logout", logout);

/**
 * @swagger
 * /api/auth/me:
 *   get:
 *     summary: Récupère les informations du compte connecté
 *     tags: [Auth]
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: Données utilisateur
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthenticatedUser'
 *       401:
 *         description: Non authentifié
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Erreur serveur
 */
authRouter.get("/me", getMe);

/**
 * @swagger
 * /api/auth/forgot-password:
 *   post:
 *     summary: Envoie un lien de réinitialisation de mot de passe
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email]
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *     responses:
 *       200:
 *         description: Lien envoyé (même si l'email n'existe pas)
 *       500:
 *         description: Erreur serveur
 */
authRouter.post("/forgot-password", forgotPassword);

/**
 * @swagger
 * /api/auth/reset-password:
 *   post:
 *     summary: Réinitialise le mot de passe via token
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [token, newPassword]
 *             properties:
 *               token:
 *                 type: string
 *               newPassword:
 *                 type: string
 *                 format: password
 *     responses:
 *       200:
 *         description: Mot de passe mis à jour
 *       400:
 *         description: Token invalide ou expiré
 *       500:
 *         description: Erreur serveur
 */
authRouter.post("/reset-password", resetPassword);

export default authRouter;
