"use client";

import { useScrollProgress } from "@/hooks/useAnimations";
import { motion } from "framer-motion";

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed left-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-primary via-secondary to-accent"
      style={{ scaleX: progress }}
    />
  );
}
