import { useGames } from "@/hooks/useGame";
import { Skeleton } from "../ui"
import { IGame } from "@/@types/IGame";

function LastGames() {
  const { data, isLoading } = useGames();
  const games: IGame[] = Array.isArray(data) ? data : [];

  return (
    <section className="h-full">
      <h2 className="text-2xl font-bold mb-4">Les derniers jeux</h2>
      <hr />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {isLoading ? (
          Array.from({ length: 4 }).map((_, index) => (
            <Skeleton key={index} className="h-32 w-full" />
          ))
        ) : (
          games.slice(0, 4).map((game) => (
            <div
              style={{ backgroundImage: `url(${game?.image_url})`, backgroundSize: "cover" }}
              key={game.game_id}
              className="card bg-base-200  shadow-lg p-4 h-64 flex items-center justify-center"
            >
              <h3 className="text-lg font-semibold">{game.title}</h3>
            </div>
          ))
        )}
      </div>
    </section>
  )
}

export default LastGames