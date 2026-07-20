"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award, Trophy, MapPin, Sparkles } from "lucide-react";
import { siteConfig, education, researchInterests, achievements } from "@/data/portfolio";

export default function AboutTab() {
  return (
    <div className="h-full overflow-y-auto">
      <div className="mx-auto max-w-5xl px-6 py-10 lg:px-12">
        {/* Hero Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative mb-10 overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-navy-light to-navy p-8 text-white shadow-2xl shadow-navy/30"
        >
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-gold/5 blur-3xl" />
          <div className="absolute right-8 top-8 opacity-20">
            <Sparkles className="h-24 w-24 text-gold" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold/80">
              About Me
            </p>
            <h2 className="mb-3 text-3xl font-bold sm:text-4xl">
              <span className="text-gold">{siteConfig.fullName}</span>
            </h2>
            <p className="mb-4 max-w-xl text-sm leading-relaxed text-white/70">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-2 text-sm text-white/50">
              <MapPin className="h-4 w-4 text-gold" />
              <span>{siteConfig.location}</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-10"
        >
          <div className="mb-5 flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-gold" />
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">
              Education
            </h3>
          </div>
          <div className="space-y-3">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ x: 4 }}
                className="group rounded-2xl border border-border bg-card p-5 transition-all hover:border-gold/20 hover:shadow-lg hover:shadow-navy/5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-sm font-bold">{edu.degree}</h4>
                    <p className="text-sm text-gold font-medium">{edu.institution}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{edu.location}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="rounded-full bg-gold/10 px-2.5 py-1 text-[10px] font-bold text-gold">
                      {edu.period}
                    </span>
                    <p className="mt-1 text-xs font-semibold text-foreground">{edu.detail}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Research Interests */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-10"
        >
          <div className="mb-5 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-gold" />
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">
              Research Interests
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {researchInterests.map((interest, i) => (
              <motion.span
                key={interest}
                initial={{ opacity: 0, scale: 0.7, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.6 + i * 0.05, type: "spring" }}
                whileHover={{ scale: 1.05, rotate: 1, y: -2 }}
                className="cursor-default rounded-full border border-gold/20 bg-gold/5 px-4 py-2 text-xs font-medium text-gold transition-all hover:bg-gold/10 hover:border-gold/40 hover:shadow-lg hover:shadow-gold/10"
              >
                {interest}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="mb-5 flex items-center gap-2">
            <Trophy className="h-5 w-5 text-gold" />
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">
              Achievements
            </h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {achievements.map((ach, i) => (
              <motion.div
                key={ach.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-4 transition-all hover:border-gold/20 hover:shadow-lg hover:shadow-navy/5"
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gold/5 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-2 flex items-center gap-2">
                    <Award className="h-4 w-4 text-gold" />
                    <span className="text-[10px] text-muted-foreground">{ach.date}</span>
                  </div>
                  <h4 className="text-sm font-bold">{ach.title}</h4>
                  <p className="mt-1 text-xs text-muted-foreground">{ach.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
