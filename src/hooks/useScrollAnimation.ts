"use client";

import { useRef, useEffect } from "react";
import { useInView, useAnimation } from "framer-motion";

export function useScrollAnimation(threshold: number = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, amount: threshold });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return [ref, controls] as const;
}
