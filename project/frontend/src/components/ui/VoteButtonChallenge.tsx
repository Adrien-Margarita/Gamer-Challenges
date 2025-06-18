import { useState, useEffect } from "react";
import Icon from "@mdi/react";
import { mdiTrophyOutline, mdiTrophy } from '@mdi/js';
import clsx from "clsx";
import { useAuth } from "@/hooks/useAuth";
import {
  useChallengeVote,
  useCreateChallengeVote,
  useDeleteChallengeVote,
} from "@/hooks/useChallengeVote";

interface VoteButtonChallengeProps {
  challengeId: string;
}

export function VoteButtonChallenge({ challengeId }: VoteButtonChallengeProps) {
  const { auth } = useAuth();
  const userId = auth?.user_id;

  const { data: votes = [], isLoading: loadingVotes } = useChallengeVote(challengeId);
  const createVote = useCreateChallengeVote();
  const deleteVote = useDeleteChallengeVote();

  const [voted, setVoted] = useState(false);

  // Vérifie si l'utilisateur connecté a voté
  useEffect(() => {
    if (userId && votes.length > 0) {
      const hasVoted = votes.some((vote) => vote.user_id === userId);
      setVoted(hasVoted);
    }
  }, [votes, userId]);

  const handleToggleVote = async () => {
    if (!userId) return;

    try {
      if (voted) {
        await deleteVote.mutateAsync(challengeId);
      } else {
        await createVote.mutateAsync(challengeId);
      }
      setVoted((prev) => !prev);
    } catch (err) {
      console.error("Erreur lors du vote :", err);
    }
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
      <Icon path={voted ? mdiTrophy : mdiTrophyOutline} size={1} />
      <span>{votes.length}</span>
    </button>
  );
}
