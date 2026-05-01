"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

export default function ParticleBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      fpsLimit: 60,
      particles: {
        number: { value: 60, density: { enable: true } },
        color: { value: "#6366f1" },
        links: {
          enable: true,
          color: "#6366f1",
          distance: 150,
          opacity: 0.12,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.6,
          direction: "none" as const,
          outModes: { default: "bounce" as const },
        },
        opacity: { value: { min: 0.05, max: 0.2 } },
        size: { value: { min: 1, max: 2.5 } },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" as const },
        },
        modes: {
          grab: { distance: 180, links: { opacity: 0.25 } },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="fixed inset-0 z-0 pointer-events-auto"
    />
  );
}
