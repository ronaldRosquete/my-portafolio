"use client";

import { Briefcase, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { AuroraText } from "./ui/aurora-text";
import { workExperience } from "@/lib/data";

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
          <div className="w-2 h-2 rounded-full bg-cyan-400" />
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

export function ExperienceSection() {
  return (
    <section id="experiencie" className="py-20 scroll-mt-16">
      <div className="space-y-8">
        <MotionWrapper>
          <AuroraText className="text-4xl font-bold mb-8 text-center md:text-left flex items-center justify-center md:justify-start">
            Work Experience
          </AuroraText>
        </MotionWrapper>

        <div className="mb-8">
          {workExperience.map((job, index) => (
            <TimelineItem
              key={job.company + job.period}
              title={` ${job.position} | ${job.company}`}
              subtitle={` ${job.location}`}
              date={` ${job.period}`}
              isLast={index === workExperience.length - 1}
              index={index}
            >
              <motion.div
                className="mt-3 p-4 bg-background/80 backdrop-blur-sm backdrop-filter rounded-lg border border-purple-500/20 dark:bg-card/10 dark:border-purple-500/10 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-3">
                  <div className="h-6 w-6 flex items-center justify-center rounded-full bg-purple-500/10 mr-2">
                    <Briefcase className="h-4 w-4 text-purple-500" />
                  </div>
                  <h4 className="text-sm font-medium">Key achievements</h4>
                </div>
                <ul className="list-none ml-4 space-y-2 text-sm">
                  {job.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      className="text-muted-foreground relative pl-0 flex items-start gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * i }}
                      viewport={{ once: true }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        className="shrink-0 mt-1.5"
                      >
                        <path
                          fill="none"
                          stroke="#7c3aed"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0"
                        />
                      </svg>
                      <span className="flex-1">{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </TimelineItem>
          ))}
        </div>
      </div>
    </section>
  );
}
