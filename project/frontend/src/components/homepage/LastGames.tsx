import { useLastGames } from "@/hooks/useGame";
import { Skeleton } from "../ui";
import { IGame } from "@/@types/IGame";
import { mdiArrowRightCircleOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { Link } from "react-router";

function LastGames() {
  const { data, isLoading } = useLastGames();
  const games: IGame[] = Array.isArray(data) ? data : [];

  return (
    <section className="h-full">
      <div className="flex items-center justify-between text-secondary">
      <h2 className="text-2xl font-semibold mb-4 mt-4">Les derniers jeux ajoutés</h2>

        <Link className="m-0" to="/games">
          <Icon path={mdiArrowRightCircleOutline} size={1.4} />
        </Link>
      </div>
      <hr />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {isLoading
          ? Array.from({ length: 4 }).map((_, index) => (
              <Skeleton key={index} className="h-32 w-full" />
            ))
          : games.map((game) => (
              <div className="flex flex-col" key={game.game_id}>
                <h2 className="mb-2 h-auto md:h-[60px] lg:max-h-[60px] text-xl lg:mt-4 font-semibold">
                  {game.title}
                </h2>
                <div
                  style={{
                    backgroundImage: `url(${game?.image_url})`,
                    backgroundSize: "cover",
                  }}
                  className="cursor-pointer card shadow-lg p-4 h-64 flex items-center justify-center border-1 border-primary mb-10 object-cover rounded-lg w-full
                          transition-transform transition-filter duration-300 ease-in-out
                          filter hover:grayscale hover:contrast-100"
                draggable="false"
                ></div>
              </div>
            ))}
      </div>
    </section>
  );
}

export default LastGames;