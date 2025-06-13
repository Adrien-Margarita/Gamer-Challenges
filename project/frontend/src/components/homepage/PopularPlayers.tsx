import { Button } from "../ui";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router";
import PlayerCard from "./PlayerCard";
import { useBestPlayers } from "@/hooks/usePlayer";

function PopularPlayers() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { data: players } = useBestPlayers();

  return (
    <section>
      <div className="flex flex-col items-center m-10">
        <h2 className="text-6xl mb-4 text-white text-center">
          Voici les <b>joueurs</b> les plus <b>populaires</b> de la semaine
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {players?.slice(0, 3).map((player) => (
          <PlayerCard
            votes={player.votes}
            user_pseudonym={player.user_pseudonym}
            user_id={player.user_id}
          />
        ))}
      </div>

      {isAuthenticated && (
        <div className="flex flex-col items-center">
          <Button
            className="btn btn-primary center mt-10"
            onClick={() => navigate("/popular-players")}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                navigate(`/popular-players`);
              }
            }}
          >
            Voir tous les joueurs
          </Button>
        </div>
      )}
    </section>
  );
}

export default PopularPlayers;
