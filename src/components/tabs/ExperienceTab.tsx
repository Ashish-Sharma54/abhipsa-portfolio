"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, ChevronRight } from "lucide-react";
import { workExperience, projects } from "@/data/portfolio";

export default function ExperienceTab() {
  return (
    <div className="h-full overflow-y-auto">
      <div className="mx-auto max-w-5xl px-6 py-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-gold">
            Experience
          </p>
          <h2 className="mb-2 text-2xl font-bold sm:text-3xl">
            Work & <span className="gold-text">Projects</span>
          </h2>
          <p className="mb-10 max-w-lg text-sm text-muted-foreground">
            Research internships and key projects in biomedical AI.
          </p>
        </motion.div>

        {/* Work Experience */}
        <div className="mb-12">
          <h3 className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gold">
            <Briefcase className="h-4 w-4" />
            Work Experience
          </h3>
          <div className="relative">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute left-6 top-0 bottom-0 w-0.5 origin-top bg-gradient-to-b from-gold via-navy-light to-transparent"
            />
            <div className="space-y-6">
              {workExperience.map((exp, i) => (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.15, type: "spring", damping: 15 }}
                  className="relative pl-16"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.15, type: "spring" }}
                    className="absolute left-4 top-5"
                  >
                    <div className="relative">
                      <div className="h-5 w-5 rounded-full border-2 border-gold bg-navy shadow-lg shadow-gold/20" />
                      <div className="absolute inset-0 h-5 w-5 rounded-full border border-gold/30 animate-pulse-ring" />
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 6 }}
                    className="group rounded-2xl border border-border bg-card p-5 transition-all hover:border-gold/20 hover:shadow-xl hover:shadow-navy/5"
                  >
                    <div className="absolute top-0 left-0 h-0.5 w-0 bg-gradient-to-r from-gold to-amber-500 transition-all duration-500 group-hover:w-full" />
                    <div className="mb-2 flex items-center gap-2 flex-wrap">
                      <span className="rounded-full bg-gold/10 px-3 py-1 text-[10px] font-bold text-gold">
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                        <MapPin className="h-3 w-3" />{exp.location}
                      </span>
                    </div>
                    <h4 className="text-base font-bold">{exp.role}</h4>
                    <p className="mb-2 text-sm font-medium text-gold">{exp.company}</p>
                    <p className="mb-3 text-sm font-medium text-foreground">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.highlights.map((h, j) => (
                        <li key={j} className="flex gap-2 text-xs leading-relaxed text-muted-foreground">
                          <ChevronRight className="mt-0.5 h-3 w-3 shrink-0 text-gold" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Projects */}
        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-gold">
            Key Projects
          </h3>
          <div className="space-y-4">
            {projects.map((proj, i) => (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                whileHover={{ x: 4 }}
                className="group rounded-2xl border border-border bg-card p-5 transition-all hover:border-gold/20 hover:shadow-xl hover:shadow-navy/5"
              >
                <h4 className="mb-2 text-sm font-bold">{proj.title}</h4>
                <p className="mb-2 text-xs leading-relaxed text-muted-foreground">{proj.description}</p>
                <p className="mb-3 text-xs font-medium text-gold">{proj.results}</p>
                <div className="flex flex-wrap gap-1.5">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-navy/5 px-2.5 py-1 text-[10px] font-semibold text-navy dark:bg-gold/10 dark:text-gold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
