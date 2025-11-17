import { Hero } from '@/components/hero'
import { AboutMe } from '@/components/AboutMe'
import { Experience } from '@/components/experiencie'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'
import { Contact } from '@/components/contact'
import { GlassHeader } from '@/components/GlassHeaser' 


export default function Home() {
  return (
    <div className="min-h-screen">
      <GlassHeader />
      <main className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
        <Hero />
        <AboutMe />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}
