import { ILogin } from "@/@types/ILogin"
import { IUser } from "@/@types/IUser"
import apiClient from "@/lib/axios"
import { logger } from "@/utils/logger"

/**
 * Inscription d'un nouvel utilisateur.
 * @param data Données du formulaire d’inscription
 * @returns Données de l'utilisateur authentifié
 */
export async function register(data: IUser): Promise<IUser> {
  logger("AuthService → register()", data)
  const { data: user } = await apiClient.post("/auth/register", data)
  return user
}

/**
 * Connexion d’un utilisateur avec email ou pseudonyme et mot de passe.
 * @param data Identifiants de connexion
 * @returns Données de l'utilisateur authentifié
 */
export async function login(data: ILogin): Promise<ILogin> {
  logger("AuthService → login()", data)
  const { data: user } = await apiClient.post("/auth/login", data)
  return user
}

/**
 * Déconnecte l'utilisateur en cours.
 */
export async function logout(): Promise<void> {
  logger("AuthService → logout()")
  await apiClient.post("/auth/logout")
}

/**
 * Récupère l'utilisateur actuellement connecté.
 * @returns Données de l'utilisateur si session active
 */
export async function getCurrentUser(): Promise<IUser> {
  logger("AuthService → getCurrentUser()")
  const { data: user } = await apiClient.get("auth/me")
  return user
}

/**
 * Envoie un email contenant un lien de réinitialisation du mot de passe.
 * @param email Adresse email de l'utilisateur
 */
export async function forgotPassword(email: string): Promise<void> {
  logger("AuthService → forgotPassword()", email)
  await apiClient.post("/auth/forgotPassword", { email })
}

/**
 * Réinitialise le mot de passe à partir du token reçu par email.
 * @param payload Objet contenant le token et le nouveau mot de passe
 */
export async function resetPassword(payload: { token: string; newPassword: string }): Promise<void> {
  logger("AuthService → resetPassword()", payload)
  await apiClient.post("/auth/resetPassword", payload)
}