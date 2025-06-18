import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Link } from "react-router";
import LogoWhite from "/assets/images/logo-white.svg";
import Icon from "@mdi/react";
import { mdiLogout, mdiMenu, mdiMagnify } from "@mdi/js";

function Navbar() {
  const { isAuthenticated, logout, auth } = useAuth();
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("Recherche :", searchQuery);
    // TODO : rediriger ou exécuter recherche
  };

  return (
    <div className="drawer-end md:drawer-static">
      <input id="menu-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <header className="navbar bg-base-100 shadow p-4 md:p-6">
          <div className="flex-1 text-xl font-bold">
            <Link to="/">
              <div className="flex items-center gap-4 text-white">
                <img src={LogoWhite} alt="Gamer Challenge" className="h-6" />
                <h1 className="text-2xl font-normal">Gamer Challenge</h1>
              </div>
            </Link>
          </div>

          {/* Menu visible en md+ */}
          <div className="hidden md:flex gap-4 items-center text-white">

            {isAuthenticated && (
              <>
                {/* Bouton Loupe */}
                <button
                  onClick={() => setShowSearch((prev) => !prev)}
                  className="cursor-pointer"
                  title="Rechercher"
                >
                  <Icon
                    path={mdiMagnify}
                    size={1}
                    className="hover:text-primary transition-colors"
                  />
                </button>

                {/* Champ de recherche */}
                {showSearch && (
                  <form onSubmit={handleSearch} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Rechercher..."
                      className="w-full p-2 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 mt-1"
                    />
                    <button type="submit" className="btn btn-primary btn-sm">OK</button>
                  </form>
                )}
              </>
            )}

            {!isAuthenticated ? (
              <>
                <Link
                  to="/login"
                  className="cursor-pointer hover:bg-primary hover:text-white p-2 rounded"
                >
                  Se connecter
                </Link>
                <Link
                  to="/register"
                  className="cursor-pointer hover:bg-primary hover:text-white p-2 rounded"
                >
                  S’inscrire
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/profile"
                  className="cursor-pointer flex flex-col items-center"
                  title="Mon profil"
                >
                  <img
                    src={auth?.avatar_url}
                    alt="Mon profil"
                    className="w-10 border-primary border-2 rounded-full mb-1"
                  />
                  <span className="text-xs">{auth?.pseudonym}</span>
                </Link>
                <button
                  className="cursor-pointer"
                  title="Se déconnecter"
                  onClick={logout}
                >
                  <Icon path={mdiLogout} size={1} />
                </button>
              </>
            )}
          </div>

          {/* Burger menu sm */}
          <div className="md:hidden">
            <label htmlFor="menu-drawer" className="cursor-pointer p-2">
              <Icon
                path={mdiMenu}
                size={1.2}
                className="text-secondary hover:text-primary transition-colors"
              />
            </label>
          </div>
        </header>
      </div>

      {/* Drawer Sidebar menu pour mobile */}
      <div className="drawer-side z-50">
        <label htmlFor="menu-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-64 min-h-full bg-base-200 text-white gap-2">
          {!isAuthenticated ? (
            <>
              <li>
                <Link
                  to="/login"
                  className="hover:bg-primary hover:text-white rounded"
                >
                  Se connecter
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="hover:bg-primary hover:text-white rounded"
                >
                  S’inscrire
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/profile" className="flex items-center gap-2">
                  <img
                    src={auth?.avatar_url}
                    alt="Mon profil"
                    className="w-10 border-primary border-2 rounded-full"
                  />
                  <span>{auth?.pseudonym}</span>
                </Link>
              </li>
              <li>
                <button
                  onClick={logout}
                  className="hover:bg-primary hover:text-white rounded flex items-center gap-2"
                >
                  <Icon path={mdiLogout} size={1} />
                  Déconnexion
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
