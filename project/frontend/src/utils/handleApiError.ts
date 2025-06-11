/**
 * Représente une erreur API avec un code HTTP et un message.
 */
type ApiError = {
    response?: {
      status?: number
      data?: {
        message?: string
      }
    }
    message?: string
  }
  
/**
 * Extrait un message d’erreur lisible à partir d’une erreur API.
 * Affiche des messages personnalisés selon le code HTTP.
 * @param error Erreur retournée par une requête ou une mutation
 * @returns Message lisible pour l'utilisateur
 */
export function handleApiError(error: unknown): string {
    const err = error as ApiError
    const code = err?.response?.status
    const message = err?.response?.data?.message ?? err?.message

    if (!code) return message || "Une erreur inconnue s’est produite."

    switch (code) {
        case 400:
        return message || "Requête invalide."
        case 401:
        return "Connexion requise. Veuillez vous authentifier."
        case 403:
        return "Accès interdit. Vous n’avez pas les droits nécessaires."
        case 404:
        return "Ressource introuvable."
        case 500:
        return "Erreur interne du serveur. Veuillez réessayer plus tard."
        default:
        return message || `Erreur inattendue (${code})`
    }
}
  