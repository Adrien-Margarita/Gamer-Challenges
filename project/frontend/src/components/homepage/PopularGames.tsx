import { useMostPopularGames } from "@/hooks/useGame";
import { Skeleton } from "../ui"
import { IGame } from "@/@types/IGame";

function PopularGames() {
  const { data, isLoading } = useMostPopularGames();
  const games: IGame[] = Array.isArray(data) ? data : [];

  return (
    <section className="h-full">
      <h2 className="text-2xl font-bold mb-4">Les jeux les plus populaires</h2>
      <hr />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {isLoading ? (
          Array.from({ length: 4 }).map((_, index) => (
            <Skeleton key={index} className="h-32 w-full" />
          ))
        ) : (
          games.slice(0, 4).map((game) => (
            <div className="flex flex-col" key={game.game_id}>
              <p className="text-lg font-semibold text-white mb-4">{game.title}</p>
              <div
                style={{ backgroundImage: `url(${game?.image_url})`, backgroundSize: "cover", backgroundPosition: "center" }}
                className="card bg-base-200  shadow-lg p-4 h-64 flex items-center justify-center border-1 border-primary"
              >
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  )
}

export default PopularGames