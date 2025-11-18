"use client";

import { Particles } from "@/components/ui/particles";

export default function GlobalParticles() {
  return (
    <Particles
      className="fixed inset-0 -z-10 opacity-40"
      quantity={400}
      ease={400}
      refresh
      color="#a855f7"
    />
  );
}
