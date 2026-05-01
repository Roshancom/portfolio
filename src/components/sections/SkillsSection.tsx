"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SKILL_CATEGORIES } from "@/data/constants";
import SectionHeading from "@/components/SectionHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

function SkillTag({ name, delay }: { name: string; delay: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.span
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
      }}
      transition={{ delay: delay * 0.05 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative inline-flex items-center px-3 py-1.5 rounded-lg text-sm bg-surface-light border border-border text-foreground/80 hover:border-accent-purple/40 hover:text-foreground transition-all duration-200 cursor-default"
    >
      {name}
      {hovered && (
        <motion.span
          initial={{ opacity: 0, y: 8, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0 }}
          className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-accent-purple text-white text-xs whitespace-nowrap shadow-lg pointer-events-none z-30"
        >
          {name}
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-accent-purple rotate-45" />
        </motion.span>
      )}
    </motion.span>
  );
}

export default function SkillsSection() {
  const [ref, controls] = useScrollAnimation();

  return (
    <section id="skills" className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Technical Skills"
          subtitle="Technologies and tools I work with daily"
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {SKILL_CATEGORIES.map((cat) => (
            <motion.div
              key={cat.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className={`glass glass-hover rounded-2xl p-6 ${cat.colSpan || ""}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-lg font-semibold text-foreground">
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <SkillTag key={skill} name={skill} delay={i} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
