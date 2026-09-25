"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/data/portfolio";
import SpotlightCard from "../ui/SpotlightCard";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
<section id="testimonials" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6" ref={ref}>
        <div className="mb-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary"
          >
            Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-sans text-3xl font-bold tracking-tight sm:text-4xl"
          >
            What <span className="gradient-text">People Say</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <SpotlightCard className="glass-strong relative overflow-hidden rounded-3xl p-8 sm:p-12">
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full blur-[80px] opacity-20" style={{ background: "var(--primary)" }} />
            <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full blur-[80px] opacity-15" style={{ background: "var(--accent)" }} />

            <div className="mb-6 flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
              >
                <Quote className="mb-4 h-6 w-6 text-primary/30" />
                <p className="mb-6 text-base leading-relaxed text-foreground/80 sm:text-lg">
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${testimonials[current].color} text-xs font-bold text-white`}>
                    {testimonials[current].initials}
                  </div>
                  <div>
                    <p className="font-sans text-sm font-bold">{testimonials[current].name}</p>
                    <p className="text-xs text-primary">{testimonials[current].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === current ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prev}
                  className="rounded-xl bg-muted p-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <ChevronLeft className="h-4 w-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={next}
                  className="rounded-xl bg-muted p-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <ChevronRight className="h-4 w-4" />
                </motion.button>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
}
