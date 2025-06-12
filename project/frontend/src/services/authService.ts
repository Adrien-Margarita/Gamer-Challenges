import { ILoginInput, IUser, IAuthUser, IRegisterInput } from "@/@types/IAuth"
import apiClient from "@/lib/axios"
import { logger } from "@/utils/logger"

/**
 * Inscription d'un nouvel utilisateur.
 * @param data Données du formulaire d’inscription
 * @returns Données de l'utilisateur authentifié (sans password_hash)
 */
export async function register(data: IRegisterInput): Promise<IAuthUser> {
  logger("AuthService → register()", data)
  const { data: user }: { data: IUser } = await apiClient.post("/auth/register", data)
  const { password_hash, ...safeUser } = user
  return safeUser as IAuthUser
}

/**
 * Connexion d’un utilisateur avec email et mot de passe.
 * @param data Identifiants de connexion
 * @returns Données de l'utilisateur authentifié (sans password_hash)
 */
export async function login(data: ILoginInput): Promise<IAuthUser> {
  logger("AuthService → login()", data)
  const { data: user }: { data: IUser } = await apiClient.post("/auth/login", data)
  const { password_hash, ...safeUser } = user
  return safeUser as IAuthUser
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
 * @returns Données de l'utilisateur si session active (sans password_hash)
 */
export async function getCurrentUser(): Promise<IAuthUser> {
  logger("AuthService → getCurrentUser()")
  const { data: user }: { data: IUser } = await apiClient.get("/auth/me")
  const { password_hash, ...safeUser } = user
  return safeUser as IAuthUser
}

/**
 * Envoie un email contenant un lien de réinitialisation de mot de passe.
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
