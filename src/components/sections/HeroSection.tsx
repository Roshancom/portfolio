"use client";

import { motion } from "framer-motion";
import { useTypewriter } from "@/hooks/useTypewriter";
import { PERSONAL, TYPEWRITER_WORDS } from "@/data/constants";
import GlowButton from "@/components/GlowButton";

export default function HeroSection() {
  const typed = useTypewriter({ words: TYPEWRITER_WORDS });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center section-padding"
    >
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted text-base md:text-lg mb-4 tracking-widest uppercase"
        >
          Hi there, I&apos;m
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight"
        >
          <span className="gradient-text">{PERSONAL.name}</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-6 h-10 flex items-center justify-center"
        >
          <span className="text-xl md:text-2xl text-muted font-light">
            {typed}
          </span>
          <span className="ml-0.5 inline-block w-0.5 h-7 bg-accent-purple animate-blink" />
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-8 text-muted max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
        >
          Software Engineer based in Nepal with nearly 3 years of production
          experience. I specialize in the{" "}
          <span className="text-foreground font-medium">Next.js ecosystem</span>,
          building scalable e-commerce and web applications for global brands.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <GlowButton href={PERSONAL.linkedin} variant="primary" id="hero-hire-btn">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Hire Me
          </GlowButton>
          <GlowButton href="#experience" variant="outline" id="hero-resume-btn">
            View Resume
          </GlowButton>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="scroll-hint">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-muted"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
