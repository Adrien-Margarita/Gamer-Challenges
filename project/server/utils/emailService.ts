import nodemailer from "nodemailer"
import { getEmailTemplate } from "./emailTemplate"

const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  FRONTEND_URL
} = process.env

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: Number(SMTP_PORT),
  secure: SMTP_PORT === "465",
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS
  }
})

/**
 * Envoie un email générique.
 * @param {string} to - Email du destinataire
 * @param {string} subject - Sujet de l'email
 * @param {string} html - Contenu HTML
 * @param {object} [headers] - Headers optionnels
 */
export async function sendMail(to: string, subject: string, html: string, headers = {}) {
  await transporter.sendMail({
    from: `"Gamer Challenge" <${SMTP_USER}>`,
    to,
    subject,
    html,
    text: html.replace(/<[^>]+>/g, ""),
    headers
  })
}

/**
 * Envoie un email de réinitialisation de mot de passe.
 * @param {string} to - Email du destinataire
 * @param {string} token - Token de réinitialisation
 * @param {string} [pseudonym] - Prénom à afficher dans l'email
 */
export async function sendResetPasswordEmail(to: string, token: string, pseudonym: string) {
  const resetLink = `${FRONTEND_URL}/reset-password?token=${token}`
  const { subject, html, headers } = getEmailTemplate("resetPassword", {
    resetLink,
    pseudonym
  })

  await sendMail(to, subject, html, headers)
}
