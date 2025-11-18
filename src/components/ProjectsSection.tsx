"use client";

import MotionWrapper from "./MotionWrapper";
import { AuroraText } from "./ui/aurora-text";
import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/ui/project-card";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 scroll-mt-16">
      <div className="space-y-8">
        <MotionWrapper>
          <AuroraText className="text-4xl font-bold mb-8 text-center md:text-left flex items-center justify-center md:justify-start">
            Featured Projects
          </AuroraText>
        </MotionWrapper>

        <MotionWrapper>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.technologies}
                demoUrl={project.demo}
                githubUrl={project.github}
              />
            ))}
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
