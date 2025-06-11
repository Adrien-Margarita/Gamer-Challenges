import { IEmailData } from "@/@types/IEmailData";
import { IEmailTemplate } from "@/@types/IEmailTemplate";

type EmailType = "resetPassword" | "welcome";

/**
 * Enveloppe HTML stylisée pour tous les emails Gamer Challenge
 * @param title - Titre de l’email
 * @param content - Corps HTML de l’email
 * @returns HTML complet de l’email
 */
const baseHtml = (title: string, content: string): string => `<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>${title}</title>
  </head>
  <body style="background-color:#121212; color:#fff; font-family:Arial, sans-serif; padding:32px;">
    <div style="max-width:600px; margin:auto; background:#1e1e1e; border-left:4px solid #00aaff; padding:24px; border-radius:8px;">
      <h2 style="color:#00aaff;">${title}</h2>
      <div style="font-size:14px; line-height:1.6;">${content}</div>
      <hr style="margin:24px 0; border:none; border-top:1px solid #333;" />
      <p style="font-size:12px; color:#888;">Cet email vous a été envoyé par Gamer Challenge Hub.</p>
    </div>
  </body>
</html>`;

/**
 * Génère le sujet, le contenu HTML et les headers selon le type d’email
 * @param type - Type de template
 * @param data - Données à injecter dans le template
 * @returns Objet contenant le sujet, le HTML et les headers de l’email
 */
export function getEmailTemplate(type: EmailType, data: IEmailData = {}): IEmailTemplate {
  const pseudonym = data.pseudonym || "utilisateur";

  switch (type) {
    case "resetPassword":
      return {
        subject: "Réinitialisation de votre mot de passe",
        html: baseHtml(
          "Réinitialisation de mot de passe",
          `
            <p>Bonjour ${pseudonym},</p>
            <p>Vous avez demandé à réinitialiser votre mot de passe.</p>
            <p>
              Cliquez ici :
              <a href="${data.resetLink}" style="color:#00aaff;">Réinitialiser mon mot de passe</a>
            </p>
            <p>Ce lien est valable pendant 1 heure.</p>
          `
        ),
        headers: {
          "List-Unsubscribe": "<mailto:support@stark-byte.com>"
        }
      };

    case "welcome":
      return {
        subject: "Bienvenue sur Gamer Challenge !",
        html: baseHtml(
          "Bienvenue chez Gamer Challenge",
          `
            <p>Bonjour ${pseudonym},</p>
            <p>Bienvenue dans l’univers <strong>Gamer Challenge</strong>.</p>
            <p>Vous pouvez maintenant vous connecter et gérer vos robots en toute sécurité.</p>
          `
        ),
        headers: {
          "List-Unsubscribe": "<mailto:support@stark-byte.com>"
        }
      };

    default:
      return {
        subject: "Notification Gamer Challenge",
        html: baseHtml("Notification", "<p>Contenu non défini.</p>"),
        headers: {}
      };
  }
}
