"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import { Users, Music } from "lucide-react";
import { extracurricular } from "@/data/portfolio";

const categoryIcons: Record<string, string> = {
  "Languages": "💻",
  "Frameworks": "🛠️",
  "ML / AI Libraries": "🤖",
  "Research": "🔬",
  "Tools": "⚙️",
};

export default function SkillsTab() {
  return (
    <div className="h-full overflow-y-auto">
      <div className="mx-auto max-w-5xl px-6 py-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-gold">
            Skills & Activities
          </p>
          <h2 className="mb-2 text-2xl font-bold sm:text-3xl">
            <span className="gold-text">Toolkit</span> & Beyond
          </h2>
          <p className="mb-10 max-w-lg text-sm text-muted-foreground">
            Technical skills, tools, and extracurricular involvement.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 25, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.1 + i * 0.08, type: "spring", damping: 15 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 transition-all hover:shadow-xl hover:shadow-navy/5 hover:border-gold/20"
            >
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gold/5 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-3 flex items-center gap-2">
                  <span className="text-base">{categoryIcons[category]}</span>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gold">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((skill, j) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.7 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + i * 0.05 + j * 0.02 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="cursor-default rounded-lg bg-muted px-2.5 py-1 text-[11px] font-medium text-foreground transition-all hover:bg-navy hover:text-gold hover:shadow-lg hover:shadow-navy/20"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extracurricular */}
        <div>
          <h3 className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gold">
            <Music className="h-4 w-4" />
            Extracurricular Activities
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {extracurricular.map((act, i) => (
              <motion.div
                key={act.role + act.organization}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.08 }}
                whileHover={{ x: 4 }}
                className="group rounded-2xl border border-border bg-card p-4 transition-all hover:border-gold/20 hover:shadow-lg hover:shadow-navy/5"
              >
                <div className="mb-1.5 flex items-center gap-2">
                  <Users className="h-3.5 w-3.5 text-gold" />
                  <span className="text-[10px] font-bold text-gold">{act.period}</span>
                </div>
                <h4 className="text-sm font-bold">{act.role}</h4>
                <p className="text-xs font-medium text-gold">{act.organization}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{act.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
