"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FileText, BookOpen, Mic, ChevronDown } from "lucide-react";
import { publications } from "@/data/portfolio";
import Section from "../ui/Section";

function PubCard({
  pub,
  index,
  type,
}: {
  pub: { title: string; authors: string; journal: string; year: string; tags?: string[] };
  index: number;
  type: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ x: 6, scale: 1.01 }}
      className="group glass gradient-border relative overflow-hidden rounded-2xl p-5 transition-all hover:shadow-xl hover:shadow-primary/5"
    >
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary to-accent opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="flex items-start gap-4">
        <motion.div
          whileHover={{ rotate: -10, scale: 1.1 }}
          className="shrink-0 rounded-xl bg-primary/10 p-2.5 text-primary"
        >
          <FileText className="h-4 w-4" />
        </motion.div>
        <div className="min-w-0 flex-1">
          <div className="mb-1.5 flex items-center gap-2">
            <span className="shrink-0 rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold text-primary">
              {pub.year}
            </span>
            {type === "review" && (
              <span className="rounded-full bg-amber-500/10 px-2.5 py-0.5 text-[10px] font-bold text-amber-500">
                Under Review
              </span>
            )}
          </div>
          <h4 className="text-sm font-bold leading-snug">{pub.title}</h4>
          <p className="mt-1 text-xs font-medium text-primary">{pub.authors}</p>
          <p className="mt-0.5 text-xs italic text-muted-foreground">{pub.journal}</p>
          {pub.tags && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {pub.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ConfCard({
  pub,
  index,
}: {
  pub: { title: string; authors: string; venue: string; year: string };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ x: 4 }}
      className="group glass rounded-xl border border-border p-4 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="mb-1.5 flex items-center gap-2">
        <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold text-primary">{pub.year}</span>
      </div>
      <h4 className="text-sm font-bold leading-snug">{pub.title}</h4>
      <p className="mt-1 text-xs font-medium text-primary">{pub.authors}</p>
      <p className="mt-0.5 text-xs italic text-muted-foreground">{pub.venue}</p>
    </motion.div>
  );
}

function CollapsibleSection({
  title,
  icon: Icon,
  count,
  children,
  defaultOpen = false,
}: {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  count: number;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mb-4 flex w-full items-center justify-between rounded-xl bg-primary/5 px-4 py-3 transition-colors hover:bg-primary/10"
      >
        <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
          <Icon className="h-4 w-4" />
          {title}
          <span className="ml-1 rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-bold text-primary">
            {count}
          </span>
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="h-4 w-4 text-primary" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div className="space-y-4">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Publications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section id="publications" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6" ref={ref}>
        <div className="mb-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary"
          >
            Publications
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-sans text-3xl font-bold tracking-tight sm:text-4xl"
          >
            <span className="gradient-text">Publications</span> & Papers
          </motion.h2>
        </div>

        <CollapsibleSection
          title="Published Works"
          icon={BookOpen}
          count={publications.published.length}
          defaultOpen={true}
        >
          {publications.published.map((pub, i) => (
            <PubCard key={pub.title} pub={pub} index={i} type="journal" />
          ))}
        </CollapsibleSection>

        <CollapsibleSection
          title="Under Review"
          icon={FileText}
          count={publications.underReview.length}
          defaultOpen={true}
        >
          {publications.underReview.map((pub, i) => (
            <PubCard key={pub.title} pub={pub} index={i} type="review" />
          ))}
        </CollapsibleSection>

        <CollapsibleSection
          title="Conference Publications"
          icon={Mic}
          count={publications.conference.length}
          defaultOpen={true}
        >
          {publications.conference.map((pub, i) => (
            <ConfCard key={pub.title} pub={pub} index={i} />
          ))}
        </CollapsibleSection>
      </div>
    </Section>
  );
}
