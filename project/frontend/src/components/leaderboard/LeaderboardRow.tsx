import type { IMostVotedPlayer } from "@/@types/IPlayer";
import { motion } from "motion/react";

type Props = {
    player: IMostVotedPlayer;
    rank: number;
};

export default function LeaderboardRow({ player, rank }: Props) {
    return (
      <tr
        className="border-b border-gray-700 hover:bg-base-300 transition">
        <motion.td
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.2 ,
            ease: "anticipate",
          }}
          className="px-4 py-3">
            {rank}
          </motion.td>
        <motion.td
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.2 ,
            ease: "easeInOut",
          }}        
          className="px-4 py-3 flex items-center gap-2">
            <img
            src={player.user.avatar_url || "/images/default-avatar.png"}
            alt={player.user.pseudonym}
            className="w-8 h-8 rounded-full object-cover"
            />
          <div>
            <div className="font-semibold">{player.user.pseudonym}</div>
            <div className="text-sm text-gray-400">@{player.user.pseudonym.toLowerCase()}</div>
          </div>
        </motion.td>
        <motion.td
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.2 ,
            ease: "easeIn",
          }}
          className="px-4 py-3">–</motion.td>
        <motion.td
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.2 ,
            ease: "easeOut",
          }}
          className="px-4 py-3">{player.votes.toLocaleString()}</motion.td>
        <motion.td
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.2 ,
            ease: "easeIn",
          }}
          className="px-4 py-3 text-right">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
            {player.votes >= 1 ? 1000 : 0}
          </span>
        </motion.td>
      </tr>
    )
}