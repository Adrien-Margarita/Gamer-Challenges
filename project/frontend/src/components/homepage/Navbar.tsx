import { useAuth } from "@/hooks/useAuth";
import { Link } from "react-router";
import LogoWhite from "/assets/images/logo-white.svg";
import Icon from "@mdi/react";
import { mdiBulletinBoard, mdiCogOutline, mdiControllerClassicOutline, mdiHomeOutline, mdiLogout, mdiMenu, mdiTrophyOutline } from "@mdi/js";

function Navbar() {
  const { isAuthenticated, logout, auth, isAdmin } = useAuth();

  return (
    <div className="drawer-end md:drawer-static">
      <input id="menu-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <header className="navbar bg-base-100 shadow p-4 md:p-6">
          <div className="flex w-full text-xl font-bold">
            <Link to="/">
              <div className="flex w-full items-center gap-4 justify-center text-white">
                <img src={LogoWhite} alt="Gamer Challenge" className="h-6" />
                <h1 className="text-2xl font-normal">Gamer Challenge</h1>
              </div>
            </Link>
          </div>

          {/* Menu visible en md+ */}
            {!isAuthenticated ? (
              <div className="flex w-full justify-end gap-4">
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
                </div>
            ) : (
              <>
              <div className="flex w-full justify-center items-center gap-8">
                <Link to="/"
                  className="hover:bg-primary hover:text-white rounded px-4 py-2 flex items-center gap-2 group"
                >
                  <Icon className="opacity-50 text-primary group-hover:text-white" path={mdiHomeOutline} size={1} />
                  Accueil
                </Link>
                <Link to="/games"
                  className="hover:bg-primary hover:text-white rounded px-4 py-2 flex items-center gap-2 group"
                >
                  <Icon className="opacity-50 text-primary group-hover:text-white" path={mdiControllerClassicOutline} size={1} />
                  Jeux
                </Link>
                <Link
                  to="/challenges"
                  className="hover:bg-primary hover:text-white rounded px-4 py-2 flex items-center gap-2 group"
                >
                  <Icon
                    className="opacity-50 text-primary group-hover:text-white"
                    path={mdiTrophyOutline}
                    size={1}
                  />
                  Challenges
                </Link>
                <Link to="/leaderboard"
                  className="hover:bg-primary hover:text-white rounded px-4 py-2 flex items-center gap-2 group"
                >
                  <Icon className="opacity-50 text-primary group-hover:text-white" path={mdiBulletinBoard} size={1} />
                  Leaderboard
                </Link>
                { isAdmin && (
                  <Link to="/settings"
                    className="hover:bg-primary hover:text-white rounded flex items-center gap-2">
                    <Icon className="opacity-50 text-primary group-hover:text-white" path={mdiCogOutline} size={1} />
                    Administration
                  </Link>
                )}
              </div>
              <div className="flex w-full justify-end gap-8">
                {/* Profil et déconnexion */}
                <Link
                  to="/profile"
                  className="cursor-pointer flex flex-col items-center text-secondary hover:text-white transition-colors"
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
                  className="cursor-pointer text-primary hover:text-white hover:bg-primary transition-colors p-4 rounded-full"
                  title="Se déconnecter"
                  onClick={logout}
                >
                  <Icon path={mdiLogout} size={1} />
                </button>
              </div>
              </>
            )}
          {/* </div> */}

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
              <li >
                <Link to="/profile" className="flex items-start p-0 mb-2">
                  <img
                    src={auth?.avatar_url}
                    alt="Mon profil"
                    className="w-12 border-primary border-2 rounded-full"
                  />
                  <div className="flex flex-col">
                    <p>{auth?.pseudonym}</p>
                    <p className="text-xs text-gray-400">
                      {auth?.email}
                    </p>
                  </div>
                </Link>
                <hr className="opacity-20" style={{ marginBottom: "0" }} />
              </li>
              <li>
                <Link to="/games" className="hover:bg-primary hover:text-white rounded flex items-center gap-2">
                  <Icon className="opacity-50 text-primary" path={mdiControllerClassicOutline} size={1} />
                  Jeux
                </Link>
              </li>
              <li>
                <Link to="/challenges" className="hover:bg-primary hover:text-white rounded flex items-center gap-2">
                  <Icon className="opacity-50 text-primary" path={mdiTrophyOutline} size={1} />
                  Challenges
                </Link>
              </li>
              <li>
                <Link to="/leaderboard" className="hover:bg-primary hover:text-white rounded flex items-center gap-2">
                  <Icon className="opacity-50 text-primary" path={mdiBulletinBoard} size={1} />
                  Leaderboard
                </Link>
              </li>
              <li>
              <hr className="opacity-20" style={{ marginBottom: "0" }} />
                { auth?.role_id === 1 && (
                  <Link to="/settings" className="hover:bg-primary hover:text-white rounded flex items-center gap-2">
                    <Icon className="opacity-50 text-primary" path={mdiCogOutline} size={1} />
                    Administration
                  </Link>
                )}
              </li>
              <li>
                <hr className="opacity-20" style={{ marginBottom: "0" }} />
                <button
                  onClick={logout}
                  className="hover:bg-primary hover:text-white rounded flex items-center gap-2"
                >
                  <Icon className="opacity-50 text-primary" path={mdiLogout} size={1} />
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
