'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, MessageSquare, Send } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contacto" className="py-20 scroll-mt-16">
      <div className="space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Trabajemos Juntos</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
            ¿Tienes un proyecto en mente? Me encantaría escuchar sobre tu idea y ver cómo puedo ayudarte a hacerla realidad.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          <Card className="p-6 hover:border-primary/50 transition-colors">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <Mail className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-muted-foreground">tu@email.com</p>
                <a 
                  href="mailto:tu@email.com"
                  className="text-primary hover:underline text-sm"
                >
                  Envíame un correo
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:border-primary/50 transition-colors">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <MessageSquare className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-lg">Redes Sociales</h3>
                <p className="text-muted-foreground">Conéctate conmigo</p>
                <div className="flex gap-3 text-sm">
                  <a href="https://github.com" className="text-primary hover:underline">
                    GitHub
                  </a>
                  <a href="https://linkedin.com" className="text-primary hover:underline">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-8 max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Nombre
              </label>
              <Input
                id="name"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="tu@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Mensaje
              </label>
              <Textarea
                id="message"
                placeholder="Cuéntame sobre tu proyecto..."
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>

            <Button type="submit" className="w-full gap-2" size="lg">
              <Send className="h-4 w-4" />
              Enviar Mensaje
            </Button>
          </form>
        </Card>

        <footer className="pt-12 text-center text-sm text-muted-foreground">
          <p>© 2025 Desarrollador Web. Construido con Next.js y Tailwind CSS.</p>
        </footer>
      </div>
    </section>
  )
}
