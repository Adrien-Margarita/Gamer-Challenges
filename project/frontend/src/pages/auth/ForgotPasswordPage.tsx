import { useState } from "react"
import { FormError } from "@/components/ui"
import { handleApiError } from "@/utils/handleApiError"
import { Link } from "react-router"
import { useAuth } from "@/hooks/useAuth"
import Logo from "/assets/images/logo-color-full.svg"

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
    <div className="flex w-screen h-screen items-center justify-center relative overflow-hidden bg-gradient-to-r from-[#12243E]  to-[#314C6B]">

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
            <span className="text-secondary">protocole sécurisé</span>
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

        <input
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
          type="email"
          name="email"
          placeholder="Adresse email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <div className="flex justify-center">
          <button type="submit" disabled={isPending} className="btn btn-primary"> 
            {isPending ? "Envoi en cours..." : "ENVOYER LE LIEN"}
          </button>
        </div>

        <div className="text-center">
          <Link to="/login" className="text-sm text-secondary">
            Retour à la connexion
          </Link>
        </div>
      </form>
    </div>
  )
}
