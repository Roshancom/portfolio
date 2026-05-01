"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  const [ref, controls] = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      className="mb-12 md:mb-16 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        {title}
      </h2>
      <div className="mt-3 mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan" />
      {subtitle && (
        <p className="mt-4 text-muted max-w-md mx-auto text-base">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
