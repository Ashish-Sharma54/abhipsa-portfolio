"use client";

import { ThemeProvider } from "@/components/ThemeProvider";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  );
}
