"use client";

import { useSyncExternalStore } from "react";
import LoadingScreen from "@/components/ui/LoadingScreen";
import ScrollProgress from "@/components/ui/ScrollProgress";
import CursorGlow from "@/components/ui/CursorGlow";
import SectionDivider from "@/components/ui/SectionDivider";
import AnimatedBackground from "@/components/sections/AnimatedBackground";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Timeline from "@/components/sections/Timeline";
import Publications from "@/components/sections/Publications";
import Achievements from "@/components/sections/Achievements";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Extracurricular from "@/components/sections/Extracurricular";
import Footer from "@/components/sections/Footer";

export default function Home() {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  if (!mounted) return null;

  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <CursorGlow />
      <AnimatedBackground />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Timeline />
        <SectionDivider />
        <Publications />
        <SectionDivider />
        <Achievements />
        <SectionDivider />
        <Extracurricular />
        <SectionDivider />
        <Testimonials />
        <SectionDivider />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
