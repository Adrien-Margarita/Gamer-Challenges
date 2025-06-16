import { Navbar } from "@/components/homepage";
import { useGame } from "@/hooks/useGame";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";

export default function GameDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data: game, isLoading, isError } = useGame(id ?? "");

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

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-[#12243E] to-[#314C6B]">
      {/* Navbar */}
      <Navbar />
      <main className="flex-1 p-4 space-y-12">
        {isLoading && <p className="text-center">Chargement...</p>}

        {!isLoading && game && (
          <>
            <h2 className="text-2xl font-bold">{game.title}</h2>
            <p>{game.description}</p>
            {game.image_url && (
              <img
                src={game.image_url}
                alt={game.title}
                className="rounded-lg shadow-lg w-full max-w-md"
              />
            )}
          </>
        )}

        {!isLoading && !game && !isError && (
          <p className="text-center text-red-500">Jeu introuvable</p>
        )}
      </main>
    </div>
  );
}
