import type { IMostVotedPlayer } from "@/@types/IPlayer";

export default function PlayerCard({
  user_id,
  votes,
  user_pseudonym,
}: IMostVotedPlayer) {
  return (
    <div key={user_id} className="card bg-base-200 shadow p-4 h-50">
      <h3 className="gamer-name">{votes}</h3>
      <h3 className="gamer-name font-semibold">{user_pseudonym}</h3>
    </div>
  );
}
