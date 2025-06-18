import participationVoteService from "@/services/participationVote.service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { IParticipationVote } from "@/@types/IParticipationVote";

const participationVoteKeys = {
  all: ["participationVote"] as const,
  byParticipation: (id: string) => [...participationVoteKeys.all, id] as const,
};

/**
 * Récupère tous les votes.
 */
export function useParticipationVotes() {
  return useQuery<IParticipationVote[]>({
    queryKey: participationVoteKeys.all,
    queryFn: participationVoteService.getAllParticipationsVotes,
  });
}

/**
 * Récupère les votes d’une participation donnée.
 * @param participation_id string
 */
export function useParticipationVote(participation_id: string) {
  return useQuery({
    queryKey: participationVoteKeys.byParticipation(participation_id),
    queryFn: () =>
      participationVoteService.getParticipationVote(participation_id),
    enabled: !!participation_id,
  });
}

/**
 * Ajoute un vote pour la participation 
 */
export function useCreateParticipationVote() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: participationVoteService.createParticipationVote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: participationVoteKeys.all });
    },
  });
}

/**
 * Supprime le vote de l’utilisateur connecté pour la participation.
 */
export function useDeleteParticipationVote() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: participationVoteService.deleteParticipationVote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: participationVoteKeys.all });
    },
  });
}
