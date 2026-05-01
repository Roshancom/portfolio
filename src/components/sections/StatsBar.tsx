"use client";

import { motion } from "framer-motion";
import { STATS } from "@/data/constants";
import { useCountUp } from "@/hooks/useCountUp";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

function StatCard({ label, value, suffix }: { label: string; value: number; suffix: string }) {
  const { count, ref } = useCountUp(value);

  return (
    <div ref={ref} className="flex flex-col items-center gap-1 py-6 px-4">
      <span className="text-3xl md:text-4xl font-bold gradient-text">
        {count}{suffix}
      </span>
      <span className="text-sm text-muted tracking-wide">{label}</span>
    </div>
  );
}

export default function StatsBar() {
  const [ref, controls] = useScrollAnimation();

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
      }}
      className="relative z-10 max-w-4xl mx-auto -mt-8 mb-8"
      id="stats"
    >
      <div className="glass rounded-2xl flex flex-col sm:flex-row items-center justify-center divide-y sm:divide-y-0 sm:divide-x divide-border">
        {STATS.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
    </motion.section>
  );
}
