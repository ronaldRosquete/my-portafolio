'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'

interface ProjectCardProps {
  title: string
  description: string []
  image: string
  tags: string[]
  demoUrl: string
  githubUrl: string
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  demoUrl,
  githubUrl,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="group relative overflow-hidden border-border bg-card transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Imagen del proyecto */}
      <div className="relative h-48 overflow-hidden bg-muted">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay con gradiente */}
        <div
          className={`absolute inset-0 bg-liniar-to-t from-background/90 via-background/50 to-transparent transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />
        
        {/* Botones que aparecen al hacer hover */}
        <div
          className={`absolute inset-0 flex items-center justify-center gap-3 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <Button
            size="sm"
            variant="default"
            className="shadow-lg"
            asChild
          >
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
            >
              <ExternalLink className="h-4 w-4" />
              Ver Demo
            </a>
          </Button>
          <Button
            size="sm"
            variant="secondary"
            className="shadow-lg"
            asChild
          >
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </Button>
        </div>
      </div>

      {/* Contenido de la card */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-card-foreground mb-2 line-clamp-1">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Tags de tecnologías */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary transition-colors duration-200 hover:bg-primary/20"
              style={{
                animation: isHovered
                  ? `fadeInUp 0.3s ease-out ${index * 0.1}s both`
                  : 'none',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Indicador de hover */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2">
          <div
            className={`h-1.5 w-1.5 rounded-full bg-primary transition-all duration-300 ${
              isHovered ? 'scale-150 animate-pulse' : 'scale-100'
            }`}
          />
          <span className={`transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-60'}`}>
            {isHovered ? 'Click to explore' : 'Hover over the cursor to interact'}
          </span>
        </div>
      </div>

      {/* Borde animado */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="absolute inset-0 border-2 border-primary/20 rounded-lg" />
      </div>
    </Card>
  )
}
