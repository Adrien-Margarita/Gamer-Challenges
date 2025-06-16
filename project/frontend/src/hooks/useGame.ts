import gameService from "@/services/game.service";
import { useQuery } from "@tanstack/react-query";
import { IGame } from "@/@types/IGame";

const gameKeys = {
  all: ["games"] as const,
};

/**
 * React Query hook to fetch all games.
 *
 * @returns {UseQueryResult<IGame[], Error>} Query result containing the list of games.
 *
 * @example
 * const { data: games, isLoading } = useGames();
 */
export function useGames() {
  return useQuery<IGame[]>({
    queryKey: gameKeys.all,
    queryFn: gameService.getAllGames,
  });
}

/**
 * React Query hook to fetch the most popular games based on challenge votes.
 *
 * @returns {UseQueryResult<IGame[], Error>} Query result containing the list of popular games.
 *
 * @example
 * const { data: popularGames, isLoading } = useMostPopularGames();
 */
export function useMostPopularGames() {
  return useQuery({
    queryKey: [...gameKeys.all, "popular"],
    queryFn: gameService.getMostPopularGames,
  });
}

/**
 * React Query hook to fetch a single game by its ID.
 *
 * @param {string} id - The ID of the game to retrieve.
 * @returns {UseQueryResult<IGame, Error>} Query result containing the game data.
 *
 * @example
 * const { data: game, isLoading } = useGame('game-uuid');
 */
export function useGame(id: string) {
  return useQuery({
    queryKey: [...gameKeys.all, id],
    queryFn: () => gameService.getGame(id),
  });
}
