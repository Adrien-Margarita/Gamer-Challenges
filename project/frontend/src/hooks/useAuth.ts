import { useAtom } from "jotai"
import { useCallback, useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { authAtom } from "@/stores/authAtom"
import {
  login as apiLogin,
  register as apiRegister,
  logout as apiLogout,
  getCurrentUser,
  forgotPassword as apiForgotPassword,
  resetPassword as apiResetPassword
} from "@/services/auth.service"
import { logger } from "@/utils/logger"
import { IAuthUser } from "@/@types/IAuth"

/**
 * Hook personnalisé pour gérer l'état d'authentification utilisateur dans l'application.
 */
export function useAuth() {
  const [auth, setAuth] = useAtom(authAtom)
  const [isLoading, setIsLoading] = useState(true)

  /**
   * Initialise la session utilisateur via /api/v1/me
   */
  const initAuth = useCallback(async () => {
    setIsLoading(true)
    try {
      const user = await getCurrentUser()
      setAuth(user)
      logger("Session restaurée", user)
    } catch (error) {
      logger("Session expirée ou inexistante", error)
      setAuth(null)
    } finally {
      setIsLoading(false)
    }
  }, [setAuth])

  /**
   * Déconnecte l'utilisateur (via API + reset local)
   */
  const logout = useCallback(async () => {
    try {
      await apiLogout()
      setAuth(null)
      // toastSuccess("Déconnexion réussie.")
      logger("Utilisateur déconnecté.")
    } catch (error) {
      // toastApiError(error)
      logger("Erreur lors de la déconnexion", error)
    }
  }, [setAuth])

  const registerMutation = useMutation({
    mutationFn: apiRegister,
    onSuccess: (user: IAuthUser) => {
      setAuth(user)
      // toastSuccess("Compte créé avec succès.")
      logger("Utilisateur inscrit", user)
    },
    onError: (error) => {
      // toastApiError(error)
      logger("Erreur inscription", error)
    }
  })

  const loginMutation = useMutation({
    mutationFn: apiLogin,
    onSuccess: (user: IAuthUser) => {
      setAuth(user)
      // toastSuccess("Connexion réussie.")
      logger("Utilisateur connecté", user)
    },
    onError: (error) => {
      // toastApiError(error)
      logger("Erreur login", error)
    }
  })

  const forgotPasswordMutation = useMutation({
    mutationFn: apiForgotPassword,
    onSuccess: () => {
      // toastSuccess("Si l'email existe, un lien a été envoyé.")
      logger("Lien de réinitialisation envoyé.")
    },
    onError: (error) => {
      // toastApiError(error)
      logger("Erreur forgotPassword", error)
    }
  })

  const resetPasswordMutation = useMutation({
    mutationFn: apiResetPassword,
    onSuccess: () => {
      // toastSuccess("Mot de passe réinitialisé.")
      logger("Mot de passe modifié.")
    },
    onError: (error) => {
      // toastApiError(error)
      logger("Erreur resetPassword", error)
    }
  })

  return {
    auth,
    setAuth,
    logout,
    initAuth,
    isLoading,
    isAuthenticated: Boolean(auth),
    role: auth?.role_name,
    isAdmin: auth?.role_name === "admin",

    // Mutations
    registerMutation,
    loginMutation,
    forgotPasswordMutation,
    resetPasswordMutation
  }
}

