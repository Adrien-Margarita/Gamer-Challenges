import playerService from "@/services/playerService";
import { useQuery } from '@tanstack/react-query';
import { IUser } from "@/@types/IAuth";


const playerKeys = {
  all: ['players'] as const,
};


export function usePlayers() {
  return useQuery<IUser[]>({
    queryKey: playerKeys.all,
    queryFn: playerService.getAllPlayers,
  });
}


export function usePlayer(id: string) {
  return useQuery({
    queryKey: [...playerKeys.all, id],
    queryFn: () => playerService.getPlayer(id),
  });
}