import { IChallenge } from "@/@types/IChallenge";
import ChallengeCard from "@/components/ChallengeCard";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/homepage";
import SearchBar from "@/components/SearchBar";
import { Skeleton } from "@/components/ui";
import { useChallenges, useMostPopularChallenges } from "@/hooks/useChallenge";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router";

export default function ChallengesPage() {
  const [visibleCount, setVisibleCount] = useState(8);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [search, setSearch] = useState("");
  const { data, isLoading } = useChallenges();

  const challenges = useMemo(() => {
    return Array.isArray(data) ? data : [];
  }, [data]);

  const { data: popularChallengesData } = useMostPopularChallenges();

  // Vérification que popularChallengesData est un tableau
  // et utilisation de useMemo pour éviter les recalculs inutiles
  const popularChallenges: IChallenge[] = useMemo(
    () => (Array.isArray(popularChallengesData) ? popularChallengesData : []),
    [popularChallengesData]
  );
  console.log("Popular Challenges:", popularChallenges);
  
  const filteredChallenges = useMemo(
    () => 
      challenges.filter((challenge) => 
        challenge.title.toLowerCase().includes(search.toLowerCase())
    ), [challenges, search]
  );

  const showMoreButton = challenges.length > 8 && visibleCount < challenges.length;

  // Timer auto slide
  useEffect(() => {
    if (popularChallenges.length === 0) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % popularChallenges.length);
    }, 5000); // 5 secondes

    return () => clearInterval(timer);
  }, [popularChallenges]);


  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 p-4 space-y-12 bg-gradient-to-r from-[#12243E] to-[#314C6B]">
      <h2 className="text-2xl font-semibold mb-4">Les challenges les plus populaires</h2>
        <hr />
        <p className="text-lg text-muted-foreground mb-4">
          Découvrez les challenges les plus populaires de la plateforme.
        </p>
        <p className="text-lg text-muted-foreground mb-8">
          Cliquez sur un challenge pour voir les détails et les participations associées.
        </p>

        {/* Carousel */}
        {popularChallenges.length > 0  && (
          <div className="relative w-full mx-auto mb-12 rounded-xl overflow-hidden shadow-xl">
            <Link to={`/games/${popularChallenges[currentSlide].game_id}`}>
              <img
                src={popularChallenges[currentSlide].image_url}
                alt={popularChallenges[currentSlide].title}
                className="w-full h-[500px] object-cover"
              />
            </Link>

            {/* Overlay titre */}
            <div className="absolute bottom-4 left-4 px-4 py-2 rounded-xl backdrop-blur-sm bg-base-200/80">
              <h3 className="text-2xl font-semibold">
                {popularChallenges[currentSlide].title}
              </h3>
            </div>

            {/* Points de navigation */}
            <div className="absolute items-center top-10 left-[41%] lg:left-[48%] flex gap-2">
              {popularChallenges.slice(0, 4).map((_, index) => (
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

        {/* Section des challenges */}
        <div className="flex mt-8 mb-4 justify-center">
          <h2 className="text-2xl font-semibold w-full mt-4">Tous les challenges</h2>
          <SearchBar  value={search} onChange={setSearch} placeholder="Rechercher un challenge..." />
        </div>
        <hr />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {isLoading
            ? Array.from({ length: 8 }).map((_, index) => (
                <Skeleton key={index} className="h-32 w-full" />
              ))
            : filteredChallenges.slice(0, visibleCount).map((challenge) => (
                <ChallengeCard key={challenge.challenge_id} challenge={challenge} />
          ))}
        </div>
        {showMoreButton && (
          <div className="flex justify-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 8)}
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/80 transition"
            >
              Voir plus
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
