"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Palette, Users, Calendar, Trophy } from "lucide-react";
import { extracurricular } from "@/data/portfolio";
import Section from "../ui/Section";
import SpotlightCard from "../ui/SpotlightCard";

const iconMap = [Palette, Users, Calendar, Trophy];

export default function Extracurricular() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section id="extracurricular" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6" ref={ref}>
        <div className="mb-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary"
          >
            Beyond Research
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-sans text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Extracurricular <span className="gradient-text">Activities</span>
          </motion.h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {extracurricular.map((activity, i) => {
            const Icon = iconMap[i % iconMap.length];
            return (
              <motion.div
                key={activity.role + activity.organization}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <SpotlightCard className="glass gradient-border group h-full rounded-2xl p-5 transition-all hover:shadow-xl hover:shadow-primary/10">
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      className="shrink-0 rounded-xl bg-primary/10 p-2.5 text-primary"
                    >
                      <Icon className="h-4 w-4" />
                    </motion.div>
                    <div className="min-w-0 flex-1">
                      <div className="mb-1.5 flex items-center gap-2">
                        <span className="shrink-0 rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold text-primary">
                          {activity.period}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold">{activity.role}</h4>
                      <p className="text-xs font-semibold text-primary">{activity.organization}</p>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
