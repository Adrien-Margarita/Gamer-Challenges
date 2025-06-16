import { useState, useEffect } from "react"
import { useSearchParams, useNavigate, Link } from "react-router"
import { useAuth } from "@/hooks/useAuth"
import { FormError } from "@/components/ui"
import { handleApiError } from "@/utils/handleApiError"
import Logo from "/assets/images/logo-color-full.svg"

/**
 * Page de réinitialisation du mot de passe via token sécurisé.
 * Permet de soumettre un nouveau mot de passe à l'API.
 */
export default function ResetPasswordPage() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const token = searchParams.get("token")

  const [newPassword, setNewPassword] = useState("")
  const [success, setSuccess] = useState(false)

  const { resetPasswordMutation } = useAuth()
  const { mutate, isPending, error } = resetPasswordMutation

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!token) return

    mutate(
      { token, newPassword },
      {
        onSuccess: (data) => {
          console.log(data)
          setSuccess(true)
          setTimeout(() => navigate("/login"), 2500)
        }
      }
    )
  }

  useEffect(() => {
    if (!token) {
      console.warn("Token manquant ou invalide")
    }
  }, [token])

  return (
    <div className="flex min-h-screen items-center justify-center relative overflow-hidden bg-gradient-to-r from-[#12243E]  to-[#314C6B]">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-6 rounded-lg bg-base-100 p-8 shadow-lg"
      >
        <div className="text-center">
          <img
            src={Logo}
            alt="Gamer Challenge Logo"
            className="mx-auto mb-5"
          />
          <p className="text-sm font-mono text-gray-400">
            Réinitialisation via{" "}
            <span className="text-secondary">lien sécurisé</span>
          </p>
        </div>

        {success && (
          <div className="text-center rounded bg-green-500/20 p-2 text-green-400">
            Mot de passe mis à jour. Redirection en cours...
          </div>
        )}

        {error && (
          <div className="text-center">
            <FormError>{handleApiError(error)}</FormError>
          </div>
        )}

        <input
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
          type="password"
          name="newPassword"
          placeholder="Nouveau mot de passe"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />

        <div className="flex justify-center">
          <button type="submit" disabled={!token || isPending} className="btn btn-primary">
            {isPending ? "Réinitialisation..." : "RÉINITIALISER"}
          </button>
        </div>

        <div className="text-center">
          <Link to="/login" className="text-sm text-secondary underline">
            Retour à la connexion
          </Link>
        </div>
      </form>
    </div>
  )
}
