import LeaderboardRow from "./LeaderboardRow";
import type { IMostVotedPlayer } from "@/@types/IPlayer";

type Props = {
  players: IMostVotedPlayer[];
  offset?: number;
};

export default function LeaderboardTable({ players, offset = 0 }: Props) {
  return (
    <div className="max-w-5xl mx-auto p-4 space-y-6">
      {/* Table classique visible uniquement en sm+ */}
      <div className="hidden sm:block overflow-x-auto rounded-xl shadow-lg bg-base-200">
        <table className="w-full text-left table-auto">
          <thead className="bg-base-300 text-muted">
            <tr>
              <th className="px-4 py-3">Rank</th>
              <th className="px-4 py-3">User name</th>
              <th className="px-4 py-3">Followers</th>
              <th className="px-4 py-3">Points</th>
              <th className="px-4 py-3 text-right">Reward</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, i) => (
              <LeaderboardRow
                key={player.user.user_id}
                player={player}
                rank={i + 1 + offset}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Version mobile en cartes */}
      <div className="sm:hidden space-y-4">
        {players.map((player, i) => (
          <div
            key={player.user.user_id}
            className="bg-base-200 p-4 rounded-lg shadow-lg space-y-2"
          >
            <div>
            <img
            src={player.user.avatar_url || "/images/default-avatar.png"}
            alt={player.user.pseudonym}
            className="w-16 h-16 rounded-full object-cover"
            />
            </div>
            <div className="text-primary font-semibold text-lg">
              #{i + 1 + offset} - {player.user.pseudonym}
            </div>
            <div className="text-sm">
              <strong>Followers:</strong> -
            </div>
            <div className="text-sm">
              <strong>Points:</strong> {player.votes.toLocaleString()}
            </div>
            <div className="text-sm text-right font-bold text-secondary">
              Reward: {player.votes >= 1 ? 1000 : 0}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
