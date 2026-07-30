import { Mail } from 'lucide-react'
import { LinkedinIcon } from '@/components/social-icons'

const TEAM = [
  {
    name: 'Carlos Vélez Arango',
    role: 'Socio Director · Consultoría Financiera',
    image: '/images/team-1.png',
  },
  {
    name: 'Ana María Restrepo',
    role: 'Socia · Asesoría Jurídica Corporativa',
    image: '/images/team-2.png',
  },
  {
    name: 'Julián Arango',
    role: 'Director · Reestructuración Empresarial',
    image: '/images/team-3.png',
  },
]

export function Team() {
  return (
    <section id="equipo" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 flex items-center justify-center gap-3 text-sm font-medium uppercase tracking-[0.3em] text-accent">
            <span className="h-px w-10 bg-accent" />
            Equipo
            <span className="h-px w-10 bg-accent" />
          </p>
          <h2 className="font-serif text-3xl font-medium leading-tight text-balance text-primary sm:text-4xl">
            Profesionales que hacen la diferencia
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Un equipo multidisciplinario con experiencia en finanzas, negocios y
            derecho, comprometido con el éxito de cada cliente.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member) => (
            <article key={member.name} className="group text-center">
              <div className="relative mx-auto mb-6 overflow-hidden rounded-lg">
                <img
                  src={member.image || '/placeholder.svg'}
                  alt={`Retrato de ${member.name}`}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-3 bg-primary/85 py-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <a
                    href="#contacto"
                    aria-label={`Escribir a ${member.name}`}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                  <a
                    href="#contacto"
                    aria-label={`LinkedIn de ${member.name}`}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-background text-primary"
                  >
                    <LinkedinIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <h3 className="font-serif text-xl font-semibold text-primary">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
