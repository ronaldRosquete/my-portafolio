"use client";

import { Calendar, School } from "lucide-react";
import { motion } from "framer-motion";
import { AuroraText } from "./ui/aurora-text";
import { education } from "@/lib/data";

function MotionWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

function TimelineItem({
  title,
  subtitle,
  date,
  isLast,
  index,
  children,
}: {
  title: string;
  subtitle: string;
  date: string;
  isLast: boolean;
  index: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="relative pl-12 pb-8"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {/* Timeline circle */}
      <motion.div
        className="absolute left-0 top-2 w-8 h-8 rounded-full border-2 border-muted-foreground/40 bg-background z-10"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
        viewport={{ once: true }}
      />

      {/* Vertical line */}
      {!isLast && (
        <div className="absolute left-[15px] top-10 bottom-0 w-px bg-border" />
      )}

      {/* Content */}
      <div className="space-y-2">
        <h3 className="text-lg md:text-xl font-semibold text-balance leading-tight">
          {title}
        </h3>
        <div className="flex items-center gap-2 text-foreground/80 text-sm md:text-base">
          <School className="w-4 h-4" />
          <span>{subtitle}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground text-xs md:text-sm">
          <Calendar className="w-4 h-4" />
          <span>{date}</span>
        </div>
        {children}
      </div>
    </motion.div>
  );
}

export function EducationSection() {
  return (
    <section id="education" className="py-20 scroll-mt-16">
      <div className="space-y-8">
        <MotionWrapper>
          <AuroraText className="text-4xl font-bold mb-8 text-center md:text-left flex items-center justify-center md:justify-start">
            Education
          </AuroraText>
        </MotionWrapper>

        <div className="mb-8">
          {education.map((edu, index) => (
            <TimelineItem
              key={edu.institution}
              title={` ${edu.degree}`}
              subtitle={` ${edu.institution}`}
              date={` ${edu.period}`}
              isLast={index === education.length - 1}
              index={index}
            >
              <p className="text-sm text-muted-foreground mb-3">
                📍 {edu.location}
              </p>

              {edu.achievements && edu.achievements.length > 0 && (
                <motion.div
                  className="mt-3 p-4 bg-background/80 backdrop-blur-sm backdrop-filter rounded-lg border border-purple-500/20 dark:bg-card/10 dark:border-purple-500/10 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-3">
                    
                    <h4 className="text-sm font-medium">
                      ✨ Achievements & Activities
                    </h4>
                  </div>
                  <ul className="list-none ml-4 space-y-2 text-sm">
                    {edu.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        className="text-muted-foreground relative pl-6"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * i }}
                        viewport={{ once: true }}
                      >
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </TimelineItem>
          ))}
        </div>
      </div>
    </section>
  );
}
