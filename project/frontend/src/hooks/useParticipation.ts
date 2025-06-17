import participationService from "@/services/participation.service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  IParticipation,
  IParticipationFormData,
} from "@/@types/IParticipation";

const participationKeys = {
  all: ["participation"] as const,
};

export function useParticipations() {
  return useQuery<IParticipation[]>({
    queryKey: participationKeys.all,
    queryFn: participationService.getAllParticipations,
  });
}

export function usePlayer(id: string) {
  return useQuery({
    queryKey: [...participationKeys.all, id],
    queryFn: () => participationService.getParticipation(id),
  });
}

export function useCreateParticipation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (
      formData: IParticipationFormData & { mediaType: "image" | "video" }
    ) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { mediaType, ...payload } = formData;
      return participationService.createParticipation(payload);
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["participations", variables.challenge_id],
      });
    },
  });
}

export function useUpdateParticipation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      participation_id,
      participation,
    }: {
      participation_id: string;
      participation: IParticipation;
    }) =>
      participationService.updateParticipation(participation_id, participation),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: participationKeys.all });
    },
  });
}

export function useDeleteParticipation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ participation_id }: { participation_id: string }) =>
      participationService.deleteParticipation(participation_id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: participationKeys.all });
    },
  });
}

export default participationKeys;
