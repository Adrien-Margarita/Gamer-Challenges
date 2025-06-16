import { useAuth } from "@/hooks/useAuth"
import { Link } from "react-router"
import LogoWhite from "/assets/images/logo-white.svg"
import Icon from '@mdi/react';
import { mdiLogout, mdiMenu } from '@mdi/js';
function Navbar() {

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
        {/* <input className="input w-full" placeholder="Rechercher" /> */}

        {!isAuthenticated ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="m-1">
              <Icon
                path={mdiMenu}
                size={1.2}
                className="cursor-pointer text-secondary hover:text-primary transition-colors duration-200"
              />
            </div>
            <div tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              <Link
                className="cursor-pointer text-white hover:bg-primary hover:text-white p-2 rounded"
                to="/login">
                Se connecter
              </Link>
              <Link
                className="cursor-pointer text-white hover:bg-primary hover:text-white p-2 rounded"
                to="/register">
                S’inscrire
              </Link>
            </div>
          </div>
            
        ) : (
          <>
            <Link
              to="/profile"
              className="ghost cursor-pointer flex flex-col items-center"
              title="Mon profil" 
            >
              <img src={auth?.avatar_url} alt="Mon profil" className="md: w-10 lg:w-12 border-primary border-2 rounded-full mb-1" />
              <span className="ml-2 text-xs text-white">{auth?.pseudonym}</span>
            </Link>
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