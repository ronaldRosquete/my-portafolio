import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const experiences = [
  {
    period: '2024 — Presente',
    title: 'Desarrollador Full Stack Senior',
    company: 'Tech Company',
    description: 'Desarrollo y mantenimiento de aplicaciones web escalables usando Next.js, React y Node.js. Liderazgo en implementación de mejores prácticas y arquitectura de frontend.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL'],
  },
  {
    period: '2022 — 2024',
    title: 'Desarrollador Frontend',
    company: 'Digital Agency',
    description: 'Creación de interfaces de usuario responsivas y accesibles para diversos clientes. Colaboración estrecha con diseñadores y equipos backend.',
    technologies: ['React', 'Vue.js', 'Tailwind CSS', 'JavaScript'],
  },
  {
    period: '2020 — 2022',
    title: 'Desarrollador Web Junior',
    company: 'Startup Inc',
    description: 'Desarrollo de características nuevas para plataforma SaaS. Participación en todo el ciclo de desarrollo desde planificación hasta despliegue.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
  },
]

export function Experience() {
  return (
    <section id="experiencie" className="py-20 scroll-mt-16">
      <div className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold">Experiencia</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 hover:border-primary/50 transition-colors">
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div className="space-y-1">
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground font-mono">
                    {exp.period}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
