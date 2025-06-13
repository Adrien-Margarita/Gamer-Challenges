import participationVoteService from '@/services/participationVote.service';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { IParticipationVote } from "@/@types/IParticipationVote";


const participationVoteKeys = {
  all: ['participationVote'] as const,
};


export function useParticipationVotes() {
  return useQuery<IParticipationVote[]>({
    queryKey: participationVoteKeys.all,
    queryFn: participationVoteService.getAllParticipationsVote,
  });
}


export function useParticipationVote(id: string) {
  return useQuery({
    queryKey: [...participationVoteKeys.all, id],
    queryFn: () => participationVoteService.getParticipationVote(id),
  });
}

export function useCreateParticipationVote() {
const queryClient = useQueryClient();

  return useMutation({
    mutationFn: participationVoteService.createParticipationVote,
    onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: participationVoteKeys.all })
    }
  });
}

export function useDeleteParticipationVote() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ participation_id, user_id }: { participation_id: string; user_id: string }) =>
      participationVoteService.deleteParticipationVote(participation_id, user_id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: participationVoteKeys.all });
    },
  });
}