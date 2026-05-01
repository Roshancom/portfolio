"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { PROJECTS } from "@/data/constants";
import SectionHeading from "@/components/SectionHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTilt } from "@/hooks/useTilt";

type Filter = "all" | "ecommerce" | "featured";

function ProjectCard({ project }: { project: (typeof PROJECTS)[number] }) {
  const { tilt, handleMouseMove, handleMouseLeave } = useTilt(10);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      className="group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1000px",
      }}
      onClick={() => window.open(project.link, "_blank")}
    >
      <div
        className="glass rounded-2xl overflow-hidden transition-all duration-300 glow-border"
        style={{
          transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        {/* Image */}
        <div className="relative h-48 md:h-56 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Glare overlay */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255,255,255,0.08), transparent 50%)`,
            }}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-foreground mb-1">
            {project.title}
          </h3>
          <p className="text-sm text-muted mb-2">{project.description}</p>
          <p className="text-xs text-accent-purple mb-4">{project.focus}</p>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md text-xs bg-surface-light border border-border text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function PortfolioSection() {
  const [filter, setFilter] = useState<Filter>("all");
  const [ref, controls] = useScrollAnimation();

  const filters: { label: string; value: Filter }[] = [
    { label: "All", value: "all" },
    { label: "E-commerce", value: "ecommerce" },
  ];

  const filtered =
    filter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Projects"
          subtitle="E-commerce experiences I've built for global brands"
        />

        {/* Filters */}
        {/* <div className="flex justify-center gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${filter === f.value
                ? "bg-accent-purple text-white shadow-lg shadow-accent-purple/25"
                : "glass text-muted hover:text-foreground"
                }`}
              id={`filter-${f.value}`}
            >
              {f.label}
            </button>
          ))}
        </div> */}

        {/* Grid */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
