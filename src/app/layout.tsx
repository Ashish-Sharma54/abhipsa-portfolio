import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Abhipsa Dash — Researcher & Academic Scholar",
    template: "%s | Abhipsa",
  },
  description:
    "Dedicated researcher passionate about advancing knowledge through rigorous academic inquiry, innovative methodologies, and impactful publications in AI and computational sciences.",
  keywords: [
    "researcher",
    "machine learning",
    "AI",
    "deep learning",
    "NLP",
    "federated learning",
    "data science",
    "publications",
    "academic",
  ],
  authors: [{ name: "Abhipsa Dash" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abhipsa-dash.vercel.app",
    siteName: "Abhipsa — Research Portfolio",
    title: "Abhipsa Dash — Researcher & Academic Scholar",
    description:
      "Dedicated researcher passionate about advancing knowledge through rigorous academic inquiry and impactful publications.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhipsa Dash — Researcher & Academic Scholar",
    description:
      "Dedicated researcher passionate about AI, ML, and computational sciences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
