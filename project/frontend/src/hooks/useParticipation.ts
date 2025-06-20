import participationService from "@/services/participation.service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  IParticipation,
  IParticipationEditData,
  IParticipationFormData,
} from "@/@types/IParticipation";
import { playerKeys } from "./usePlayer";

const participationKeys = {
  all: ["participation"] as const,
  byUser: (userId: string) =>
    [...participationKeys.all, "by-user", userId] as const,
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

// export function useUpdateParticipation(userId?: string) {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: (
//       formData: (Omit<IParticipationEditData, "participation_id"> & { mediaType?: "image" | "video" }) & { participation_id: string }
//     ) => {
//       const { mediaType, participation_id, ...payload } = formData; // Exclusion de mediaType
//       return participationService.updateParticipation(participation_id, payload);
//     },
//     onSuccess: (_, variables) => {
//       if (userId) {
//         queryClient.invalidateQueries({
//           queryKey: playerKeys.participations(userId),
//         });
//       }
//     },
//   });
// }

export function useUpdateParticipation(userId?: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      participation_id,
      participation,
    }: {
      participation_id: string;
      participation: Omit<IParticipationEditData, "participation_id"> & {
        mediaType: "image" | "video";
      };
    }) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { mediaType, ...participationData } = participation;
      return participationService.updateParticipation(
        participation_id,
        participationData
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: participationKeys.all });
      if (userId) {
        queryClient.invalidateQueries({
          queryKey: playerKeys.participations(userId),
        });
      }
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
