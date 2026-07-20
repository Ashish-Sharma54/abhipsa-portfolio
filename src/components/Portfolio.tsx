"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import Sidebar from "./Sidebar";
import AnimatedBG from "./AnimatedBG";
import AboutTab from "./tabs/AboutTab";
import ResearchTab from "./tabs/ResearchTab";
import PublicationsTab from "./tabs/PublicationsTab";
import SkillsTab from "./tabs/SkillsTab";
import ExperienceTab from "./tabs/ExperienceTab";
import ContactTab from "./tabs/ContactTab";

export type Tab = "about" | "research" | "publications" | "skills" | "experience" | "contact";

const tabComponents: Record<Tab, React.ComponentType> = {
  about: AboutTab,
  research: ResearchTab,
  publications: PublicationsTab,
  skills: SkillsTab,
  experience: ExperienceTab,
  contact: ContactTab,
};

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<Tab>("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
  };

  const ActiveComponent = tabComponents[activeTab];

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <AnimatedBG />
      {/* Desktop Sidebar */}
      <div className="relative z-10 hidden lg:block">
        <Sidebar activeTab={activeTab} onTabChange={handleTabChange} />
      </div>

      {/* Mobile Header */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-border bg-card/80 backdrop-blur-xl px-4 py-3 lg:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-lg p-2 text-muted-foreground hover:text-gold transition-colors"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
        <span className="text-sm font-bold gold-text">Abhipsa Dash</span>
        <button
          onClick={toggle}
          className="rounded-lg p-2 text-muted-foreground hover:text-gold transition-colors"
        >
          {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-navy/80 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative h-full w-72 bg-card border-r border-border"
            >
              <div className="flex h-full flex-col pt-20 px-4">
                {(["about", "research", "publications", "skills", "experience", "contact"] as Tab[]).map((tab, i) => (
                  <motion.button
                    key={tab}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleTabChange(tab)}
                    className={`w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition-all ${
                      activeTab === tab
                        ? "bg-gold/10 text-gold border border-gold/20"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="relative z-10 flex-1 overflow-y-auto pt-14 lg:pt-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -20 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="h-full"
          >
            <ActiveComponent />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
