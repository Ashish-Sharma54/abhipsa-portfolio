"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Mail, MapPin, CheckCircle, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon, ScholarIcon } from "../Icons";
import SpotlightCard from "../ui/SpotlightCard";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:abhipsa0407@gmail.com?subject=${subject}&body=${body}`, "_blank");
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6" ref={ref}>
        <div className="mb-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary"
          >
            Contact
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-sans text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Let&apos;s <span className="gradient-text">Connect</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-lg text-sm text-muted-foreground"
          >
            Interested in research collaboration or have a question? I&apos;d love to hear from you.
          </motion.p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="space-y-4 lg:col-span-2"
          >
            {[
              { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
              { icon: MapPin, label: "Location", value: siteConfig.location, href: "" },
            ].map((info, i) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ x: 6, scale: 1.02 }}
                >
                  <SpotlightCard className="glass gradient-border group rounded-2xl p-5 transition-all">
                    <div className="flex items-start gap-4">
                      <motion.div
                        whileHover={{ rotate: 15, scale: 1.1 }}
                        className="rounded-xl bg-primary/10 p-3 text-primary"
                      >
                        <Icon className="h-5 w-5" />
                      </motion.div>
                      <div className="min-w-0">
                        <p className="text-sm font-bold">{info.label}</p>
                        {info.href ? (
                          <a href={info.href} className="break-words text-sm text-muted-foreground transition-colors hover:text-primary">
                            {info.value}
                          </a>
                        ) : (
                          <p className="break-words text-sm text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-secondary to-primary p-6 text-white shadow-xl"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
              <Sparkles className="mb-3 h-6 w-6 text-white/80" />
              <p className="font-sans text-sm font-bold">Open to Opportunities</p>
              <p className="mt-1 text-xs text-white/70">
                Research collaborations, consulting, and academic partnerships welcome.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="flex gap-3"
            >
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
                  className="glass rounded-xl p-3 text-muted-foreground transition-colors hover:text-primary"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="space-y-4 lg:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="glass w-full rounded-xl px-4 py-3.5 text-sm outline-none transition-all placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20"
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="glass w-full rounded-xl px-4 py-3.5 text-sm outline-none transition-all placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <textarea
              placeholder="Your message..."
              required
              rows={6}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="glass w-full resize-none rounded-xl px-4 py-3.5 text-sm outline-none transition-all placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20"
            />
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(91,95,255,0.3)" }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 sm:w-auto"
            >
              {submitted ? (
                <span className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" /> Opening Mail Client...
                </span>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send Message
                </>
              )}
            </motion.button>
            <p className="text-[10px] text-muted-foreground">
              Clicking &quot;Send Message&quot; will open your email client with a pre-filled message.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
