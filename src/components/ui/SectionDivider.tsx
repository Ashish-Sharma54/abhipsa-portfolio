"use client";

export default function SectionDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div className={`relative h-4 w-full overflow-hidden ${flip ? "rotate-180" : ""}`}>
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="absolute bottom-0 h-full w-full"
      >
        <defs>
          <linearGradient id="divider-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.12" />
            <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.08" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.12" />
          </linearGradient>
        </defs>
        <path
          d="M0,40 C240,60 480,10 720,40 C960,70 1200,20 1440,40 L1440,60 L0,60 Z"
          fill="url(#divider-grad)"
        />
        <path
          d="M0,45 C360,15 720,55 1080,25 C1260,10 1380,35 1440,30"
          fill="none"
          stroke="var(--primary)"
          strokeWidth="0.5"
          strokeOpacity="0.15"
        />
      </svg>
    </div>
  );
}
