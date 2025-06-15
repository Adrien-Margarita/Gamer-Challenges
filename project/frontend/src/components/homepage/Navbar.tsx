import { useAuth } from "@/hooks/useAuth"
import { Link, useNavigate } from "react-router"
import LogoWhite from "/assets/images/logo-white.svg"
import Icon from '@mdi/react';
import { mdiLogout } from '@mdi/js';
function Navbar() {

  const navigate = useNavigate()
  const { isAuthenticated, logout, auth } = useAuth()

  return (
    <header className="navbar bg-base-100 shadow p-6">
      <div className="flex-1 text-xl font-bold">
        <Link to="/">
          <div className="flex items-center gap-4 text-white">
            <img src={LogoWhite} alt="Gamer Challenge" className="h-6" />
            <h1 className="text-2xl font-normal">Gamer Challenge</h1>
          </div>
        </Link>
      </div>
      <div className="flex gap-4 items-center">
        <input className="input w-full" placeholder="Rechercher" />

        {!isAuthenticated ? (
          <>
            <button
              className="btn btn-primary"
              onClick={() => navigate('/login')}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  navigate(`/login`)
                }
              }}
            >
              Se connecter
            </button>
            <button
              className="btn btn-primary"
              onClick={() => navigate('/register')}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  navigate(`/register`)
                }
              }}
            >
              S’inscrire
            </button>
          </>
        ) : (
          <>
            <button
              className="ghost cursor-pointer flex flex-col items-center"
              onClick={() => navigate('/profile')}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  navigate(`/profile`)
                }
              }}
            >
              <img src={auth?.avatar_url} alt="Mon profil" className="md: w-10 lg:w-12 border-primary border-2 rounded-full mb-1" />
              <span className="ml-2 text-xs text-white">{auth?.pseudonym}</span>
            </button>
            <button
              className="ghost cursor-pointer"
              title="Se déconnecter"
              onClick={logout}>
              <Icon path={mdiLogout} size={1} />
            </button>
          </>
        )}

      </div>
    </header>
  )
}

export default Navbar