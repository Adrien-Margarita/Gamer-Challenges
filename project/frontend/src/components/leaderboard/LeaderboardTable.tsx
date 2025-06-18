import LeaderboardRow from "./LeaderboardRow";
import type { IMostVotedPlayer } from "@/@types/IPlayer";

type Props = {
    players: IMostVotedPlayer[];
    offset?: number;
};

export default function LeaderboardTable({ players, offset = 0 }: Props) {
    return (
        <div className="max-w-5xl mx-auto p-4">
            <table className="w-full text-left table-auto bg-base-200 rounded-xl shadow-lg overflow-hidden">
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
    )
}