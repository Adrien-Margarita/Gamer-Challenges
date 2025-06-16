import { useState } from "react"
import { useNavigate, Link } from "react-router"
import { FormError } from "@/components/ui"
import { useAuth } from "@/hooks/useAuth"
import { handleApiError } from "@/utils/handleApiError"
import { IRegisterInput } from "@/@types/IAuth"
import Logo from "/assets/images/logo-color-full.svg"

export default function RegisterPage() {
  const navigate = useNavigate()
  const { registerMutation } = useAuth()

  const [form, setForm] = useState<IRegisterInput>({
    email: "",
    password: "",
    pseudonym: "",
    avatar_url: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    registerMutation.mutate(form, {
      onSuccess: () => navigate("/")
    })
  }

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
            Inscription Gamer Challenge
          </p>
        </div>

        {registerMutation.error && (
          <div className="text-center">
            <FormError>{handleApiError(registerMutation.error)}</FormError>
          </div>
        )}

        <input
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
          name="pseudonym"
          placeholder="Nom d'utilisateur *"
          value={form.pseudonym}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Adresse email *"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
          name="password"
          type="password"
          placeholder="Mot de passe *"
          value={form.password}
          onChange={handleChange}
          required
        />
        <input
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
          name="avatar_url"
          placeholder="URL de l'avatar (optionnel)"
          value={form.avatar_url}
          onChange={handleChange}
        />

        <p className="text-xs text-center text-gray-500">
          Les champs avec un * sont obligatoires.
        </p>

        <div className="flex justify-center">
          <button type="submit" disabled={registerMutation.isPending} className="btn btn-primary text-base">
            {registerMutation.isPending ? "Création..." : "S'inscrire"}
          </button>
        </div>

        <div className="flex justify-center">
          <Link to="/login" className="text-sm text-secondary underline">
            Déjà un compte ? Se connecter
          </Link>
        </div>
      </form>
    </div>
  )
}
