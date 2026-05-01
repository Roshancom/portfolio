"use client";

import { motion } from "framer-motion";
import { EXPERIENCES } from "@/data/constants";
import SectionHeading from "@/components/SectionHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ExperienceSection() {
  const [ref, controls] = useScrollAnimation();

  return (
    <section id="experience" className="section-padding relative z-10">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey so far"
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent-purple/60 via-accent-blue/30 to-transparent" />

          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, x: -40 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
              }}
              className="relative pl-12 md:pl-16 pb-12 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-2.5 md:left-4.5 top-1 w-3 h-3 rounded-full bg-accent-purple shadow-lg shadow-accent-purple/40 ring-4 ring-background" />

              {/* Card */}
              <div className="glass glass-hover rounded-2xl p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="text-accent-purple text-sm font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-sm text-muted whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2">
                  {exp.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm text-muted leading-relaxed"
                    >
                      <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent-blue/60" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
