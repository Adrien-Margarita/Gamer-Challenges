import { Navbar } from "@/components/homepage";
import { Skeleton } from "@/components/ui";
import { useChallengesByGameId } from "@/hooks/useGame";
import { useGame } from "@/hooks/useGame";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";

export default function GameDetailPage() {
  const [visibleCount, setVisibleCount] = useState(8);

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data: game, isLoading, isError } = useGame(id ?? "");
  const { data: challenges } = useChallengesByGameId(id ?? "");

  useEffect(() => {
    if (isError && !isLoading) {
      navigate("/games");
    }
  }, [isError, isLoading, navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#12243E] to-[#314C6B]">
        <p className="text-white text-sm">Chargement du jeu...</p>
      </div>
    );
  }

  if (!game) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#12243E] to-[#314C6B]">
        <p className="text-red-400 text-sm">Jeu introuvable.</p>
      </div>
    );
  }

  if (!challenges) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#12243E] to-[#314C6B]">
        <p className="text-red-400 text-sm">Aucun challenge trouvé.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-[#12243E] to-[#314C6B]">
      {/* Navbar */}
      <Navbar />
      <main className="flex-1 p-4 space-y-12">
        <section>
          {isLoading && <p className="text-center">Chargement...</p>}

          {!isLoading && game && (
            <>
              {/* Image et description du jeu */}
              <div className="relative w-full max-w-7xl mx-auto mb-12">
                <img
                  src={game.image_url}
                  alt={game.title}
                  className="w-full h-[500px] object-cover rounded-xl shadow-xl"
                />
                <div className="absolute bottom-4 left-6 px-4 py-2 rounded-xl backdrop-blur-sm bg-base-200 ">
                  <h2 className="text-2xl font-semibold">{game.title}</h2>
                  <p className="text-sm text-gray-300">{game.description}</p>
                </div>
              </div>
            </>
          )}

          {!isLoading && !game && !isError && (
            <p className="text-center text-red-500">Jeu introuvable</p>
          )}
        </section>
        <section>
          {isLoading && challenges && !isError
            ? Array.from({ length: 8 }).map((_, index) => (
                <Skeleton key={index} className="h-32 w-full" />
              ))
            : challenges?.slice(0, visibleCount).map((challenge) => (
                <Link
                  to={`/challenges/${challenge.challenge_id}`}
                  key={challenge.challenge_id}
                >
                  <div
                    key={challenge.challenge_id}
                    className="card bg-base-200 shadow p-4 flex flex-col justify-between"
                  >
                    <h3 className="text-lg font-semibold mb-2">
                      {challenge.title}
                    </h3>
                    <img
                      src={challenge.image_url}
                      alt={challenge.title}
                      className="w-full h-[180px] object-cover rounded-lg border-1 border-primary mt-auto"
                    />
                    <div className="text-right text-2xl font-bold">
                      {/* TODO: Affichage des nombres de challenge par jeux*/}
                      {
                        [28, 12, 38, 52, 15, 3, 9, 44][
                          Number(challenge.challenge_id)
                        ]
                      }
                    </div>
                  </div>
                </Link>
              ))}
          <div className="flex justify-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 8)}
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/80 transition"
            >
              Voir plus
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
