import challengeVoteService from "@/services/challengeVote.service";
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { IChallengeVote } from "@/@types/IChallengeVote";


const challengeVoteKeys = {
  all: ['challengeVote'] as const,
};


export function useChallengeVotes() {
  return useQuery<IChallengeVote[]>({
    queryKey: challengeVoteKeys.all,
    queryFn: challengeVoteService.getAllChallengeVote,
  });
}


export function useChallengeVote(id: string) {
  return useQuery({
    queryKey: [...challengeVoteKeys.all, id],
    queryFn: () => challengeVoteService.getChallengeVote(id),
  });
}

export function useCreateChallengeVote() {
    const queryClient = useQueryClient();
  
    return useMutation({
      mutationFn: challengeVoteService.createChallengeVote,

      onSuccess: () => {
        // Invalider le cache pour recharger la liste des votes
        queryClient.invalidateQueries({ queryKey: challengeVoteKeys.all });
      },
    });
  }

  export function useDeleteChallengeVote() {
    const queryClient = useQueryClient();
  
    return useMutation({
      mutationFn: ({ challenge_id, user_id }: { challenge_id: string; user_id: string }) =>
        challengeVoteService.deletechallenge(challenge_id, user_id),
  
      onSuccess: () => {
        // Invalide la liste globale après suppression
        queryClient.invalidateQueries({ queryKey: challengeVoteKeys.all });
      },
    });
  }