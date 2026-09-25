"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, BookOpen, MapPin, Download, ExternalLink, Mail } from "lucide-react";
import { siteConfig, education, researchInterests } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "../Icons";
import SpotlightCard from "../ui/SpotlightCard";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-10 sm:py-12">
      <div className="mx-auto max-w-6xl px-6" ref={ref}>
        <div className="mb-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-sans text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Where <span className="gradient-text">Biomedical Engineering</span> Meets AI
          </motion.h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <SpotlightCard className="glass relative overflow-hidden rounded-3xl p-8">
              <div className="relative mb-6 flex justify-center">
                <div className="relative">
                  <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-[2px] shadow-xl shadow-primary/20">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-background">
                      <span className="font-sans text-4xl font-bold gradient-text">
                        {siteConfig.fullName.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border-[3px] border-background bg-green-500 shadow-lg shadow-green-500/30"
                  >
                    <span className="text-[10px] text-white">✓</span>
                  </motion.div>
                </div>
              </div>

              <div className="relative text-center">
                <h3 className="mb-1 font-sans text-xl font-bold">{siteConfig.fullName}</h3>
                <p className="mb-5 text-sm font-medium text-primary">{siteConfig.title}</p>
                <div className="mb-5 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>{siteConfig.location}</span>
                </div>

                <div className="mb-6 flex items-center justify-center gap-3">
                  {[
                    { icon: GithubIcon, href: siteConfig.github, label: "GitHub" },
                    { icon: LinkedinIcon, href: siteConfig.linkedin, label: "LinkedIn" },
                    { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
                  ].map(({ icon: Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target={href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      whileHover={{ y: -3, scale: 1.1 }}
                      whileTap={{ scale: 0.92 }}
                      aria-label={label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                    >
                      <Icon className="h-[18px] w-[18px]" />
                    </motion.a>
                  ))}
                </div>

                <a
                  href={siteConfig.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30 hover:scale-105"
                >
                  <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                  Download CV
                  <ExternalLink className="h-3 w-3 opacity-60" />
                </a>
              </div>
            </SpotlightCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8 lg:col-span-3"
          >
            <div>
              <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
                <GraduationCap className="h-4 w-4" />
                Education
              </h3>
              <div className="space-y-3">
                {education.map((edu, i) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.12 }}
                    whileHover={{ x: 4, scale: 1.01 }}
                    className="spotlight-card glass gradient-border rounded-2xl p-5 transition-all"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                      <div className="min-w-0 flex-1">
                        <h4 className="text-sm font-bold leading-snug">{edu.degree}</h4>
                        <p className="mt-0.5 text-sm font-medium text-primary">{edu.institution}</p>
                        <p className="mt-0.5 text-xs text-muted-foreground">{edu.location}</p>
                      </div>
                      <div className="shrink-0 text-right">
                        <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold text-primary whitespace-nowrap">
                          {edu.period}
                        </span>
                        <p className="mt-1.5 text-xs font-semibold gradient-text">{edu.detail}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
                <BookOpen className="h-4 w-4" />
                Research Interests
              </h3>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {researchInterests.map((interest, i) => {
                  const variants = [
                    "border-primary/20 bg-primary/5 text-primary hover:border-primary/40 hover:shadow-primary/10",
                    "border-secondary/20 bg-secondary/5 text-secondary hover:border-secondary/40 hover:shadow-secondary/10",
                    "border-accent/20 bg-accent/5 text-accent hover:border-accent/40 hover:shadow-accent/10",
                  ];
                  const v = variants[i % variants.length];
                  return (
                    <motion.span
                      key={interest}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.6 + i * 0.05, type: "spring" }}
                      whileHover={{ scale: 1.03, y: -2 }}
                      className={`flex items-center cursor-default rounded-full border px-4 py-2 text-xs font-medium transition-all hover:bg-opacity-20 hover:shadow-lg ${v}`}
                    >
                      {interest}
                    </motion.span>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
