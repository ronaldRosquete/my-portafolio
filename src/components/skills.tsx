import { Card } from '@/components/ui/card'
import { Code2, Palette, Database, Wrench } from 'lucide-react'

const skillCategories = [
  {
    icon: Code2,
    title: 'Frontend',
    skills: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    icon: Database,
    title: 'Backend',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL', 'Prisma'],
  },
  {
    icon: Palette,
    title: 'Diseño',
    skills: ['UI/UX', 'Figma', 'Responsive Design', 'Accessibility', 'Design Systems'],
  },
  {
    icon: Wrench,
    title: 'Herramientas',
    skills: ['Git', 'GitHub', 'Docker', 'Vercel', 'AWS', 'CI/CD', 'Testing'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 scroll-mt-16">
      <div className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold">Habilidades</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card key={index} className="p-6 hover:border-primary/50 transition-colors">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-md bg-muted text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
