"use client";

import { skillCategories } from "@/lib/data";
import MotionWrapper from "./MotionWrapper";
import { AuroraText } from "./ui/aurora-text";
import { motion } from "motion/react";
import { MagicCard } from "./ui/magic-card";

export function SkillsSection() {
  
  function SkillTag({ skill, index }: { skill: string; index: number }) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.05 * index,
        }}
        whileHover={{ scale: 1.05, y: -2 }}
        className="px-3 py-1 bg-muted/80 backdrop-blur-sm rounded-md text-sm border border-purple-500/10 shadow-sm"
      >
        {skill}
      </motion.div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const skillCategoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="py-20 scroll-mt-16">
      <div className="space-y-8">
        <MotionWrapper>
          <AuroraText className="text-4xl font-bold mb-8 text-center md:text-left flex items-center justify-center md:justify-start">
            Skills
          </AuroraText>
        </MotionWrapper>

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                variants={skillCategoryVariants}
                initial="hidden"
                animate="visible"
              >
                <MagicCard className="p-6 rounded-xl hover:border-primary/50 transition-colors">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-semibold">
                        {category.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      {category.skills.map((skill, skillIndex) => (
                        <SkillTag
                          key={skill}
                          skill={skill}
                          index={skillIndex}
                        />
                      ))}
                    </div>
                  </div>
                </MagicCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
