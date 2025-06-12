import crypto from "node:crypto"
import argon2 from "argon2"
import { PrismaClient } from "@/generated/prisma"
import { IUser } from "@/@types/IUser"
import { NextFunction, Request, Response } from "express"
import session from "express-session"

import {
  createResetToken,
  findValidToken,
  deleteToken
} from "@/utils/resetTokenService"

import { getEmailTemplate } from "@/utils/emailTemplate"
import { sendMail } from "@/utils/emailService"

const prisma = new PrismaClient()

/**
 * Inscription utilisateur
 */
export async function register(req: Request, res: Response) {
  const { email, password, pseudonym, avatar_url } = req.body

  try {
    const existing = await prisma.user.findUnique({ where: { email } })
    if (existing) return res.status(400).json({ message: "Email déjà utilisé." })

    const hashedPassword = await argon2.hash(password)

    const user = await prisma.user.create({
      data: {
        email,
        password_hash: hashedPassword,
        pseudonym,
        avatar_url: avatar_url || null,
        role_id: 0,
      },
    })

    const { subject, html, headers } = getEmailTemplate("welcome", {
      pseudonym,
    })
    await sendMail(email, subject, html, headers)

    req.session.id = user.user_id

    const fullUser = await prisma.user.findUnique({
      where: { user_id: user.user_id },
      include: { role: true },
    })

    if (!fullUser) {
      return res.status(404).json({ message: "Erreur serveur." })
    }

    return res.status(201).json(fullUser)
  } catch (error) {
    console.error("Erreur register:", error)
    return res.status(500).json({ message: "Erreur serveur." })
  }
}

/**
 * Connexion utilisateur
 */
export async function login(req: Request, res: Response) {
  const { email, password } = req.body

  try {
    const user = await prisma.user.findUnique({
      where: { email },
      include: {
        role: true
      }
    })
    if (!user) return res.status(401).json({ message: "Email ou mot de passe invalide." })

    const valid = await argon2.verify(user.password_hash, password)
    if (!valid) return res.status(401).json({ message: "Email ou mot de passe invalide." })

    return res.json(user)
  } catch (error) {
    console.error("Erreur login:", error)
    res.status(500).json({ message: "Erreur serveur." })
  }
}

/**
* Récupérer l’utilisateur courant via la session
*/
export async function getMe(req: Request, res: Response) {
  const userId = req.session.id
  if (!userId) return res.status(401).json({ message: "Vous n'êtes pas authentifié." })

  try {
    const user = await prisma.user.findUnique({
      where: { user_id: userId }
    })
    if (!user) return res.status(401).json({ message: "Utilisateur introuvable." })

    res.json(user)
  } catch (error) {
    console.error("Erreur getMe:", error)
    res.status(500).json({ message: "Erreur serveur." })
  }
}

/**
* Déconnexion utilisateur
*/
export function logout(req: Request, res: Response) {
  req.session.destroy(() => {
    res.clearCookie("connect.sid")
    res.status(200).json({ message: "Déconnexion réussie." })
  })
}

/**
* Demande de réinitialisation de mot de passe (envoi email avec token)
*/
export async function forgotPassword(req: Request, res: Response) {
  const { email } = req.body
  if (!email) return res.status(400).json({ message: "Email requis." })

  try {
    const user = await prisma.user.findUnique({ where: { email } })
    if (!user) {
      return res.status(200).json({ message: "Si un compte existe, un lien a été envoyé." })
    }

    const token = crypto.randomBytes(32).toString("hex")
    const expires_at = new Date(Date.now() + 1000 * 60 * 60)
    await createResetToken(email, token, expires_at)

    const resetLink = `${process.env.FRONTEND_URL}/reset-password?token=${token}`
    const { subject, html, headers } = getEmailTemplate("resetPassword", {
      pseudonym: user.pseudonym,
      resetLink
    })

    await sendMail(email, subject, html, headers)

    res.status(200).json({ message: "Lien de réinitialisation envoyé." })
  } catch (error) {
    console.error("Erreur forgotPassword:", error)
    res.status(500).json({ message: "Erreur serveur." })
  }
}

/**
 * Réinitialisation du mot de passe via token
 */
export async function resetPassword(req: Request, res: Response, next: NextFunction) {
  const { token, newPassword } = req.body
  if (!token || !newPassword) {
    return res.status(400).json({ message: "Token et nouveau mot de passe requis." })
  }

  try {
    const resetRecord = await findValidToken(token)
    if (!resetRecord) {
      return res.status(400).json({ message: "Lien invalide ou expiré." })
    }

    const user = await prisma.user.findUnique({ where: { email: resetRecord.email } })
    if (!user) {
      return res.status(400).json({ message: "Utilisateur introuvable." })
    }

    const hashedPassword = await argon2.hash(newPassword)
    await prisma.user.update({
      where: { user_id: user.user_id },
      data: { password_hash: hashedPassword }
    })

    await deleteToken(token)

    res.status(200).json({ message: "Mot de passe mis à jour." })
  } catch (error) {
    console.error("Erreur resetPassword:", error)
    res.status(500).json({ message: "Erreur serveur." })
  }
}

/**
* Formate l'utilisateur retourné au frontend
*/
function formatUser(user: IUser) {
  return {
    id: user.user_id,
    pseudonym: user.pseudonym,
    email: user.email,
    role_id: user.role_id
      ? {
        id: user.role_id,
      }
      : null
  }
}
