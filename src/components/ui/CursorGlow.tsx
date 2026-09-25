"use client";

import { useMousePosition } from "@/hooks/useAnimations";

export default function CursorGlow() {
  const { x, y } = useMousePosition();

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-300"
      style={{ opacity: x === 0 && y === 0 ? 0 : 1 }}
    >
      <div
        className="absolute h-[500px] w-[500px] rounded-full opacity-[0.07]"
        style={{
          left: x - 250,
          top: y - 250,
          background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
          transition: "left 0.15s ease-out, top 0.15s ease-out",
        }}
      />
    </div>
  );
}
