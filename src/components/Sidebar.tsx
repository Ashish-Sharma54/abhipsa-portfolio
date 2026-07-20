"use client";

import { motion } from "framer-motion";
import { Sun, Moon, Mail, MapPin, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, ScholarIcon } from "./Icons";
import { useTheme } from "./ThemeProvider";
import { siteConfig } from "@/data/portfolio";
import AIAvatar from "./AIAvatar";
import type { Tab } from "./Portfolio";

const navItems: { id: Tab; label: string }[] = [
  { id: "about", label: "About" },
  { id: "research", label: "Research" },
  { id: "publications", label: "Publications" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Sidebar({
  activeTab,
  onTabChange,
}: {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}) {
  const { theme, toggle } = useTheme();

  return (
    <aside className="relative flex h-screen w-72 flex-col overflow-hidden border-r border-border bg-card">
      {/* Background decoration */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-navy/50 blur-3xl" />

      {/* Profile */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative px-6 pt-8 pb-6"
      >
        <div className="mb-5 flex items-center gap-4">
          <AIAvatar name={siteConfig.fullName} />
          <div>
            <h1 className="text-base font-bold">{siteConfig.fullName}</h1>
            <p className="text-xs text-gold font-medium">{siteConfig.title}</p>
          </div>
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <MapPin className="h-3 w-3 text-gold" />
            <span>{siteConfig.location}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Mail className="h-3 w-3 text-gold" />
            <a href={`mailto:${siteConfig.email}`} className="hover:text-gold transition-colors truncate">
              {siteConfig.email}
            </a>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2">
          {[
            { icon: GithubIcon, href: siteConfig.github, label: "GitHub" },
            { icon: LinkedinIcon, href: siteConfig.linkedin, label: "LinkedIn" },
            { icon: ScholarIcon, href: "#", label: "Scholar" },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="rounded-lg bg-muted p-2 text-muted-foreground transition-colors hover:text-gold hover:bg-gold/10"
            >
              <Icon className="h-4 w-4" />
            </motion.a>
          ))}
        </div>
      </motion.div>

      <div className="mx-6 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Navigation */}
      <nav className="relative flex-1 overflow-y-auto px-3 py-4">
        <div className="space-y-1">
          {navItems.map((item, i) => {
            const isActive = activeTab === item.id;
            return (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                onClick={() => onTabChange(item.id)}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.97 }}
                className={`group relative flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium transition-all ${
                  isActive
                    ? "text-gold bg-gold/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`h-1.5 w-1.5 rounded-full transition-all ${
                    isActive ? "bg-gold scale-125" : "bg-muted-fg group-hover:bg-gold/50"
                  }`} />
                  <span>{item.label}</span>
                </div>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-gold"
                  >
                    <ArrowRight className="h-3.5 w-3.5" />
                  </motion.div>
                )}
                {isActive && (
                  <motion.div
                    layoutId="sidebarActive"
                    className="absolute inset-0 rounded-xl border border-gold/20"
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </nav>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="border-t border-border px-6 py-4"
      >
        <div className="flex items-center justify-between">
          <motion.a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-navy to-navy-light px-4 py-2.5 text-xs font-semibold text-gold shadow-lg shadow-navy/20 transition-all hover:shadow-xl hover:shadow-navy/30"
          >
            Download CV
            <ArrowRight className="h-3 w-3" />
          </motion.a>
          <motion.button
            onClick={toggle}
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            className="rounded-lg p-2 text-muted-foreground transition-colors hover:text-gold hover:bg-gold/10"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </motion.button>
        </div>
      </motion.div>
    </aside>
  );
}
