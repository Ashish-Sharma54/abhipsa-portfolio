"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Trophy, Globe, BadgeCheck } from "lucide-react";
import { achievements } from "@/data/portfolio";
import { useCountUp } from "@/hooks/useAnimations";
import Section from "../ui/Section";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  trophy: Trophy,
  globe: Globe,
  certificate: BadgeCheck,
};

const counterData = [
  { label: "Publications", value: 8, suffix: "" },
  { label: "Research Projects", value: 5, suffix: "" },
  { label: "GATE AIR", value: 36, suffix: "" },
  { label: "CGPA", value: 9.14, suffix: "", isDecimal: true },
];

function CounterCard({ label, value, suffix, isDecimal }: { label: string; value: number; suffix: string; isDecimal?: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useCountUp(isDecimal ? Math.round(value * 100) : value, 2000, isInView);
  const displayValue = isDecimal ? (count / 100).toFixed(2) : count.toLocaleString();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      whileHover={{ y: -4, scale: 1.03 }}
      className="glass gradient-border relative overflow-hidden rounded-2xl p-6 text-center transition-all hover:shadow-xl hover:shadow-primary/10"
    >
      <div
        className="absolute inset-0 opacity-0 transition-opacity hover:opacity-100"
        style={{
          background: "radial-gradient(circle at center, var(--primary) 0%, transparent 70%)",
          opacity: 0,
        }}
      />
      <div className="relative">
        <p className="font-sans text-3xl font-bold gradient-text sm:text-4xl">
          {displayValue}
          {suffix}
        </p>
        <p className="mt-1 text-xs font-medium text-muted-foreground">{label}</p>
      </div>
    </motion.div>
  );
}

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section id="achievements" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6" ref={ref}>
        <div className="mb-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary"
          >
            Achievements
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-sans text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Awards & <span className="gradient-text">Impact</span>
          </motion.h2>
        </div>

        <div className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {counterData.map((item) => (
            <CounterCard key={item.label} {...item} />
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {achievements.map((ach, i) => {
            const Icon = iconMap[ach.icon] || Award;
            return (
              <motion.div
                key={ach.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group glass gradient-border relative overflow-hidden rounded-2xl p-5 transition-all hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full blur-2xl opacity-0 transition-opacity group-hover:opacity-100" style={{ background: "var(--primary)" }} />
                <div className="relative">
                  <div className="mb-3 flex items-center gap-2">
                    <motion.div whileHover={{ rotate: 15, scale: 1.2 }} className="rounded-xl bg-primary/10 p-2">
                      <Icon className="h-4 w-4 text-primary" />
                    </motion.div>
                    <span className="text-[10px] text-muted-foreground">{ach.date}</span>
                  </div>
                  <h4 className="text-sm font-bold">{ach.title}</h4>
                  <p className="mt-1 text-xs text-muted-foreground">{ach.detail}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
