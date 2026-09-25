"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, ChevronRight } from "lucide-react";
import { workExperience } from "@/data/portfolio";
import SpotlightCard from "../ui/SpotlightCard";

export default function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6" ref={ref}>
        <div className="mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary"
          >
            Experience
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-sans text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Work <span className="gradient-text">Experience</span>
          </motion.h2>
        </div>

        <div className="relative">
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute left-6 top-0 bottom-0 w-0.5 origin-top bg-gradient-to-b from-primary via-secondary to-transparent sm:left-8"
          />

          <div className="space-y-8">
            {workExperience.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.2, type: "spring", damping: 15 }}
                className="relative pl-16 sm:pl-20"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.3 + i * 0.2, type: "spring" }}
                  className="absolute left-4 top-6 sm:left-6"
                >
                  <div className="relative">
                    <div className="h-5 w-5 rounded-full border-2 border-primary bg-background shadow-lg shadow-primary/20" />
                    <motion.div
                      animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 rounded-full border border-primary/30"
                    />
                  </div>
                </motion.div>

                <SpotlightCard className="group glass gradient-border relative overflow-hidden rounded-2xl p-6 transition-all hover:shadow-2xl hover:shadow-primary/5">
                  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary to-accent opacity-0 transition-opacity group-hover:opacity-100" />

                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold text-primary">
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      {exp.location}
                    </span>
                  </div>

                  <h4 className="font-sans text-base font-bold">{exp.role}</h4>
                  <p className="mb-2 text-sm font-medium text-primary">{exp.company}</p>
                  <p className="mb-3 text-sm text-muted-foreground">{exp.description}</p>

                  <ul className="space-y-2">
                    {exp.highlights.map((h, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + i * 0.2 + j * 0.1 }}
                        className="flex gap-2 text-xs leading-relaxed text-muted-foreground"
                      >
                        <ChevronRight className="mt-0.5 h-3 w-3 shrink-0 text-primary" />
                        <span>{h}</span>
                      </motion.li>
                    ))}
                  </ul>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
