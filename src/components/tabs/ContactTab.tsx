"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, CheckCircle, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/portfolio";

export default function ContactTab() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY",
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `New message from ${form.name} — Abhipsa Portfolio`,
        }),
      });
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    } catch {
      alert("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full overflow-y-auto">
      <div className="mx-auto max-w-5xl px-6 py-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-gold">
            Contact
          </p>
          <h2 className="mb-2 text-2xl font-bold sm:text-3xl">
            Let&apos;s <span className="gold-text">Connect</span>
          </h2>
          <p className="mb-10 max-w-lg text-sm text-muted-foreground">
            Interested in research collaboration or have a question? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
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
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  whileHover={{ x: 6, scale: 1.02 }}
                  className="group rounded-2xl border border-border bg-card p-5 transition-all hover:border-gold/20 hover:shadow-lg hover:shadow-navy/5"
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      className="rounded-xl bg-gradient-to-br from-navy to-navy-light p-3 text-gold shadow-lg shadow-navy/20"
                    >
                      <Icon className="h-5 w-5" />
                    </motion.div>
                    <div>
                      <p className="text-sm font-bold">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="text-sm text-muted-foreground transition-colors hover:text-gold">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy via-navy-light to-navy p-5 text-white shadow-xl shadow-navy/20"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gold/10 blur-2xl" />
              <Sparkles className="mb-2 h-6 w-6 text-gold" />
              <p className="text-sm font-bold">Open to Opportunities</p>
              <p className="mt-1 text-xs text-white/60">
                Research collaborations, consulting, and academic partnerships welcome.
              </p>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4 lg:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-gold/50 focus:ring-2 focus:ring-gold/20"
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-gold/50 focus:ring-2 focus:ring-gold/20"
              />
            </div>
            <textarea
              placeholder="Your message..."
              required
              rows={6}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full resize-none rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-gold/50 focus:ring-2 focus:ring-gold/20"
            />
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(245,158,11,0.3)" }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-navy to-navy-light px-6 py-3.5 text-sm font-bold text-gold shadow-xl shadow-navy/20 transition-all hover:shadow-2xl hover:shadow-navy/30 disabled:opacity-50 sm:w-auto"
            >
              {submitted ? (
                <span className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" /> Sent!
                </span>
              ) : loading ? "Sending..." : (
                <>
                  <Send className="h-4 w-4" />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
