"use client";

import { motion } from "framer-motion";

export default function AIAvatar({ name }: { name: string }) {
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
          transition={{ duration: 8 + i * 4, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        >
          <div
            className="absolute h-2 w-2 rounded-full bg-gold shadow-lg shadow-gold/30"
            style={{ top: "-4px", left: "50%", transform: "translateX(-50%)" }}
          />
        </motion.div>
      ))}

      {/* CSS Cute Girl Avatar */}
      <motion.div
        whileHover={{ scale: 1.08 }}
        className="relative z-10 h-20 w-20 overflow-hidden rounded-full border-2 border-gold/40 shadow-2xl shadow-gold/10 bg-gradient-to-br from-navy-light to-navy"
      >
        <svg viewBox="0 0 100 100" className="h-full w-full">
          {/* Background circle */}
          <circle cx="50" cy="50" r="50" fill="#1b2d4a" />

          {/* Hair (back) */}
          <ellipse cx="50" cy="38" rx="30" ry="28" fill="#f59e0b" />

          {/* Face */}
          <circle cx="50" cy="45" r="22" fill="#fde68a" />

          {/* Hair (front bangs) */}
          <path d="M28 35 Q35 18 50 16 Q65 18 72 35 Q68 28 50 25 Q32 28 28 35Z" fill="#f59e0b" />

          {/* Hair sides */}
          <ellipse cx="28" cy="42" rx="6" ry="12" fill="#f59e0b" />
          <ellipse cx="72" cy="42" rx="6" ry="12" fill="#f59e0b" />

          {/* Left eye */}
          <ellipse cx="42" cy="44" rx="3.5" ry="4" fill="#0d1b2a" />
          <circle cx="41" cy="42.5" r="1.2" fill="white" />

          {/* Right eye */}
          <ellipse cx="58" cy="44" rx="3.5" ry="4" fill="#0d1b2a" />
          <circle cx="57" cy="42.5" r="1.2" fill="white" />

          {/* Eyebrows */}
          <path d="M37 38 Q42 36 46 38" stroke="#b45309" strokeWidth="1.2" fill="none" strokeLinecap="round" />
          <path d="M54 38 Q58 36 63 38" stroke="#b45309" strokeWidth="1.2" fill="none" strokeLinecap="round" />

          {/* Blush */}
          <circle cx="36" cy="50" r="4" fill="#f9a8d4" opacity="0.5" />
          <circle cx="64" cy="50" r="4" fill="#f9a8d4" opacity="0.5" />

          {/* Cute smile */}
          <path d="M44 52 Q50 58 56 52" stroke="#b45309" strokeWidth="1.5" fill="none" strokeLinecap="round" />

          {/* Nose */}
          <circle cx="50" cy="48" r="1" fill="#d97706" />

          {/* Glasses (researcher look) */}
          <circle cx="42" cy="44" r="7" fill="none" stroke="#fbbf24" strokeWidth="1.5" />
          <circle cx="58" cy="44" r="7" fill="none" stroke="#fbbf24" strokeWidth="1.5" />
          <line x1="49" y1="44" x2="51" y2="44" stroke="#fbbf24" strokeWidth="1.5" />
          <line x1="28" y1="42" x2="35" y2="44" stroke="#fbbf24" strokeWidth="1.2" />
          <line x1="72" y1="42" x2="65" y2="44" stroke="#fbbf24" strokeWidth="1.2" />
        </svg>

        {/* Shimmer overlay */}
        <motion.div
          animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
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
