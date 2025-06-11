/**
 * Logger basique pour afficher dans la console uniquement en développement.
 * @param message Le message à logger
 * @param data Données optionnelles associées
 */
export function logger(message: string, data?: unknown) {
    if (import.meta.env.MODE === "development") {
      console.log(`[Gamer Challenge Logger] ${message}`, data)
    }
  }
  