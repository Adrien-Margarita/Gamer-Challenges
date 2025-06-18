import type { IMostVotedPlayer } from "@/@types/IPlayer";

type Props = {
    player: IMostVotedPlayer;
    rank: number;
};

export default function LeaderboardRow({ player, rank }: Props) {
    return (
        <tr className="border-b border-gray-700 hover:bg-base-300 transition">
        <td className="px-4 py-3">{rank}</td>
        <td className="px-4 py-3 flex items-center gap-2">
            <img
            src={player.user.avatar_url || "/images/default-avatar.png"}
            alt={player.user.pseudonym}
            className="w-8 h-8 rounded-full object-cover"
            />
            <div>
            <div className="font-semibold">{player.user.pseudonym}</div>
            <div className="text-sm text-gray-400">@{player.user.pseudonym.toLowerCase()}</div>
            </div>
        </td>
        <td className="px-4 py-3">–</td>
        <td className="px-4 py-3">{player.votes.toLocaleString()}</td>
        <td className="px-4 py-3 text-right">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
            {player.votes >= 1 ? 1000 : 0}
            </span>
        </td>
        </tr>
    )
}