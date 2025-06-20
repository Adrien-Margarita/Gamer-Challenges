import { useAuth } from "@/hooks/useAuth";
import { Link } from "react-router";
import LogoWhite from "/assets/images/logo-white.svg";
import Icon from "@mdi/react";
import {
  mdiBulletinBoard,
  mdiCogOutline,
  mdiControllerClassicOutline,
  mdiHomeOutline,
  mdiLogout,
  mdiMenu,
  mdiTrophyOutline,
} from "@mdi/js";
import { useRef } from "react";

function Navbar() {
  const { isAuthenticated, logout, auth, isAdmin } = useAuth();
  const drawerToggle = useRef<HTMLInputElement>(null);

  const closeDrawer = () => {
    if (drawerToggle.current) {
      drawerToggle.current.checked = false;
    }
  };

  return (
    <div className="drawer drawer-end">
      <input ref={drawerToggle} id="menu-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <header className="navbar bg-base-100 shadow p-4 md:p-6 w-full">
          <div className="flex w-full justify-between items-center">
            <Link to="/" onClick={closeDrawer} className="flex items-baseline gap-4 text-white">
              <img src={LogoWhite} alt="Gamer Challenge" className="h-4 md:h-6" />
              <h1 className="lg:text-2xl font-normal sm:text-xl">Gamer Challenge</h1>
            </Link>
    
            {/* Menu visible en md+ */}
            <div className="hidden md:flex gap-4 items-center">
              {!isAuthenticated ? (
                <>
                  <Link to="/login" className="hover:bg-primary hover:text-white p-2 rounded">Se connecter</Link>
                  <Link to="/register" className="hover:bg-primary hover:text-white p-2 rounded">S’inscrire</Link>
                </>
              ) : (
                <>
                  <Link to="/" className="hover:bg-primary hover:text-white rounded px-4 py-2 flex items-center gap-2 group">
                    <Icon className="opacity-50 text-primary group-hover:text-white" path={mdiHomeOutline} size={1} />
                    Accueil
                  </Link>
                  <Link to="/games" className="hover:bg-primary hover:text-white rounded px-4 py-2 flex items-center gap-2 group">
                    <Icon className="opacity-50 text-primary group-hover:text-white" path={mdiControllerClassicOutline} size={1} />
                    Jeux
                  </Link>
                  <Link to="/challenges" className="hover:bg-primary hover:text-white rounded px-4 py-2 flex items-center gap-2 group">
                    <Icon className="opacity-50 text-primary group-hover:text-white" path={mdiTrophyOutline} size={1} />
                    Challenges
                  </Link>
                  <Link to="/leaderboard" className="hover:bg-primary hover:text-white rounded px-4 py-2 flex items-center gap-2 group">
                    <Icon className="opacity-50 text-primary group-hover:text-white" path={mdiBulletinBoard} size={1} />
                    Leaderboard
                  </Link>
                  {isAdmin && (
                    <Link to="/administration" className="hover:bg-primary hover:text-white rounded px-4 py-2 flex items-center gap-2 group">
                      <Icon className="opacity-50 text-primary group-hover:text-white" path={mdiCogOutline} size={1} />
                      Administration
                    </Link>
                  )}
                  <Link
                    to="/profile"
                    className="cursor-pointer flex flex-col items-center text-secondary hover:text-white transition-colors"
                    title="Mon profil"
                  >
                    <img src={auth?.avatar_url || "/assets/images/logo-color-full.svg"} alt="Mon profil" className="w-10 h-10 border-primary border-2 rounded-full mb-1" />
                    <span className="text-xs">{auth?.pseudonym}</span>
                  </Link>
                  <button
                    onClick={logout}
                    className="cursor-pointer text-primary hover:text-white hover:bg-primary transition-colors p-2 rounded-full"
                    title="Se déconnecter"
                  >
                    <Icon path={mdiLogout} size={1} />
                  </button>
                </>
              )}
            </div>

            {/* Burger menu visible en sm */}
            <div className="md:hidden">
              <label htmlFor="menu-drawer" className="cursor-pointer p-2">
                <Icon path={mdiMenu} size={1.4} className="text-secondary hover:text-primary transition-colors" />
              </label>
            </div>
          </div>
        </header>
      </div>

      {/* Drawer mobile à droite */}
      <div className="drawer-side z-50">
        <label htmlFor="menu-drawer" className="drawer-overlay" onClick={closeDrawer}></label>
        <ul className="menu p-4 w-64 min-h-full bg-base-200 text-white gap-2">
          {!isAuthenticated ? (
            <>
              <li><Link to="/login" onClick={closeDrawer} className="hover:bg-primary hover:text-white rounded">Se connecter</Link></li>
              <li><Link to="/register" onClick={closeDrawer} className="hover:bg-primary hover:text-white rounded">S’inscrire</Link></li>
            </>
          ) : (
            <>
              <li>
                <Link to="/profile" onClick={closeDrawer} className="flex items-center p-0 mb-2 gap-2">
                  <img src={auth?.avatar_url || "/assets/images/logo-color-full.svg"} alt="Mon profil" className="w-12 border-primary border-2 rounded-full" />
                  <div className="flex flex-col">
                    <p>{auth?.pseudonym}</p>
                    <p className="text-xs text-gray-400">{auth?.email}</p>
                  </div>
                </Link>
                <hr className="opacity-20" />
              </li>
              <li><Link to="/" onClick={closeDrawer} className="hover:bg-primary hover:text-white rounded flex items-center gap-2"><Icon className="opacity-50 text-primary" path={mdiHomeOutline} size={1} /> Accueil</Link></li>
              <li><Link to="/games" onClick={closeDrawer} className="hover:bg-primary hover:text-white rounded flex items-center gap-2"><Icon className="opacity-50 text-primary" path={mdiControllerClassicOutline} size={1} /> Jeux</Link></li>
              <li><Link to="/challenges" onClick={closeDrawer} className="hover:bg-primary hover:text-white rounded flex items-center gap-2"><Icon className="opacity-50 text-primary" path={mdiTrophyOutline} size={1} /> Challenges</Link></li>
              <li><Link to="/leaderboard" onClick={closeDrawer} className="hover:bg-primary hover:text-white rounded flex items-center gap-2"><Icon className="opacity-50 text-primary" path={mdiBulletinBoard} size={1} /> Leaderboard</Link></li>
              {isAdmin && (
                <li><Link to="/settings" onClick={closeDrawer} className="hover:bg-primary hover:text-white rounded flex items-center gap-2"><Icon className="opacity-50 text-primary" path={mdiCogOutline} size={1} /> Administration</Link></li>
              )}
              <li>
                <button onClick={() => { logout(); closeDrawer(); }} className="hover:bg-primary hover:text-white rounded flex items-center gap-2">
                  <Icon className="opacity-50 text-primary" path={mdiLogout} size={1} /> Déconnexion
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
