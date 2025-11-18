import { HeroSection } from '@/components/HeroSection'
import { AboutMe } from '@/components/AboutMe'
import { ExperienceSection } from '@/components/ExperiencieSection'
import { ProjectsSection } from '@/components/ProjectsSection'
import { SkillsSection } from '@/components/SkillsSection'
import { GlassHeader } from '@/components/GlassHeaser' 
import { Footer } from '@/components/Footer'
import { EducationSection } from '@/components/EducationSection'


export default function Home() {
  return (
    <div className="min-h-screen">
      <GlassHeader />
      <main className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
        <HeroSection />
        <AboutMe />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <Footer />
      </main>
    </div>
  )
}
