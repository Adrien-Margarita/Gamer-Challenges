import { useState } from "react"
import { useNavigate, Link } from "react-router"
import { FormError } from "@/components/ui"
import { handleApiError } from "@/utils/handleApiError"
import { useAuth } from "@/hooks/useAuth"
import { ILoginInput } from "@/@types/IAuth"
import Logo from "/assets/images/logo-color-full.svg"

export default function LoginPage() {
  const navigate = useNavigate()
  const { loginMutation } = useAuth()

  const [form, setForm] = useState<ILoginInput>({
    email: "",
    password: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    loginMutation.mutate(form, {
      onSuccess: () => navigate("/")
    })
  }

  return (
    <div className="flex w-screen h-screen items-center justify-center relative overflow-hidden">
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
        </div>

        {loginMutation.error && (
          <div className="text-center">
            <FormError>{handleApiError(loginMutation.error)}</FormError>
          </div>
        )}

        <input
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
          name="email"
          type="email"
          placeholder="Adresse email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
          name="password"
          type="password"
          placeholder="Mot de passe"
          value={form.password}
          onChange={handleChange}
          required
        />

        <div className="flex justify-center">
          <button className="btn btn-primary text-base" type="submit" disabled={loginMutation.isPending}>
            {loginMutation.isPending ? "Connexion..." : "Se connecter"}
          </button>
        </div>

        <div className="text-center space-y-1">
          <Link to="/forgot-password" className="text-base underline text-violet-600 hover:text-violet-800">
            Mot de passe oublié ?
          </Link>
          <br />
          <Link to="/register" className="text-xs text-gray-400 underline">
            Créer un compte
          </Link>
        </div>
      </form>
    </div>
  )
}
