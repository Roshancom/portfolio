"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import StatsBar from "@/components/sections/StatsBar";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import TerminalSection from "@/components/sections/TerminalSection";
import FooterSection from "@/components/sections/FooterSection";

const ParticleBackground = dynamic(
  () => import("@/components/ParticleBackground"),
  { ssr: false }
);
const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {
  ssr: false,
});

export default function PortfolioApp() {
  return (
    <>
      <ParticleBackground />
      <CustomCursor />
      <Navbar />

      <main className="relative z-10">
        <HeroSection />
        <StatsBar />
        <SkillsSection />
        <ExperienceSection />
        <PortfolioSection />
        <TerminalSection />
      </main>

      <FooterSection />
    </>
  );
}
