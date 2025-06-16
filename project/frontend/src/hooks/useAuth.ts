import { useAtom } from "jotai"
import { useCallback, useEffect } from "react"
import { useNavigate } from "react-router"
import { useMutation } from "@tanstack/react-query"
import { authAtom, authLoadingAtom } from "@/stores/authAtom"
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
import { csrfTokenAtom } from "@/stores/csrfAtom"
import { getDefaultStore } from "jotai"
import api from "@/lib/axios"

/**
 * Hook personnalisé pour gérer l'état d'authentification utilisateur dans l'application.
 */
export function useAuth() {
  const [auth, setAuth] = useAtom(authAtom)
  const [isLoading, setIsLoading] = useAtom(authLoadingAtom)
  const navigate = useNavigate()
  const store = getDefaultStore()

  /**
   * Initialise la session utilisateur via /auth/me
   */
  const initAuth = useCallback(async () => {
    setIsLoading(true)
    try {
      const user = await getCurrentUser()
      setAuth(user)
      logger("Session restaurée", user)

      //  Récupère aussi le token CSRF ici
      const res = await api.get("/csrf-token")
      store.set(csrfTokenAtom, res.data.csrfToken)
      logger("CSRF token chargé", res.data.csrfToken)
    } catch (error) {
      logger("Session expirée ou inexistante", error)
      setAuth(null)
    } finally {
      setIsLoading(false)
    }
  }, [setAuth])

  useEffect(() => {
    logger("📦 useAuth → auth:", auth)
    logger("📦 useAuth → isLoading:", isLoading)
  }, [auth, isLoading])

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

  /**
   * Inscription utilisateur
   */
  const registerMutation = useMutation({
    mutationFn: apiRegister,
    onSuccess: async (user: IAuthUser) => {
      setAuth(user)

      const res = await api.get("/csrf-token")
      store.set(csrfTokenAtom, res.data.csrfToken)

      await initAuth()

      logger("Utilisateur inscrit", user)
      navigate("/")
    },
    onError: (error) => {
      logger("Erreur inscription", error)
    }
  })

  /**
   * Connexion utilisateur
   */
  const loginMutation = useMutation({
    mutationFn: apiLogin,
    onSuccess: async (user: IAuthUser) => {
      setAuth(user)

      const res = await api.get("/csrf-token")
      store.set(csrfTokenAtom, res.data.csrfToken)

      await initAuth()

      logger("Utilisateur connecté", user)
      navigate("/")
    },
    onError: (error) => {
      logger("Erreur login", error)
    }
  })

  /**
   * Mot de passe oublié
   */
  const forgotPasswordMutation = useMutation({
    mutationFn: apiForgotPassword,
    onSuccess: () => {
      logger("Lien de réinitialisation envoyé.")
    },
    onError: (error) => {
      logger("Erreur forgotPassword", error)
    }
  })

  /**
   * Réinitialisation du mot de passe
   */
  const resetPasswordMutation = useMutation({
    mutationFn: apiResetPassword,
    onSuccess: () => {
      logger("Mot de passe modifié.")
    },
    onError: (error) => {
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
