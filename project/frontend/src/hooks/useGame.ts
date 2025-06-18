import gameService from "@/services/game.service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { IGame, IGameFormData } from "@/@types/IGame";
import { IChallenge } from "@/@types/IChallenge";
import { logger } from "@/utils/logger";

const gameKeys = {
  all: ["games"] as const,
};

/**
 * React Query hook to fetch all games.
 */
export function useGames() {
  return useQuery<IGame[]>({
    queryKey: gameKeys.all,
    queryFn: async () => {
      const games = await gameService.getAllGames();
      logger("🎮 useGames → jeux récupérés", games);
      return games;
    },
  });
}

/**
 * Hook pour récupérer les challenges d'un jeu par ID.
 */
export function useChallengesByGameId(id: string) {
  return useQuery<IChallenge[]>({
    queryKey: ["challenges", id],
    queryFn: async () => {
      const challenges = await gameService.getChallengesByGameId(id);
      logger(`⚔️ useChallengesByGameId → ${id}`, challenges);
      return challenges;
    },
  });
}

/**
 * Hook pour récupérer les jeux populaires.
 */
export function useMostPopularGames() {
  return useQuery<IGame[]>({
    queryKey: [...gameKeys.all, "popular"],
    queryFn: async () => {
      const popularGames = await gameService.getMostPopularGames();
      logger("🔥 useMostPopularGames → jeux populaires", popularGames);
      return popularGames;
    },
  });
}

/**
 * Hook pour récupérer un jeu par son ID.
 */
export function useGame(id: string) {
  return useQuery<IGame>({
    queryKey: [...gameKeys.all, id],
    queryFn: async () => {
      const game = await gameService.getGame(id);
      logger(`🎯 useGame → jeu ${id}`, game);
      return game;
    },
  });
}

/**
 * Hook pour créer un nouveau jeu.
 */
export function useCreateGame() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newGame: IGameFormData) => {
      logger("🛠️ useCreateGame → création du jeu", newGame);
      const created = await gameService.createGame(newGame);
      logger("✅ useCreateGame → jeu créé", created);
      return created;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: gameKeys.all });
      logger("🔄 useCreateGame → réactualisation des jeux");
    },
    onError: (error) => {
      logger("❌ useCreateGame → erreur création jeu", error);
    },
  });
}
