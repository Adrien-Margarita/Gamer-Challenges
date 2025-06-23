import PlayerCard from "./PlayerCard";
import { useBestPlayers } from "@/hooks/usePlayer";

function PopularPlayers() {
  const { data: players } = useBestPlayers();


  return (
    <>
      <div className="flex flex-col items-center m-10">
        <h2 className="text-4xl mb-20 text-white text-center">
          Voici les <b>joueurs</b> les plus <b>populaires</b> de la plateforme !
        </h2>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-end gap-12 mb-10">
      {[1, 0, 2].map((index) => {
        const player = players?.[index];
        if (!player) return null;
        return (
        <PlayerCard
          user={player.user}
          key={player.user.user_id}
          votes={player.votes}
          index={index}
        />
    );
  })}
</div>

    </>
  );
}

export default PopularPlayers;
