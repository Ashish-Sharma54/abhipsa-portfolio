"use client";

import { motion } from "framer-motion";

export default function AIAvatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div className="relative flex h-28 w-28 items-center justify-center">
      {/* Outer rotating ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full border-2 border-dashed border-gold/30"
      />

      {/* Middle pulsing ring */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-2 rounded-full border border-gold/20"
      />

      {/* Inner glow ring */}
      <motion.div
        animate={{ scale: [1.05, 1.12, 1.05] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-3 rounded-full bg-gradient-to-br from-gold/10 to-transparent blur-sm"
      />

      {/* Floating particles */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.sin(i) * 10, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
          className="absolute"
          style={{
            top: `${15 + Math.sin(i * 1.2) * 40}%`,
            left: `${15 + Math.cos(i * 1.2) * 40}%`,
          }}
        >
          <div className="h-1 w-1 rounded-full bg-gold/60" />
        </motion.div>
      ))}

      {/* Orbit dots */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={`orbit-${i}`}
          animate={{ rotate: 360 }}
          transition={{
            duration: 8 + i * 4,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0"
        >
          <div
            className="absolute h-2 w-2 rounded-full bg-gold shadow-lg shadow-gold/30"
            style={{
              top: "-4px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
        </motion.div>
      ))}

      {/* Avatar image from DiceBear */}
      <motion.div
        whileHover={{ scale: 1.08 }}
        className="relative z-10 h-20 w-20 overflow-hidden rounded-full border-2 border-gold/40 shadow-2xl shadow-gold/10"
      >
        <img
          src={`https://api.dicebear.com/9.x/adventurer/svg?seed=Abhipsa&backgroundColor=0d1b2a&hairColor=fbbf24&eyesColor=fbbf24&mouth=wideSmile,smile,lilSmile`}
          alt={name}
          className="h-full w-full object-cover"
        />
        {/* Shimmer overlay */}
        <motion.div
          animate={{
            backgroundPosition: ["200% 0", "-200% 0"],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          style={{ backgroundSize: "200% 100%" }}
        />
      </motion.div>

      {/* Online indicator */}
      <div className="absolute bottom-1 right-1 z-20">
        <div className="relative">
          <div className="h-4 w-4 rounded-full border-2 border-card bg-emerald-500" />
          <motion.div
            animate={{ scale: [1, 2, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full bg-emerald-500"
          />
        </div>
      </div>
    </div>
  );
}
