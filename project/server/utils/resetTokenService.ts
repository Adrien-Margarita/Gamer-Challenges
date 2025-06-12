import { PrismaClient } from "@/generated/prisma"

const prisma = new PrismaClient()

/**
 * Crée un token de réinitialisation de mot de passe.
 * @param {string} email - Email concerné
 * @param {string} token - Token généré
 * @param {Date} expiresAt - Date d’expiration
 * @returns {Promise<import("@prisma/client").password_reset_token>}
 */
export const createResetToken = (email: string, token: string, expires_at: Date) => {
  return prisma.password_reset_token.create({
    data: { email, token, expires_at }
  })
}

/**
 * Recherche un token valide (non expiré).
 * @param {string} token - Token à vérifier
 * @returns {Promise<import("@prisma/client").password_reset_token | null>}
 */
export const findValidToken = (token: string) => {
  return prisma.password_reset_token.findFirst({
    where: {
      token,
      expires_at: { gte: new Date() }
    }
  })
}

/**
 * Supprime un token (après usage ou nettoyage).
 * @param {string} token - Token à supprimer
 * @returns {Promise<import("@prisma/client").password_reset_token>}
 */
export const deleteToken = (token: string) => {
  return prisma.password_reset_token.delete({
    where: { token }
  })
}
