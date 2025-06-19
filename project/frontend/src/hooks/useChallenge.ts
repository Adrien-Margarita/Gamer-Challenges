import challengeService from "@/services/challenge.service";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { IChallenge, IChallengeEditData } from "@/@types/IChallenge";
import { playerKeys } from "@/hooks/usePlayer";
import { IParticipation } from "@/@types/IParticipation";
const challengeKeys = {
  all: ["challenges"] as const,
  byUser: (userId: string) => [...challengeKeys.all, "by-user", userId] as const,
};

/**
 * React Query hook to fetch all challenges.
 *
 * @returns {UseQueryResult<IChallenge[], Error>} Query result containing the list of challenges.
 *
 * @example
 * const { data: challenges, isLoading } = useChallenges();
 */
export function useChallenges() {
  return useQuery<IChallenge[]>({
    queryKey: challengeKeys.all,
    queryFn: challengeService.getAllChallenges,
  });
}

export function useMostPopularChallenges() {
  return useQuery({
    queryKey: [...challengeKeys.all, "popular"],
    queryFn: challengeService.getMostPopularChallenges,
  });
}

/**
 * React Query hook to fetch the latest created challenges (last 3).
 *
 * @returns {UseQueryResult<ILatestChallenge[], Error>} Query result with the latest challenges.
 *
 * @example
 * const { data: latest, isLoading } = useLastChallenges();
 */
export function useLastChallenges() {
  return useQuery({
    queryKey: [...challengeKeys.all, "latest"],
    queryFn: challengeService.getLastChallenges,
  });
}

/**
 * React Query hook to fetch a single challenge by its ID.
 *
 * @param {string} id - The ID of the challenge to retrieve.
 * @returns {UseQueryResult<IChallenge, Error>} Query result containing the challenge.
 *
 * @example
 * const { data: challenge, isLoading } = useChallenge('uuid');
 */
export function useChallenge(id: string) {
  return useQuery({
    queryKey: [...challengeKeys.all, id],
    queryFn: () => challengeService.getChallenge(id),
  });
}

/**
 * Custom React hook to fetch participations for a specific challenge by its ID.
 *
 * @param {string} id - The unique identifier of the challenge.
 * @returns {import('@tanstack/react-query').UseQueryResult<Participation[], unknown>}
 * The result of the query containing the list of participations.
 */
export function useParticipationsByChallengeId(id: string) {
  return useQuery<IParticipation[]>({
    queryKey: ["participations", id],
    queryFn: () => challengeService.getParticipationsByChallengeId(id),
  });
}

/**
 * React Query hook to create a new challenge.
 *
 * Invalidates the "challenges" cache on success.
 *
 * @returns {UseMutationResult<any, Error, IChallenge>} Mutation result.
 *
 * @example
 * const mutation = useCreateChallenge();
 * mutation.mutate(newChallenge);
 */
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

/**
 * React Query hook to update an existing challenge by its ID.
 *
 * Invalidates the "challenges" cache on success.
 *
 * @returns {UseMutationResult<any, Error, { challenge_id: string, challenge: IChallenge }>} Mutation result.
 *
 * @example
 * const mutation = useUpdateChallenge();
 * mutation.mutate({ challenge_id: 'uuid', challenge: updatedChallenge });
 */
export function useUpdateChallenge(userId?: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      challenge_id,
      challenge,
    }: {
      challenge_id: string;
      challenge: Omit<IChallengeEditData, "challenge_id">;
    }) => challengeService.updateChallenge(challenge_id, challenge),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: challengeKeys.all });
      if (userId) {
        queryClient.invalidateQueries({ queryKey: playerKeys.challenges(userId) });
      }
    },
  });
}

/**
 * React Query hook to delete a challenge by its ID.
 *
 * Invalidates the "challenges" cache on success.
 *
 * @returns {UseMutationResult<any, Error, { challenge_id: string }>} Mutation result.
 *
 * @example
 * const mutation = useDeleteChallenge();
 * mutation.mutate({ challenge_id: 'uuid' });
 */
export function useDeleteChallenge() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ challenge_id }: { challenge_id: string }) =>
      challengeService.deleteChallenge(challenge_id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: challengeKeys.all });
    },
  });
}

export default challengeKeys;
