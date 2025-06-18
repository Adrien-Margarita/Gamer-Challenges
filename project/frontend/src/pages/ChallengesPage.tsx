import { IChallenge } from "@/@types/IChallenge";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/homepage";
import SearchBar from "@/components/SearchBar";
import { Skeleton } from "@/components/ui";
import { VoteButtonChallenge } from "@/components/ui/VoteButtonChallenge";
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

  const filteredChallenges = useMemo(
    () => 
      challenges.filter((challenge) => 
        challenge.title.toLowerCase().includes(search.toLowerCase())
    ), [challenges, search]
  );

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
        <h2 className="text-2xl font-bold">Les challenges les plus populaires</h2>

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
        <SearchBar  value= {search} onChange={setSearch} placeholder="Rechercher un challenge ..." />

        {/* Section des challenges */}
        <h2 className="text-2xl font-bold">Tous les challenges</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {isLoading
            ? Array.from({ length: 8 }).map((_, index) => (
                <Skeleton key={index} className="h-32 w-full" />
              ))
            : filteredChallenges.slice(0, visibleCount).map((challenge) => (
                  <div className="card bg-base-200 shadow p-4 flex flex-col justify-between h-full">
                    <Link to={`/challenges/${challenge.challenge_id}`} key={challenge.challenge_id}>
                    <h3 className="text-lg font-semibold mb-2">{challenge.title}</h3>
                    <img
                      src={challenge.image_url}
                      alt={challenge.title}
                      className="w-full h-[180px] object-cover rounded-lg border border-primary mt-auto"
                    />
                    </Link>
                    <div className="flex justify-between items-center mt-2">
                      <div>
                        <VoteButtonChallenge challengeId={challenge.challenge_id} />
                      </div>
                      <div className="text-right text-2xl font-bold">
                        {/* TODO: Affichage des nombres de challenge par jeu */}
                      </div>
                    </div>
                  </div>
              ))}
        </div>

        <div className="flex justify-center">
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
