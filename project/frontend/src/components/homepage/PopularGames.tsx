import { useMostPopularGames } from "@/hooks/useGame";
import { Skeleton } from "../ui";
import { IGame } from "@/@types/IGame";
import { Icon } from "@mdi/react";
import { mdiArrowRightCircleOutline } from "@mdi/js";
import { Link } from "react-router";

function PopularGames() {
  const { data, isLoading } = useMostPopularGames();
  const games: IGame[] = Array.isArray(data) ? data : [];

  return (
    <section className="h-full">
      <div className="flex items-center justify-between text-secondary">
        <h2 className="text-3xl font-semibold mb-4 mt-8">
          Les jeux les plus populaires
        </h2>
        <Link to="/games">
          <Icon className="mb-0" path={mdiArrowRightCircleOutline} size={1.4} />
        </Link>
      </div>
      <hr />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {isLoading
          ? Array.from({ length: 4 }).map((_, index) => (
              <Skeleton key={index} className="h-32 w-full" />
            ))
          : games.slice(0, 4).map((game) => (
            <Link to={`/games/${game.game_id}`}>
              <div className="flex flex-col" key={game.game_id}>
              <h2 className="mb-2 h-auto md:h-[60px] lg:max-h-[60px] text-xl lg:mt-4 font-semibold">
                  {game.title}
                </h2>
                <div
                  style={{
                    backgroundImage: `url(${game?.image_url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="card bg-base-200 shadow-lg p-4 h-64 flex items-center justify-center object-cover rounded-lg border-1 border-primary w-full
                          transition-transform transition-filter duration-300 ease-in-out
                          filter hover:grayscale hover:contrast-100"
                ></div>
              </div>
              </Link>
            ))}
      </div>
    </section>
  );
}

export default PopularGames;
