"use client";
import { personalInfo } from "@/lib/data";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";
import { Meteors } from "./ui/meteors";
import { AuroraText } from "./ui/aurora-text";
import { motion, Variants } from "framer-motion";

export function HeroSection() {
  const heroVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.12,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  function scrollToSection(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  return (
    <section
      id="inicio"
      className="relative min-h-[80vh] flex flex-col justify-center py-20 overflow-hidden"
    >
      
      <Meteors number={40} />

      <motion.div
        className="relative z-10 space-y-8"
        variants={heroVariants}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-bold tracking-tight text-balance"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.div variants={item}>
          <AuroraText className="text-5xl md:text-5xl font-bold tracking-tight text-balance">
            {personalInfo.ocupation}
          </AuroraText>
        </motion.div>

        <motion.p
          variants={item}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl text-pretty leading-relaxed"
        >
          {personalInfo.heroDescription}
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-wrap items-center gap-4"
        >
          <Button
            size="lg"
            onClick={() => scrollToSection("projects")} // ← aquí va el ID real
            className="gap-2 cursor-pointer"
          >
            See Projects
            <ExternalLink className="h-4 w-4" />
          </Button>

          <InteractiveHoverButton onClick={() => scrollToSection("about")}>
            Start
          </InteractiveHoverButton>
        </motion.div>

        {/* Socials */}
        <motion.div variants={item} className="flex items-center gap-4 pt-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
          <label>GitHub</label>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <label>Linkedin</label>

          <a
            href={`mailto:${personalInfo.email}`}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="h-6 w-6" />
          </a>
          <label>Mail</label>
        </motion.div>
      </motion.div>
    </section>
  );
}
