import { Button } from "@/components/ui";

const HomePage = () => {
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
          <h2 className="text-2xl font-bold mb-4">Voici les joueurs les plus populaires de la semaine</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="card bg-base-200 shadow p-4">
              <h3 className="gamer-name">1</h3>
              <h3 className="gamer-name font-semibold">John Doe</h3>
            </div>
            <div className="card bg-base-200 shadow p-4">
              <h3 className="gamer-name">2</h3>
              <h3 className="gamer-name font-semibold">Jane Doe</h3>
            </div>
            <div className="card bg-base-200 shadow p-4">
              <h3 className="gamer-name">3</h3>
              <h3 className="gamer-name font-semibold">John Doe</h3>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Button className="center mt-4">Voir tous les joueurs</Button>
          </div>
        </section>

        {/* Challenges populaires */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Les challenges les plus populaires</h2>
          <hr />
          <div className="grid grid-cols-1 gap-4 w-full">
            {Array.from({ length: 4 }).map((_, index) => (
              <div className="grid grid-cols-2 gap-4 w-full" key={index}>
                <div key={index} className="w-full card bg-base-200 shadow-lg p-4">
                </div>
                <div key={index} className="w-full">
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="card bg-base-200 shadow p-4 h-32 flex items-center justify-center">
                <h3 className="text-lg font-semibold">Jeu {index + 1}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Derniers challenges */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Les derniers challenges</h2>
          <hr />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="card bg-base-200 shadow p-4">
                <h3 className="text-lg font-semibold mb-2">LOREM IPSUM</h3>
                <p className="text-sm text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet faucibus justo.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Derniers jeux */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Les derniers jeux</h2>
          <hr />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="card bg-base-200 shadow p-4 h-32 flex items-center justify-center">
                <h3 className="text-lg font-semibold">Jeu {index + 5}</h3>
              </div>
            ))}
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
