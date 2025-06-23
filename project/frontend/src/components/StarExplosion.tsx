import { motion } from "motion/react";

const NUM_STARS = 12;

export default function StarExplosion() {
  const stars = Array.from({ length: NUM_STARS });

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {stars.map((_, i) => {
        const angle = (360 / NUM_STARS) * i;
        const radius = 60 + Math.random() * 40;

        return (
          <motion.div
            key={i}
            className="w-2 h-2 bg-yellow-400 rounded-full absolute sparkle"
            initial={{ x: 0, y: 0, opacity: 1, scale: 1, rotate: 0 }}
            animate={{
              x: radius * Math.cos((angle * Math.PI) / 180),
              y: radius * Math.sin((angle * Math.PI) / 180),
              opacity: 0,
              scale: 0.3, // shrink more
            }}
            
            transition={{
              duration: 2.5 + Math.random() * 2,
              ease: "easeOut",
            }}
            style={{ left: "50%", top: "50%" }}
          />

        );
      })}
    </div>
  );
}
