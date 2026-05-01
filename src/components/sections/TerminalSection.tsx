"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { TERMINAL_LINES } from "@/data/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function TerminalSection() {
  const [ref, controls] = useScrollAnimation();
  const [lines, setLines] = useState<{ type: "cmd" | "out"; text: string }[]>([]);
  const [started, setStarted] = useState(false);
  const termRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = termRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let cancelled = false;

    async function typeLines() {
      for (const { command, output } of TERMINAL_LINES) {
        if (cancelled) return;
        let cmd = "";
        for (const ch of command) {
          if (cancelled) return;
          cmd += ch;
          setLines((prev) => {
            const next = [...prev];
            const last = next.length > 0 ? next[next.length - 1] : null;
            if (last && last.type === "cmd" && !last.text.startsWith("$ " + command)) {
              next[next.length - 1] = { type: "cmd", text: "$ " + cmd };
            } else if (!last || last.type === "out") {
              next.push({ type: "cmd", text: "$ " + cmd });
            } else {
              next[next.length - 1] = { type: "cmd", text: "$ " + cmd };
            }
            return next;
          });
          await new Promise((r) => setTimeout(r, 50));
        }
        await new Promise((r) => setTimeout(r, 300));
        if (cancelled) return;
        setLines((prev) => [...prev, { type: "out", text: output }]);
        await new Promise((r) => setTimeout(r, 600));
      }
    }
    typeLines();
    return () => { cancelled = true; };
  }, [started]);

  return (
    <section className="section-padding relative z-10">
      <div className="max-w-2xl mx-auto" ref={termRef}>
        <motion.div ref={ref} initial="hidden" animate={controls}
          variants={{ hidden: { opacity: 0, y: 40, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7 } } }}
          className="rounded-2xl overflow-hidden border border-border shadow-2xl shadow-black/40">
          <div className="flex items-center gap-2 px-4 py-3 bg-surface-light border-b border-border">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-3 text-xs text-muted font-mono">roshan@nepal:~</span>
          </div>
          <div className="bg-[#0a0a14] p-5 font-mono text-sm min-h-[220px]">
            {lines.map((line, i) => (
              <div key={i} className="mb-1">
                {line.type === "cmd" ? (
                  <span><span className="text-green-400">❯ </span><span className="text-foreground/90">{line.text.replace("$ ", "")}</span></span>
                ) : (
                  <span className="text-accent-cyan/90 pl-4">{line.text}</span>
                )}
              </div>
            ))}
            {lines.length < TERMINAL_LINES.length * 2 && (
              <span className="inline-block"><span className="text-green-400">❯ </span><span className="inline-block w-2 h-4 bg-green-400 animate-blink align-text-bottom" /></span>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
