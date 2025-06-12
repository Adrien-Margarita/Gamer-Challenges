import { useState } from "react"
import { useNavigate, Link } from "react-router"
import { Input, Button, FormError } from "@/components/ui"
import { useAuth } from "@/hooks/useAuth"
import { handleApiError } from "@/utils/handleApiError"
import { IRegisterInput } from "@/@types/IAuth"

export default function Register() {
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
            Inscription au <span className="text-[#00aaff] animate-pulse">réseau Stark Byte</span>
          </p>
        </div>

        {registerMutation.error && (
          <div className="text-center">
            <FormError>{handleApiError(registerMutation.error)}</FormError>
          </div>
        )}

        <Input
          name="pseudonym"
          placeholder="Nom d'utilisateur *"
          value={form.pseudonym}
          onChange={handleChange}
          required
        />
        <Input
          name="email"
          type="email"
          placeholder="Adresse email *"
          value={form.email}
          onChange={handleChange}
          required
        />
        <Input
          name="password"
          type="password"
          placeholder="Mot de passe *"
          value={form.password}
          onChange={handleChange}
          required
        />
        <Input
          name="avatar_url"
          placeholder="URL de l'avatar (optionnel)"
          value={form.avatar_url}
          onChange={handleChange}
        />

        <p className="text-xs text-center text-gray-500">
          Les champs avec une * sont obligatoires.
        </p>

        <div className="flex justify-center">
          <Button type="submit" disabled={registerMutation.isPending} variant="neon">
            {registerMutation.isPending ? "Création..." : "S'inscrire"}
          </Button>
        </div>

        <div className="flex justify-center">
          <Link to="/login" className="text-sm text-[#00aaff] underline">
            Déjà un compte ? Se connecter
          </Link>
        </div>
      </form>
    </div>
  )
}
