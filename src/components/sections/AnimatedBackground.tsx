"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

function seededRandom(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 233280;
  return x - Math.floor(x);
}

export default function AnimatedBackground() {
  const particles = useMemo(
    () =>
      Array.from({ length: 40 }, (_, i) => ({
        id: i,
        x: seededRandom(i * 7 + 1) * 100,
        y: seededRandom(i * 13 + 2) * 100,
        size: seededRandom(i * 19 + 3) * 3 + 1,
        duration: seededRandom(i * 23 + 4) * 15 + 10,
        delay: seededRandom(i * 29 + 5) * 5,
      })),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        animate={{
          x: [0, 150, -80, 0],
          y: [0, -100, 80, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full blur-[120px] opacity-30"
        style={{ background: "var(--primary)" }}
      />
      <motion.div
        animate={{
          x: [0, -100, 120, 0],
          y: [0, 80, -60, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-32 top-1/2 h-[400px] w-[400px] rounded-full blur-[100px] opacity-20"
        style={{ background: "var(--accent)" }}
      />
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 100, 0],
        }}
        transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/3 bottom-0 h-[350px] w-[350px] rounded-full blur-[100px] opacity-15"
        style={{ background: "var(--secondary)" }}
      />

      {particles.map((p) => (
        <motion.div
          key={p.id}
          animate={{
            y: [0, -40, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: "var(--accent)",
          }}
        />
      ))}

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />
    </div>
  );
}
