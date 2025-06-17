import { useGames } from "@/hooks/useGame";
import { Skeleton } from "../ui";
import { IGame } from "@/@types/IGame";
import { mdiArrowRightCircleOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { Link } from "react-router";

function LastGames() {
  const { data, isLoading } = useGames();
  const games: IGame[] = Array.isArray(data) ? data : [];

  return (
    <section className="h-full">
      <div className="flex items-center justify-between text-secondary mb-2">
        <h2 className="text-2xl font-bold mt-8">Les derniers jeux</h2>
        <Link className="m-0" to="/games">
          <Icon path={mdiArrowRightCircleOutline} size={1.4} />
        </Link>
      </div>
      <hr />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {isLoading
          ? Array.from({ length: 4 }).map((_, index) => (
              <Skeleton key={index} className="h-32 w-full" />
            ))
          : games.slice(0, 4).map((game) => (
              <div className="flex flex-col" key={game.game_id}>
                <p className="text-lg font-semibold text-white mb-4">
                  {game.title}
                </p>
                <div
                  style={{
                    backgroundImage: `url(${game?.image_url})`,
                    backgroundSize: "cover",
                  }}
                  className="card shadow-lg p-4 h-64 flex items-center justify-center border-1 border-primary mb-10"
                ></div>
              </div>
            ))}
      </div>
    </section>
  );
}

export default LastGames;
