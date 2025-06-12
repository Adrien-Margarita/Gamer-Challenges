import gameService from "@/services/gameService";
import {  useQuery } from '@tanstack/react-query';


const gameKeys = {
    all: ['games'] as const,
  };


export function useGames() {
    return useQuery({
      queryKey: gameKeys.all,
      queryFn: gameService.getAllGames,
    });
  }


export function useGame(id: string) {
    return useQuery({
      queryKey: [...gameKeys.all, id],
      queryFn: () => gameService.getGame(id),
    });
  }