import { Button } from "../ui"
import { useAuth } from "@/hooks/useAuth"
import { useNavigate } from "react-router"

function Navbar() {
  const navigate = useNavigate()
  const { isAuthenticated, logout } = useAuth()

  return (
    <header className="navbar bg-base-100 shadow">
      <div className="flex-1 text-xl font-bold">Gamer Challenge</div>
      <div className="flex gap-2">
        <input className="ghost" placeholder="Rechercher" />

        {!isAuthenticated ? (
          <>
            <Button
              className="ghost"
              onClick={() => navigate('/login')}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  navigate(`/login`)
                }
              }}
            >
              Se connecter
            </Button>
            <Button
              className="default"
              onClick={() => navigate('/register')}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  navigate(`/register`)
                }
              }}
            >
              S’inscrire
            </Button>
          </>
        ) : (
          <>
            <Button
              className="default"
              onClick={() => navigate('/profile')}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  navigate(`/profile`)
                }
              }}
            >
              Mon profil</Button>
            <Button
              className="default"
              onClick={logout}>
              Se déconnecter
            </Button>
          </>
        )}

      </div>
    </header>
  )
}

export default Navbar