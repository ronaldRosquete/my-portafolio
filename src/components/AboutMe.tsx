"use client";

import { Card, CardContent } from "@/components/ui/card";
import { AuroraText } from "./ui/aurora-text";
import { personalInfo } from "@/lib/data";
import MotionWrapper from "./MotionWrapper";
import { motion } from "motion/react";

export function AboutMe() {
  const childVariants = {
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
    <section id="about" className="py-20 scroll-mt-16">
      <div className="space-y-8">
        <MotionWrapper>
          <AuroraText className="text-3xl md:text-4xl font-bold">
            Sobre Mí
          </AuroraText>
        </MotionWrapper>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <MotionWrapper>
            <motion.div
              className="mt-1 md:mt-0 flex-none flex justify-center"
              variants={childVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-linear-to-r from-pink-500 to-purple-500 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <img
                  src={personalInfo.profilePicture}
                  alt="Profile"
                  className="w-48 md:w-60 rounded-full relative ring-2 ring-purple-500/50"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </motion.div>
          </MotionWrapper>

          {/* Card con información */}
          <MotionWrapper>
            <Card
              className="bg-background/70 backdrop-blur-sm border border-border/20 shadow-md 
             w-full md:w-420x] lg:w-[420px] xl:w-[700px]"
            >
              <CardContent className="p-6">
                <div className="relative pl-4">
                  <span className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-purple-500 to-pink-500 rounded-full"></span>

                  <p className="text-muted-foreground text-justify leading-relaxed">
                    {personalInfo.aboutMe}
                  </p>
                </div>
              </CardContent>
            </Card>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
