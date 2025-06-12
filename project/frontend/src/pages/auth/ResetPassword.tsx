import { useState, useEffect } from "react"
import { useSearchParams, useNavigate, Link } from "react-router"
import { useAuth } from "@/hooks/useAuth"
import { Input, Button, FormError } from "@/components/ui"
import { handleApiError } from "@/utils/handleApiError"

/**
 * Page de réinitialisation du mot de passe via token sécurisé.
 * Permet de soumettre un nouveau mot de passe à l'API.
 */
export default function ResetPassword() {
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
    <div className="flex min-h-screen items-center justify-center bg-[#121212] px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-6 rounded-lg border-l-4 border-[#00aaff]/30 bg-[#1e1e1e] p-8 shadow-lg shadow-[#00aaff]/10"
      >
        <div className="text-center">
          <img
            src="/stark_byte_hub_logo_white_transparent.svg"
            alt="Stark Byte Hub Logo"
            className="mx-auto mb-5 h-20"
          />
          <p className="text-sm font-mono text-gray-400">
            Réinitialisation via{" "}
            <span className="text-[#00aaff] animate-pulse">lien sécurisé</span>
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

        <Input
          type="password"
          name="newPassword"
          placeholder="Nouveau mot de passe"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />

        <div className="flex justify-center">
          <Button type="submit" disabled={!token || isPending}>
            {isPending ? "Réinitialisation..." : "RÉINITIALISER"}
          </Button>
        </div>

        <div className="text-center">
          <Link to="/login" className="text-sm text-[#00aaff] underline">
            Retour à la connexion
          </Link>
        </div>
      </form>
    </div>
  )
}
