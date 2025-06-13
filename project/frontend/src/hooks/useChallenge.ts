import challengeService from "@/services/challenge.service";
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { IChallenge } from "@/@types/IChallenge";



const challengeKeys = {
  all: ['challenges'] as const,
};


export function useChallenges() {
  return useQuery<IChallenge[]>({
    queryKey: challengeKeys.all,
    queryFn: challengeService.getAllChallenges,
  });
}


export function useChallenge(id: string) {
  return useQuery({
    queryKey: [...challengeKeys.all, id],
    queryFn: () => challengeService.getChallenge(id),
  });
}


export function useCreateChallenge() {
    const queryClient = useQueryClient();
  
    return useMutation({
      mutationFn: challengeService.createChallenge,
      onSuccess: () => {
        // Invalider le cache pour recharger la liste des votes
        queryClient.invalidateQueries({ queryKey: challengeKeys.all });
      },
    });
  }

  export function useUpdateChallenge() {
    const queryClient = useQueryClient();
  
    return useMutation({
      mutationFn: ({ challenge_id,challenge  }: { challenge_id: string, challenge : IChallenge}) =>
        challengeService.updateChallenge(challenge_id, challenge),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: challengeKeys.all });
      },
    });
  }

export function useDeleteChallenge() {
    const queryClient = useQueryClient();
  
    return useMutation({
      mutationFn: ({ challenge_id,  }: { challenge_id: string}) =>
        challengeService.deleteChallenge(challenge_id),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: challengeKeys.all });
      },
    });
  }

export default challengeKeys