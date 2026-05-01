"use client";

import { useEffect, useState, useCallback } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const onMouseMove = useCallback((e: MouseEvent) => {
    setPos({ x: e.clientX, y: e.clientY });
    if (!visible) setVisible(true);
  }, [visible]);

  useEffect(() => {
    // Only enable on non-touch devices
    if (typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches) {
      window.addEventListener("mousemove", onMouseMove, { passive: true });

      const addHover = () => setHovering(true);
      const removeHover = () => setHovering(false);

      const observe = () => {
        document.querySelectorAll("a, button, [role='button'], input, textarea, select").forEach((el) => {
          el.addEventListener("mouseenter", addHover);
          el.addEventListener("mouseleave", removeHover);
        });
      };

      // Observe initially and on DOM changes
      observe();
      const observer = new MutationObserver(observe);
      observer.observe(document.body, { childList: true, subtree: true });

      return () => {
        window.removeEventListener("mousemove", onMouseMove);
        observer.disconnect();
      };
    }
  }, [onMouseMove]);

  if (!visible) return null;

  return (
    <>
      {/* Main dot */}
      <div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        style={{
          transform: `translate(${pos.x - 4}px, ${pos.y - 4}px)`,
          transition: "transform 0.05s linear",
        }}
      >
        <div
          className={`rounded-full bg-white transition-all duration-200 ${
            hovering ? "w-3 h-3 opacity-100" : "w-2 h-2 opacity-80"
          }`}
        />
      </div>
      {/* Outer ring */}
      <div
        className="fixed top-0 left-0 z-[9998] pointer-events-none mix-blend-difference"
        style={{
          transform: `translate(${pos.x - 20}px, ${pos.y - 20}px)`,
          transition: "transform 0.15s ease-out",
        }}
      >
        <div
          className={`rounded-full border transition-all duration-300 ${
            hovering
              ? "w-12 h-12 border-accent-purple/80 scale-110"
              : "w-10 h-10 border-white/30"
          }`}
          style={{
            marginLeft: hovering ? "-4px" : "0",
            marginTop: hovering ? "-4px" : "0",
          }}
        />
      </div>
    </>
  );
}
