import playerService from "@/services/playerService";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { IMostVotedPlayer, IUserData } from "@/@types/IPlayer";
import { IChallengeWithRelations } from "@/@types/IChallenge";
import { IParticipationWithRelations } from "@/@types/IParticipation";
import { logger } from "@/utils/logger";

export const playerKeys = {
  all: ["players"] as const,
  challenges: (id: string) => [...playerKeys.all, "challenges", id] as const,
  participations: (id: string) => [...playerKeys.all, "participations", id] as const,
};

export function usePlayers() {
  return useQuery<IUserData[]>({
    queryKey: playerKeys.all,
    queryFn: async () => {
      const data = await playerService.getAllPlayers();
      logger("📋 usePlayers → joueurs récupérés", data);
      return data;
    },
  });
}

export function useBestPlayers() {
  return useQuery<IMostVotedPlayer[]>({
    queryKey: [...playerKeys.all, "most-voted"],
    queryFn: async () => {
      const data = await playerService.getMostVotedPlayers();
      logger("🏆 useBestPlayers → joueurs les mieux notés", data);
      return data;
    },
  });
}

export function usePlayer(id: string) {
  return useQuery({
    queryKey: [...playerKeys.all, id],
    queryFn: async () => {
      const player = await playerService.getPlayer(id);
      logger(`👤 usePlayer → joueur ${id}`, player);
      return player;
    },
    enabled: !!id,
  });
}

export function usePlayerChallenges(id: string) {
  return useQuery<IChallengeWithRelations[]>({
    queryKey: playerKeys.challenges(id),
    queryFn: async () => {
      const challenges = await playerService.getPlayerChallenges(id);
      logger(`⚔️ usePlayerChallenges → challenges du joueur ${id}`, challenges);
      return challenges;
    },
    enabled: !!id,
  });
}

export function usePlayerParticipations(id: string) {
  return useQuery<IParticipationWithRelations[]>({
    queryKey: playerKeys.participations(id),
    queryFn: async () => {
      const participations = await playerService.getPlayerParticipations(id);
      logger(`🎥 usePlayerParticipations → participations du joueur ${id}`, participations);
      return participations;
    },
    enabled: !!id,
  });
}

export function useAccountToDelete() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id }: { id: string }) => {
      logger("🗑️ usePlayerToDelete → suppression du joueur", id);
      const res = await playerService.deleteAccount(id);
      logger("✅ usePlayerToDelete → joueur supprimé", id);
      return res;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: playerKeys.all });
      logger("🔄 usePlayerToDelete → rafraîchissement des joueurs");
    },
    onError: (error) => {
      logger("❌ usePlayerToDelete → erreur suppression joueur", error);
    },
  });
}

export function useUserToDelete() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id }: { id: string }) => {
      logger("🗑️ usePlayerToDelete → suppression du joueur", id);
      const res = await playerService.deleteUser(id);
      logger("✅ usePlayerToDelete → joueur supprimé", id);
      return res;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: playerKeys.all });
      logger("🔄 usePlayerToDelete → rafraîchissement des joueurs");
    },
    onError: (error) => {
      logger("❌ usePlayerToDelete → erreur suppression joueur", error);
    },
  });
}
