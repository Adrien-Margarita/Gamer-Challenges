import type { IMostVotedPlayer } from "@/@types/IPlayer";
import { motion } from "motion/react";

import StarExplosion from "../StarExplosion";
import { mdiMedal, mdiMedalOutline, mdiTrophyOutline } from "@mdi/js";
import Icon from "@mdi/react";

export default function PlayerCard({ user, index }: IMostVotedPlayer & { index: number }) {
  const isCenter = index === 0;
  const getIcon = () => {
    if (index === 0) return mdiMedal;
    if (index === 1) return mdiMedalOutline;
    return mdiTrophyOutline;
  };
  
  const getIconColor = () => {
    if (index === 0) return "text-success";
    if (index === 1) return "text-warning";
    return "text-error";
  };
  
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
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-2">
          <h2
            className={`!text-black badge rounded-full h-8 w-8 font-bold text-xl ${
              index === 0 ? "badge-success"
              : index === 1 ? "badge-warning"
              : "badge-error"
            }`}
          >
            {index + 1}
          </h2>
          <Icon path={getIcon()} size={1} className={getIconColor()} />
        </div>

        <h1 className={`text-xl font-light ${isCenter ? "text-2xl font-semibold" : ""}`}>
          {user.pseudonym}
        </h1>
      </div>

    </motion.div>
  );
}

