"use client";

import { motion } from "framer-motion";
import { ArrowUp, Heart } from "lucide-react";
import { siteConfig } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon, ScholarIcon } from "../Icons";

export default function Footer() {
  return (
    <footer className="relative border-t border-border py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <motion.p
              whileHover={{ scale: 1.02 }}
              className="mb-3 font-sans text-lg font-bold gradient-text"
            >
              {siteConfig.fullName}
            </motion.p>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground max-w-xs">
              Biomedical Engineering researcher at NIT Rourkela, working on physiological signal analysis and healthcare AI.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: GithubIcon, href: siteConfig.github, label: "GitHub" },
                { icon: LinkedinIcon, href: siteConfig.linkedin, label: "LinkedIn" },
                { icon: ScholarIcon, href: "https://scholar.google.com/citations?user=AbhipsaDash", label: "Scholar" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="glass rounded-xl p-2.5 text-muted-foreground transition-colors hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-3 font-sans text-sm font-bold">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["About", "Skills", "Projects", "Experience", "Publications", "Achievements", "Extracurricular", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-3 font-sans text-sm font-bold">Get In Touch</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-primary">
                {siteConfig.email}
              </a>
              <span>{siteConfig.location}</span>
              <span className="mt-2 inline-flex items-center gap-1.5 text-xs text-green-500">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                Available for opportunities
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="flex items-center gap-1 text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.fullName}. Built with{" "}
            <Heart className="h-3 w-3 fill-red-500 text-red-500" /> at NIT Rourkela
          </p>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 rounded-xl bg-primary/10 px-4 py-2 text-xs font-semibold text-primary transition-colors hover:bg-primary/20"
          >
            <ArrowUp className="h-3 w-3" />
            Back to Top
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
