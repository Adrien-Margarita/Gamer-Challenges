import gameService from "@/services/game.service";
import { useQuery } from "@tanstack/react-query";
import { IGame } from "@/@types/IGame";
import { IChallenge } from "@/@types/IChallenge";

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
 * Custom React hook to fetch challenges for a specific game by its ID.
 *
 * @param {string} id - The unique identifier of the game.
 * @returns {import('@tanstack/react-query').UseQueryResult<Challenge[], unknown>}
 * The result of the query containing the list of challenges.
 */
export function useChallengesByGameId(id: string) {
  return useQuery<IChallenge[]>({
    queryKey: ["challenges", id],
    queryFn: () => gameService.getChallengesByGameId(id),
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
