import PlayerCard from "./PlayerCard";
import { useBestPlayers } from "@/hooks/usePlayer";

function PopularPlayers() {
  const { data: players } = useBestPlayers();

  return (
    <>
      <div className="flex flex-col items-center m-10">
        <h2 className="text-4xl mb-4 text-white text-center">
          Voici les <b>joueurs</b> les plus <b>populaires</b> de la plateforme !
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:justify-center lg:grid-cols-3 gap-6 w-fit mx-auto">
        {players?.slice(0, 3).map((player, index) => (
          <PlayerCard
            user={player.user}
            key={player.user.user_id}
            votes={player.votes}
            index={index}
          />
        ))}
      </div>
    </>
  );
}

export default PopularPlayers;
