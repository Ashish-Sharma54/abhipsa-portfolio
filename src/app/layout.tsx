import type { Metadata } from "next";
import Script from "next/script";
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Abhipsa Dash — Biomedical Engineering Researcher",
    template: "%s | Abhipsa",
  },
  description:
    "B.Tech in Biomedical Engineering at NIT Rourkela. Researching physiological signal analysis, multimodal learning, and Vision-Language Models for healthcare applications.",
  keywords: [
    "Biomedical Engineering",
    "Machine Learning",
    "Deep Learning",
    "Physiological Signal Analysis",
    "Vision-Language Models",
    "Healthcare AI",
    "NIT Rourkela",
    "Medical AI",
  ],
  authors: [{ name: "Abhipsa Dash" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abhipsa-portfolio-sooty.vercel.app",
    siteName: "Abhipsa Dash — Portfolio",
    title: "Abhipsa Dash — Biomedical Engineering Researcher",
    description:
      "Researching physiological signal analysis, multimodal learning, and Vision-Language Models for healthcare applications.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhipsa Dash — Biomedical Engineering Researcher",
    description:
      "Researching physiological signal analysis, multimodal learning, and Vision-Language Models for healthcare applications.",
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
      className={`${spaceGrotesk.variable} ${plusJakarta.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen antialiased">
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                const preferDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const initial = theme ?? (preferDark ? 'dark' : 'light');
                document.documentElement.classList.toggle('dark', initial === 'dark');
              } catch(e) {}
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
