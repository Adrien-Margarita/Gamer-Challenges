import { useState, useEffect } from "react";
import Icon from "@mdi/react";
import { mdiThumbUpOutline, mdiThumbUp } from "@mdi/js";
import clsx from "clsx";
import { useAuth } from "@/hooks/useAuth";
import {
  useCreateParticipationVote,
  useDeleteParticipationVote,
  useParticipationVote,
} from "@/hooks/useParticipationVote";

interface VoteButtonParticipationProps {
  participationId: string;
}

export function VoteButtonParticipation({ participationId }: VoteButtonParticipationProps) {
  const { auth } = useAuth(); // On récupère l'user connecté
  const userId = auth?.user_id;

  const { data: votes = [], isLoading: loadingVotes } = useParticipationVote(participationId);
  const createVote = useCreateParticipationVote();
  const deleteVote = useDeleteParticipationVote();

  const [voted, setVoted] = useState(false);

  // Check si le user connecté a déjà voté
  useEffect(() => {
    if (userId && votes.length > 0) {
      const hasVoted = votes.some((vote) => vote.user_id === userId);
      setVoted(hasVoted);
    }
  }, [votes, userId]);

  const handleToggleVote = async () => {
    if (!userId) return;

    if (voted) {
      await deleteVote.mutateAsync(participationId);
    } else {
      await createVote.mutateAsync(participationId);
    }
    setVoted((prev) => !prev);
  };

  return (
    <button
      onClick={handleToggleVote}
      disabled={createVote.isPending || deleteVote.isPending || loadingVotes}
      className={clsx(
        "flex items-center gap-2 transition",
        voted ? "text-blue-400" : "text-white/60",
        (createVote.isPending || deleteVote.isPending) && "opacity-50 pointer-events-none"
      )}
    >
      <Icon path={voted ? mdiThumbUp : mdiThumbUpOutline} size={1} />
      <span>{votes.length}</span>
    </button>
  );
}
