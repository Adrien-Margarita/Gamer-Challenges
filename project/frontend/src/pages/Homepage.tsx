import { Button } from "@/components/ui";
import { useGames } from "@/hooks/useGame";
import { Skeleton } from "@/components/ui/skeleton";
import { IGame } from "@/@types/IGame";

const HomePage = () => {
  const { data, isLoading } = useGames();
  const games: IGame[] = Array.isArray(data) ? data : [];

  console.log(games);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="navbar bg-base-100 shadow">
        <div className="flex-1 text-xl font-bold">Gamer Challenge</div>
        <div className="flex gap-2">
          <input className="ghost" placeholder="Rechercher" />
          <Button className="ghost">Se connecter</Button>
          <Button className="default">S’inscrire</Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 space-y-12 bg-gradient-to-r from-[#12243E]  to-[#314C6B]">
        {/* Joueurs populaires */}
        <section>
          <div className="flex flex-col items-center m-10">
            <h2 className="text-6xl mb-4 text-white text-center">Voici les <b>joueurs</b> les plus <b>populaires</b> de la semaine</h2>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="card bg-base-200 shadow p-4 h-50">
              <h3 className="gamer-name">1</h3>
              <h3 className="gamer-name font-semibold">John Doe</h3>
            </div>
            <div className="card bg-base-200 shadow p-4 h-50">
              <h3 className="gamer-name">2</h3>
              <h3 className="gamer-name font-semibold">Jane Doe</h3>
            </div>
            <div className="card bg-base-200 shadow p-4 h-50">
              <h3 className="gamer-name">3</h3>
              <h3 className="gamer-name font-semibold">John Doe</h3>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Button className="btn btn-primary center mt-10">Voir tous les joueurs</Button>
          </div>
        </section>

        {/* Challenges populaires */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Les challenges les plus populaires</h2>
          <hr />
          <div className="grid grid-cols-1 gap-6 w-full">
            {Array.from({ length: 3 }).map((_, index) => (
              <div className="grid grid-cols-2 gap-6 w-full" key={index}>
                <div className="w-full card bg-base-200 shadow-lg p-4 h-50">
                </div>
                <div className="w-full">
                  <h3 className="text-lg font-semibold mb-2">LOREM IPSUM</h3>
                  <p className="text-sm text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet faucibus justo.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Jeux populaires */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Les jeux les plus populaires</h2>
          <hr />
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="card bg-base-200 shadow p-4 h-64 flex items-center justify-center">
                <h3 className="text-lg font-semibold">Jeu {index + 1}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Derniers challenges */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Les derniers challenges</h2>
          <hr />
          <div className="grid grid-cols-1 gap-6 w-full">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="card bg-base-200 shadow p-4 h-50">
                <h3 className="text-lg font-semibold mb-2">LOREM IPSUM</h3>
                <p className="text-sm text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet faucibus justo.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Derniers jeux */}
        <section className="h-full">
          <h2 className="text-2xl font-bold mb-4">Les derniers jeux</h2>
          <hr />
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {isLoading ? (
              Array.from({ length: 4 }).map((_, index) => (
                <Skeleton key={index} className="h-32 w-full" />
              ))
            ) : (
              games.slice(0, 4).map((game) => (
                <div
                  style={{ backgroundImage: `url(${game?.image_url})`, backgroundSize: "cover" }}
                  key={game.game_id}
                  className="card bg-base-200  shadow-lg p-4 h-64 flex items-center justify-center"
                >
                  <h3 className="text-lg font-semibold">{game.title}</h3>
                </div>
              ))
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="p-4 bg-base-200 text-center text-sm text-muted-foreground">
        © 2025 Gamer Challenge. Tous droits réservés.
      </footer>
    </div>
  );
}

export default HomePage;