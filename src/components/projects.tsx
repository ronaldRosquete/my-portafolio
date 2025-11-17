import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'Plataforma de comercio electrónico completa con carrito de compras, pasarela de pagos y panel de administración.',
    image: '/ecommerce-dashboard.jpg',
    technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Task Management App',
    description: 'Aplicación de gestión de tareas con colaboración en tiempo real, notificaciones y sincronización en la nube.',
    image: '/task-management-app.jpg',
    technologies: ['React', 'Firebase', 'Material UI', 'TypeScript'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Weather Dashboard',
    description: 'Dashboard meteorológico interactivo con visualizaciones de datos, pronósticos y mapas climáticos.',
    image: '/weather-dashboard.jpg',
    technologies: ['Vue.js', 'Chart.js', 'API REST', 'SCSS'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 scroll-mt-16">
      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold">Proyectos Destacados</h2>
          <p className="text-muted-foreground text-lg">
            Algunos de mis trabajos recientes que demuestran mis habilidades
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden group hover:border-primary/50 transition-colors">
              <div className="aspect-video overflow-hidden bg-muted">
                <img 
                  src={project.image || "/placeholder.svg"} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" className="gap-2" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      Código
                    </a>
                  </Button>
                  <Button size="sm" className="gap-2" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
