"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ExternalLink, Download, Cpu, Brain, Eye } from "lucide-react";
import { siteConfig } from "@/data/portfolio";

function seededRandom(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 233280;
  return x - Math.floor(x);
}

const roles = [
  "Biomedical Engineering Researcher",
  "Physiological Signal Analyst",
  "Deep Learning for Healthcare",
  "Multimodal Learning Researcher",
  "VLM Researcher",
];

const floatingCards = [
  { label: "Python", icon: "🐍", x: -60, y: 40, delay: 0, color: "#3776AB" },
  { label: "PyTorch", icon: "🔥", x: 60, y: -20, delay: 0.2, color: "#EE4C2C" },
  { label: "TensorFlow", icon: "🧠", x: -40, y: -50, delay: 0.4, color: "#FF6F00" },
  { label: "Signal Processing", icon: "📊", x: 80, y: 60, delay: 0.6, color: "#00D9FF" },
  { label: "Medical Imaging", icon: "🏥", x: -80, y: -30, delay: 0.8, color: "#5B5FFF" },
  { label: "VLMs", icon: "👁", x: 40, y: 80, delay: 1, color: "#7C3AED" },
];

const mobileStats = [
  { icon: Brain, label: "Biomedical AI", color: "from-purple-500 to-pink-500" },
  { icon: Eye, label: "VLMs", color: "from-blue-500 to-cyan-500" },
  { icon: Cpu, label: "Signal Processing", color: "from-amber-500 to-orange-500" },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const cardAnims = useMemo(
    () =>
      floatingCards.map((_, i) => ({
        y: -10 + seededRandom(i * 7 + 100) * 20,
        rotate: seededRandom(i * 13 + 200) * 4 - 2,
        duration: 4 + seededRandom(i * 19 + 300) * 2,
      })),
    []
  );

  const typeEffect = useCallback(() => {
    const currentRole = roles[roleIndex];
    if (!isDeleting) {
      if (text.length < currentRole.length) {
        setText(currentRole.slice(0, text.length + 1));
      } else {
        setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (text.length > 0) {
        setText(text.slice(0, -1));
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }
  }, [text, isDeleting, roleIndex]);

  useEffect(() => {
    const speed = isDeleting ? 40 : 80;
    const timer = setTimeout(typeEffect, speed);
    return () => clearTimeout(timer);
  }, [typeEffect, isDeleting]);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20">
      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 lg:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <span className="text-xs font-semibold text-primary">Available for Research</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-sans text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">{siteConfig.fullName.split(" ")[0]}</span>
            <br />
            <span className="text-foreground/60">{siteConfig.fullName.split(" ").slice(1).join(" ")}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-3 h-8"
          >
            <span className="font-sans text-lg font-medium text-primary/80">{text}</span>
            <span
              className="ml-0.5 inline-block h-5 w-0.5 bg-primary align-middle"
              style={{ animation: "typewriter-cursor 1s step-end infinite" }}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 flex flex-wrap gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(91,95,255,0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white shadow-lg shadow-primary/25 transition-all"
            >
              View Projects
              <ExternalLink className="h-4 w-4" />
            </motion.a>
            <motion.a
              href={siteConfig.resumeUrl}
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="gradient-border inline-flex items-center gap-2 rounded-xl bg-card px-6 py-3 text-sm font-bold text-foreground transition-all hover:shadow-lg"
            >
              <Download className="h-4 w-4" />
              Resume
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="gradient-border inline-flex items-center gap-2 rounded-xl bg-card px-6 py-3 text-sm font-bold text-foreground transition-all hover:shadow-lg"
            >
              Contact
            </motion.a>
          </motion.div>

          {/* Mobile stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-6 flex flex-wrap gap-3 lg:hidden"
          >
            {mobileStats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="glass flex items-center gap-2 rounded-xl px-4 py-2.5"
                >
                  <div className={`rounded-lg bg-gradient-to-br ${stat.color} p-1.5 text-white`}>
                    <Icon className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-xs font-semibold">{stat.label}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Desktop floating cards */}
        <div className="relative hidden h-[420px] lg:block">
          {floatingCards.map((card, idx) => {
            const anim = cardAnims[idx];
            return (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, scale: 0.5, x: card.x * 2, y: card.y * 2 }}
                animate={{ opacity: 1, scale: 1, x: card.x, y: card.y }}
                transition={{ delay: 0.8 + card.delay, type: "spring", damping: 12 }}
                className="absolute left-1/2 top-1/2"
              >
                <motion.div
                  animate={{
                    y: [0, anim.y, 0],
                    rotate: [0, anim.rotate, 0],
                  }}
                  transition={{
                    duration: anim.duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: card.delay,
                  }}
                  whileHover={{ scale: 1.15, y: -5 }}
                  className="glass spotlight-card cursor-default rounded-2xl px-5 py-3.5 shadow-lg shadow-black/5 dark:shadow-black/20"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{card.icon}</span>
                    <div>
                      <span className="text-sm font-semibold text-foreground">{card.label}</span>
                      <div className="mt-0.5 h-1 w-full rounded-full bg-muted">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ delay: 1.5 + card.delay, duration: 1 }}
                          className="h-full rounded-full"
                          style={{ background: card.color }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-primary/15"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-accent/8"
          />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
        >
          <span className="text-xs font-medium">Scroll Down</span>
          <ArrowDown className="h-4 w-4" />
        </motion.a>
      </motion.div>
    </section>
  );
}
