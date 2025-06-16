import { IGame } from "@/@types/IGame";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/homepage";
import { Skeleton } from "@/components/ui";
import { useGames, useMostPopularGames } from "@/hooks/useGame";
import { useState } from "react";
import { Link } from "react-router";

export default function GamesPage() {
  const [visibleCount, setVisibleCount] = useState(8);

  const { data, isLoading } = useGames();
  const games: IGame[] = Array.isArray(data) ? data : [];

  const { data: popularGamesData, } = useMostPopularGames();
  const popularGames: IGame[] = Array.isArray(popularGamesData) ? popularGamesData : [];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 p-4 space-y-12 bg-gradient-to-r from-[#12243E]  to-[#314C6B]">
        <h2 className="text-2xl font-bold">Les jeux les plus populaires</h2>

        {/* Section Jeux les plus populaires */}
        {popularGames.length > 0 && (
          <div className="relative w-full max-w-7xl mx-auto mb-12">
            <Link to={`/games/${popularGames[0].game_id}`} className="block mb-8">
              <img
                src={popularGames[0].image_url}
                alt={popularGames[0].title}
                className="w-full h-[500px] object-cover rounded-xl shadow-xl"
              />
            </Link>
            {/* Flèche de gauche */}
            <button
              className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 rounded-full hover:scale-110 transition-transform"
              onClick={() => { }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="white"
                className="w-10 h-10"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Flèche de droite */}
            <button
              className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 rounded-full hover:scale-110 transition-transform"
              onClick={() => { }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="white"
                className="w-10 h-10"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Title overlay */}
            <div className="absolute bottom-4 left-6 px-4 py-2 rounded-xl backdrop-blur-sm bg-base-200 ">
              <h3 className="text-2xl font-semibold">{popularGames[0].title}</h3>
            </div>
          </div>
        )}

        {/* Section des jeux */}

        <h2 className="text-2xl font-bold"> Tous les jeux</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {isLoading ? (
            Array.from({ length: 8 }).map((_, index) => (
              <Skeleton key={index} className="h-32 w-full" />
            ))
          ) : (
            games.slice(0, visibleCount).map((game) => (
              <Link to={`/games/${game.game_id}`} key={game.game_id}>
                <div key={game.game_id} className="card bg-base-200 shadow p-4 flex flex-col justify-between">
                  <h3 className="text-lg font-semibold mb-2">{game.title}</h3>
                  <img src={game.image_url} alt={game.title} className="w-full h-[180px] object-cover rounded-lg border-1 border-primary mt-auto" />
                  <div className="text-right text-2xl font-bold">
                    {/* TODO: Affichage des nombres de challenge par jeux*/}
                    {[28, 12, 38, 52, 15, 3, 9, 44][Number(game.game_id)]}
                  </div>
                </div>
              </Link>
            ))
          )}

        </div>

        <div className="flex justify-center">
          <button
            onClick={() => setVisibleCount((prev) => prev + 8)}
            className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/80 transition">Voir plus</button>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div >
  );
}
