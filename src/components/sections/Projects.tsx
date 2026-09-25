"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Code2, FileText, BarChart3 } from "lucide-react";
import { projects } from "@/data/portfolio";
import { GithubIcon } from "../Icons";
import SpotlightCard from "../ui/SpotlightCard";

const projectIcons = [BarChart3, Code2, FileText, ExternalLink];
const projectColors = [
  "from-blue-500 to-indigo-600",
  "from-emerald-500 to-teal-500",
  "from-purple-500 to-pink-500",
  "from-amber-500 to-orange-500",
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6" ref={ref}>
        <div className="mb-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary"
          >
            Projects
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-sans text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => {
            const Icon = projectIcons[i % projectIcons.length];
            const color = projectColors[i % projectColors.length];
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <SpotlightCard className="glass gradient-border relative overflow-hidden rounded-3xl p-6 sm:p-8 transition-all hover:shadow-2xl hover:shadow-primary/10 h-full">
                  {/* Top visual mockup area */}
                  <div className="mb-5 flex h-32 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-muted/50 to-muted p-4">
                    <div className="relative">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="h-24 w-24 rounded-full border border-dashed border-primary/20"
                      />
                      <div className={`absolute inset-0 flex items-center justify-center rounded-full bg-gradient-to-br ${color} p-[1px]`}>
                        <div className="flex h-full w-full items-center justify-center rounded-full bg-background dark:bg-card">
                          <Icon className="h-8 w-8 text-foreground/60" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <h3 className="mb-3 font-sans text-lg font-bold leading-snug">{project.title}</h3>
                    <p className="mb-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">{project.description}</p>
                    <p className="mb-4 text-sm font-medium text-primary">{project.results}</p>

                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, x: 4 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 rounded-xl bg-primary/10 px-4 py-2 text-xs font-semibold text-primary transition-colors hover:bg-primary/20"
                      >
                        <GithubIcon className="h-3.5 w-3.5" />
                        View on GitHub
                        <ExternalLink className="h-3 w-3" />
                      </motion.a>
                    )}
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
