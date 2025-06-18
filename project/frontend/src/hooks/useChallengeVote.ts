import challengeVoteService from "@/services/challengeVote.service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { IChallengeVote } from "@/@types/IChallengeVote";


const challengeVoteKeys = {
  all: ["challengeVote"] as const,
  byChallenge: (id: string) => [...challengeVoteKeys.all, id] as const,
};


/**
 * Récupère tous les votes sur les challenges.
 */
export function useChallengeVotes() {
  return useQuery<IChallengeVote[]>({
    queryKey: challengeVoteKeys.all,
    queryFn: challengeVoteService.getAllChallengeVotes,
  });
}


/**
 * Récupère les votes pour un challenge spécifique.
 * @param challenge_id string
 */
export function useChallengeVote(challenge_id: string) {
  return useQuery({
    queryKey: challengeVoteKeys.byChallenge(challenge_id),
    queryFn: () => challengeVoteService.getChallengeVotes(challenge_id),
    enabled: !!challenge_id,
  });
}


/**
 * Crée un vote pour un challenge donné.
 */
export function useCreateChallengeVote() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: challengeVoteService.createChallengeVote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: challengeVoteKeys.all });
    },
  });
}

/**
 * Supprime le vote de l'utilisateur connecté pour un challenge.
 */
export function useDeleteChallengeVote() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (challenge_id: string) =>
      challengeVoteService.deleteChallengeVote(challenge_id),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: challengeVoteKeys.all });
    },
  });
}
