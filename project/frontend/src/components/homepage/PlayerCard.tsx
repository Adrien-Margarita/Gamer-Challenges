import type { IMostVotedPlayer } from "@/@types/IPlayer";
import { motion } from "motion/react";

import StarExplosion from "../StarExplosion";

export default function PlayerCard({ user, index }: IMostVotedPlayer & { index: number }) {
  const isCenter = index === 0;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.4 * (index + 1),
        ease: "easeInOut",
      }}
      key={user.user_id}
      className={`relative card bg-base-200 p-6 flex flex-col items-center shadow-lg transition-transform duration-300 ${
        isCenter ? "scale-110 z-10 -translate-y-6 gold-glow" : "scale-95"
      }`}
    >
      {isCenter && <StarExplosion />}

      <img
        className={`mb-4 rounded-full border-4 border-primary shadow-lg ${
          isCenter ? "w-32 h-32" : "w-24 h-24"
        } transition-all duration-500`}
        src={user.avatar_url}
        alt={user.pseudonym}
      />
      <div className="flex items-center justify-center gap-4">
        <h2 className="badge badge-primary rounded-full h-8 w-8 font-semibold">{index + 1}</h2>
        <h1 className={`text-xl font-light ${isCenter ? "text-2xl font-semibold" : ""}`}>
          {user.pseudonym}
        </h1>
      </div>
    </motion.div>
  );
}

