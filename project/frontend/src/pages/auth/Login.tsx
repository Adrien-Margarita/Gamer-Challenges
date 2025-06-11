import { useState } from "react"
import { useNavigate, Link } from "react-router"
import { Input, Button, FormError } from "@/components/ui"
import { handleApiError } from "@/utils/handleApiError"
import { useAuth } from "@/hooks/useAuth"

export default function Login() {
  const navigate = useNavigate()
  const { loginMutation } = useAuth()

  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm((prev: any) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    loginMutation.mutate(form, {
      onSuccess: () => navigate("/")
    })
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#121212] px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-6 rounded-lg border-l-4 border-[#00aaff]/30 bg-[#1e1e1e] p-8 shadow-lg shadow-[#00aaff]/10"
      >
        <div className="text-center">
          <img
            src="./stark_byte_hub_logo_white_transparent.svg"
            alt="Stark Byte Hub Logo"
            className="mx-auto mb-5 h-20"
          />
          <p className="mt-2 text-sm font-mono text-gray-400">
            Connexion au <span className="text-[#00aaff] animate-pulse">nœud principal...</span>
          </p>
        </div>

        {loginMutation.error && (
          <div className="text-center">
            <FormError>{handleApiError(loginMutation.error)}</FormError>
          </div>
        )}

        <Input
          name="email"
          type="email"
          placeholder="Adresse email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <Input
          name="password"
          type="password"
          placeholder="Mot de passe"
          value={form.password}
          onChange={handleChange}
          required
        />

        <div className="flex justify-center">
          <Button type="submit" disabled={loginMutation.isPending} variant="neon">
            {loginMutation.isPending ? "Connexion..." : "SE CONNECTER"}
          </Button>
        </div>

        <div className="text-center space-y-1">
          <Link to="/forgot-password" className="text-sm text-[#00aaff] underline">
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
