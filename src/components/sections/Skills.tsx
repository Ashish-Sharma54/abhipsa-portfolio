"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/data/portfolio";
import SpotlightCard from "../ui/SpotlightCard";

const categoryConfig: Record<string, { icon: string; color: string; gradient: string; accent: string }> = {
  Languages: { icon: "💻", color: "#3B82F6", gradient: "from-blue-500 to-indigo-500", accent: "bg-blue-500/10 text-blue-500" },
  Frameworks: { icon: "🛠", color: "#F59E0B", gradient: "from-amber-500 to-orange-500", accent: "bg-amber-500/10 text-amber-500" },
  "ML / AI Libraries": { icon: "🤖", color: "#10B981", gradient: "from-emerald-500 to-teal-500", accent: "bg-emerald-500/10 text-emerald-500" },
  Research: { icon: "🔬", color: "#8B5CF6", gradient: "from-purple-500 to-pink-500", accent: "bg-purple-500/10 text-purple-500" },
  Tools: { icon: "⚙️", color: "#EF4444", gradient: "from-rose-500 to-red-500", accent: "bg-rose-500/10 text-rose-500" },
};

function seededRandom(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 233280;
  return x - Math.floor(x);
}

function SkillTag({ name, delay, color, seed }: { name: string; delay: number; color: string; seed: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const proficiency = 60 + seededRandom(seed) * 40;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay, type: "spring", damping: 12 }}
      whileHover={{ scale: 1.08, y: -2 }}
      className="group/skill relative"
    >
      <div className="glass cursor-default rounded-lg px-2 py-1 transition-all hover:shadow-lg hover:shadow-primary/10">
        <div className="flex items-center gap-1">
          <div className="h-1 w-1 shrink-0 rounded-full" style={{ background: color }} />
          <span className="text-[11px] font-medium leading-tight">{name}</span>
        </div>
        <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-muted">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: `${proficiency}%` } : {}}
            transition={{ delay: delay + 0.2, duration: 0.6, ease: "easeOut" }}
            className="h-full rounded-full"
            style={{ background: color }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6" ref={ref}>
        <div className="mb-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary"
          >
            Skills
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-sans text-3xl font-bold tracking-tight sm:text-4xl"
          >
            My <span className="gradient-text">Toolkit</span>
          </motion.h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, items], i) => {
            const config = categoryConfig[category] || categoryConfig.Tools;
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: 0.1 + i * 0.1, type: "spring", damping: 15 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <SpotlightCard className="glass gradient-border relative overflow-hidden rounded-2xl p-4 transition-all hover:shadow-2xl hover:shadow-primary/10 h-full">
                  <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${config.gradient} opacity-0 blur-2xl transition-opacity group-hover:opacity-20`} />

                  <div className="relative">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className={`rounded-lg bg-gradient-to-br ${config.gradient} p-1.5 text-white shadow-lg`}>
                          <span className="text-xs">{config.icon}</span>
                        </div>
                        <h3 className="text-[11px] font-bold uppercase tracking-wider text-primary">{category}</h3>
                      </div>
                      <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${config.accent}`}>
                        {items.length}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-1.5">
                      {items.map((skill, j) => (
                        <SkillTag
                          key={skill}
                          name={skill}
                          delay={0.3 + i * 0.08 + j * 0.03}
                          color={config.color}
                          seed={i * 100 + j * 7}
                        />
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
