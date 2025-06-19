import playerService from "@/services/playerService";
import { useQuery } from "@tanstack/react-query";
import { IUser } from "@/@types/IAuth";
import { IMostVotedPlayer } from "@/@types/IPlayer";
import { IChallengeWithRelations } from "@/@types/IChallenge";
import { IParticipationWithRelations } from "@/@types/IParticipation";

export const playerKeys = {
  all: ["players"] as const,
  challenges: (id: string) => [...playerKeys.all, "challenges", id] as const,
  participations: (id: string) => [...playerKeys.all, "participations", id] as const,
};

export function usePlayers() {
  return useQuery<IUser[]>({
    queryKey: playerKeys.all,
    queryFn: playerService.getAllPlayers,
  });
}

export function useBestPlayers() {
  return useQuery<IMostVotedPlayer[]>({
    queryKey: playerKeys.all,
    queryFn: playerService.getMostVotedPlayers,
  });
}

export function usePlayer(id: string) {
  return useQuery({
    queryKey: [...playerKeys.all, id],
    queryFn: () => playerService.getPlayer(id),
  });
}

export function usePlayerChallenges(id: string) {
  return useQuery<IChallengeWithRelations[]>({
    queryKey: playerKeys.challenges(id),
    queryFn: () => playerService.getPlayerChallenges(id),
    enabled: !!id,
  });
}

export function usePlayerParticipations(id: string) {
  return useQuery<IParticipationWithRelations[]>({
    queryKey: playerKeys.participations(id),
    queryFn: () => playerService.getPlayerParticipations(id),
    enabled: !!id,
  });
}

