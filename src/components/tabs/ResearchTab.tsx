"use client";

import { motion } from "framer-motion";
import { Brain, Activity, Eye, Stethoscope, Database, Globe } from "lucide-react";
import { researchInterests } from "@/data/portfolio";

const icons = [Brain, Activity, Eye, Stethoscope, Database, Globe];

const colors = [
  "from-blue-500 to-indigo-600",
  "from-amber-500 to-orange-500",
  "from-emerald-500 to-teal-500",
  "from-purple-500 to-pink-500",
  "from-rose-500 to-red-500",
  "from-cyan-500 to-blue-500",
];

const bgColors = [
  "from-blue-500/10 to-indigo-500/10",
  "from-amber-500/10 to-orange-500/10",
  "from-emerald-500/10 to-teal-500/10",
  "from-purple-500/10 to-pink-500/10",
  "from-rose-500/10 to-red-500/10",
  "from-cyan-500/10 to-blue-500/10",
];

export default function ResearchTab() {
  return (
    <div className="h-full overflow-y-auto">
      <div className="mx-auto max-w-5xl px-6 py-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-gold">
            Research
          </p>
          <h2 className="mb-2 text-2xl font-bold sm:text-3xl">
            My <span className="gold-text">Research Areas</span>
          </h2>
          <p className="mb-10 max-w-lg text-sm text-muted-foreground">
            Core domains driving my research in biomedical AI and signal processing.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {researchInterests.map((interest, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={interest}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.1 + i * 0.1, type: "spring", damping: 15 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-2xl hover:shadow-navy/10 hover:border-gold/20"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${bgColors[i]} opacity-0 transition-opacity group-hover:opacity-100`} />

                <div className="relative">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.2 }}
                    className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${colors[i]} p-2.5 text-white shadow-lg`}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.div>

                  <p className="text-sm font-bold leading-relaxed">{interest}</p>
                </div>

                <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${colors[i]} transition-all duration-500 group-hover:w-full`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
