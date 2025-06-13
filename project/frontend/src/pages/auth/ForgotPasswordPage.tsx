import { useState } from "react"
import { Input, Button, FormError } from "@/components/ui"
import { handleApiError } from "@/utils/handleApiError"
import { Link } from "react-router"
import { useAuth } from "@/hooks/useAuth"

/**
 * Page de demande de réinitialisation de mot de passe.
 * Envoie l'adresse email à l'API pour générer un lien de réinitialisation.
 */
export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")

  const { forgotPasswordMutation } = useAuth()
  const { mutate, isPending, isSuccess, error } = forgotPasswordMutation

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutate(email)
  }

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
            <span className="text-[#00aaff] animate-pulse">protocole sécurisé</span>
          </p>
        </div>

        {isSuccess && (
          <div className="text-center rounded bg-green-500/20 p-2 text-sm text-green-400">
            Si un compte existe, un lien de réinitialisation a été envoyé.
          </div>
        )}

        {error && (
          <div className="text-center">
            <FormError>{handleApiError(error)}</FormError>
          </div>
        )}

        <Input
          type="email"
          name="email"
          placeholder="Adresse email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <div className="flex justify-center">
          <Button type="submit" disabled={isPending}>
            {isPending ? "Envoi en cours..." : "ENVOYER LE LIEN"}
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
