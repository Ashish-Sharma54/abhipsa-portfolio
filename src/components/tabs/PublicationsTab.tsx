"use client";

import { motion } from "framer-motion";
import { FileText, ExternalLink, Quote, BookOpen, Mic } from "lucide-react";
import { publications } from "@/data/portfolio";

export default function PublicationsTab() {
  return (
    <div className="h-full overflow-y-auto">
      <div className="mx-auto max-w-5xl px-6 py-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-gold">
            Publications
          </p>
          <h2 className="mb-2 text-2xl font-bold sm:text-3xl">
            <span className="gold-text">Publications</span>
          </h2>
          <p className="mb-10 max-w-lg text-sm text-muted-foreground">
            Published works, under review manuscripts, and conference papers.
          </p>
        </motion.div>

        {/* Published */}
        <div className="mb-10">
          <h3 className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gold">
            <BookOpen className="h-4 w-4" />
            Published Works
          </h3>
          <div className="space-y-4">
            {publications.published.map((pub, i) => (
              <PubCard key={pub.title} pub={pub} index={i} type="journal" />
            ))}
          </div>
        </div>

        {/* Under Review */}
        <div className="mb-10">
          <h3 className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gold">
            <FileText className="h-4 w-4" />
            Under Review
          </h3>
          <div className="space-y-4">
            {publications.underReview.map((pub, i) => (
              <PubCard key={pub.title} pub={pub} index={i} type="review" />
            ))}
          </div>
        </div>

        {/* Conference */}
        <div>
          <h3 className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gold">
            <Mic className="h-4 w-4" />
            Conference Publications
          </h3>
          <div className="space-y-4">
            {publications.conference.map((pub, i) => (
              <ConfCard key={pub.title} pub={pub} index={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PubCard({ pub, index, type }: { pub: { title: string; authors: string; journal: string; year: string; tags: string[] }; index: number; type: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 + index * 0.1, type: "spring", damping: 15 }}
      whileHover={{ x: 4 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 transition-all hover:border-gold/20 hover:shadow-xl hover:shadow-navy/5"
    >
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-gold to-amber-600 opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="flex items-start gap-4">
        <motion.div
          whileHover={{ rotate: -10, scale: 1.1 }}
          className="shrink-0 rounded-xl bg-gradient-to-br from-navy to-navy-light p-2.5 text-gold shadow-lg shadow-navy/20"
        >
          <FileText className="h-4 w-4" />
        </motion.div>
        <div className="flex-1">
          <div className="mb-1.5 flex items-center gap-2">
            <span className="rounded-full bg-gold/10 px-2.5 py-0.5 text-[10px] font-bold text-gold">{pub.year}</span>
            {type === "review" && (
              <span className="rounded-full bg-amber-500/10 px-2.5 py-0.5 text-[10px] font-bold text-amber-500">Under Review</span>
            )}
          </div>
          <h4 className="text-sm font-bold leading-snug">{pub.title}</h4>
          <p className="mt-1 text-xs font-medium text-gold">{pub.authors}</p>
          <p className="mt-0.5 text-xs italic text-muted-foreground">{pub.journal}</p>
          {pub.tags && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {pub.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-navy/5 px-2 py-0.5 text-[10px] font-semibold text-navy dark:bg-gold/10 dark:text-gold">{tag}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ConfCard({ pub, index }: { pub: { title: string; authors: string; venue: string; year: string }; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 + index * 0.08 }}
      whileHover={{ x: 4 }}
      className="group rounded-xl border border-border bg-card p-4 transition-all hover:border-gold/20 hover:shadow-lg hover:shadow-navy/5"
    >
      <div className="flex items-center gap-2 mb-1.5">
        <span className="rounded-full bg-gold/10 px-2.5 py-0.5 text-[10px] font-bold text-gold">{pub.year}</span>
        <Quote className="h-3 w-3 text-gold/40" />
      </div>
      <h4 className="text-sm font-bold leading-snug">{pub.title}</h4>
      <p className="mt-1 text-xs font-medium text-gold">{pub.authors}</p>
      <p className="mt-0.5 text-xs italic text-muted-foreground">{pub.venue}</p>
    </motion.div>
  );
}
