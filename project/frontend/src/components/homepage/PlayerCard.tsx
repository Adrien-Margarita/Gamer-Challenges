import type { IMostVotedPlayer } from "@/@types/IPlayer";

export default function PlayerCard({
  user,
  votes,
}: IMostVotedPlayer) {
  return (
    <div key={user.user_id} className="card bg-base-200 shadow p-4 h-50">
      <h3 className="gamer-name">{votes}</h3>
      <h3 className="gamer-name font-semibold">{user.pseudonym}</h3>
    </div>
  );
}
