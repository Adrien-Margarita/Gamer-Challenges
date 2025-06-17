import { IGame } from "@/@types/IGame";
import Footer from "@/components/Footer";
import GameCard from "@/components/GameCard";
import { Navbar } from "@/components/homepage";
import { Skeleton } from "@/components/ui";
import { useGames, useMostPopularGames } from "@/hooks/useGame";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router";

export default function GamesPage() {
  const [visibleCount, setVisibleCount] = useState(8);
  const [currentSlide, setCurrentSlide] = useState(0);

  const { data, isLoading } = useGames();
  const games: IGame[] = Array.isArray(data) ? data : [];

  const { data: popularGamesData } = useMostPopularGames();

  // Vérification que popularGamesData est un tableau
  // et utilisation de useMemo pour éviter les recalculs inutiles
  const popularGames: IGame[] = useMemo(
    () => (Array.isArray(popularGamesData) ? popularGamesData?.slice(0, 4) : []),
    [popularGamesData]
  );

  // Timer auto slide
  useEffect(() => {
    if (popularGames.length === 0) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % popularGames.length);
    }, 5000); // 5 secondes

    return () => clearInterval(timer);
  }, [popularGames]);


  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 p-4 bg-gradient-to-r from-[#12243E] to-[#314C6B]">
        <h2 className="text-2xl font-bold mb-4">Les jeux les plus populaires</h2>
        <hr />
        <p className="text-lg text-muted-foreground mb-4">
          Découvrez les jeux les plus populaires de la plateforme.
        </p>
        <p className="text-lg text-muted-foreground mb-8">
          Cliquez sur un jeu pour voir les détails et les challenges associés.
        </p>
        {/* Section des jeux populaires */}
        {/* Carousel */}
        {popularGames.length > 0  && (
          <div className="relative w-full mx-auto mb-12 rounded-xl overflow-hidden shadow-xl border border-primary">
            <Link to={`/games/${popularGames[currentSlide].game_id}`}>
              <img
                src={popularGames[currentSlide].image_url}
                alt={popularGames[currentSlide].title}
                className="w-full h-[500px] object-cover transition duration-300 ease-in-out filter hover:grayscale hover:contrast-100"
              />
            </Link>

            {/* Overlay titre */}
            <div className="absolute bottom-4 left-4 px-4 py-2 rounded-xl backdrop-blur-sm bg-base-200/80">
              <h3 className="text-2xl font-semibold">
                {popularGames[currentSlide].title}
              </h3>
            </div>

            {/* Points de navigation */}
            <div className="absolute items-center top-10 left-[41%] lg:left-[48%] flex gap-2">
              {popularGames.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentSlide ? "bg-secondary" : "bg-base-100 opacity-50"
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Section des jeux */}
        <h2 className="text-2xl font-bold mb-4">Tous les jeux</h2>
        <hr />
        <p className="text-lg text-muted-foreground mb-8">
          Explorez tous les jeux disponibles sur la plateforme.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {isLoading
            ? Array.from({ length: 8 }).map((_, index) => (
                <Skeleton key={index} className="h-32 w-full" />
              ))
            : games.slice(0, visibleCount).map((game) => (
                <Link to={`/game/${game.game_id}`} key={game.game_id}>
                  <GameCard game={game} />
                </Link>
              ))}
        </div>

        <div className="flex justify-center mt-6 mb-6">
          <button
            onClick={() => setVisibleCount((prev) => prev + 8)}
            className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/80 transition"
          >
            Voir plus
          </button>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
