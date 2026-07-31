import { ShieldCheck, Target, Handshake } from 'lucide-react'

const VALUES = [
  {
    icon: ShieldCheck,
    title: 'Confianza',
    description:
      'Relaciones transparentes y confidenciales que protegen los intereses de cada cliente.',
  },
  {
    icon: Target,
    title: 'Experiencia',
    description:
      'Trayectoria comprobada en consultoría financiera, empresarial y jurídica.',
  },
  {
    icon: Handshake,
    title: 'Cercanía',
    description:
      'Acompañamiento personalizado, con soluciones diseñadas a la medida de tu empresa.',
  },
]

export function About() {
  return (
    <section id="nosotros" className="bg-background py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="relative">
          <div className="overflow-hidden rounded-lg">
            <img
              src="/images/about-meeting.png"
              alt="Asesores de Vélez Arango & Asociados en reunión de trabajo"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden rounded-lg bg-accent px-8 py-6 text-accent-foreground shadow-lg sm:block lg:-right-6">
            <p className="font-serif text-3xl font-semibold">+9 años</p>
            <p className="text-sm">de trayectoria profesional</p>
          </div>
        </div>

        <div>
          <p className="mb-4 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.3em] text-accent">
            <span className="h-px w-10 bg-accent" />
            Nosotros
          </p>
          <h2 className="font-serif text-3xl font-medium leading-tight text-balance text-primary sm:text-4xl">
            Una firma que integra soluciones, no solo servicios.
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            En Vélez Arango & Asociados entendemos que cada empresa enfrenta 
            desafíos diferentes. Analizamos su situación financiera, jurídica 
            y estratégica para diseñar soluciones que fortalezcan su liquidez, 
            protejan su patrimonio y favorezcan su crecimiento sostenible.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            No promovemos endeudamiento por volumen; estructuramos capital 
            con criterio para generar resultados reales y sostenibles.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {VALUES.map((value) => (
              <div key={value.title}>
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-md bg-secondary text-accent">
                  <value.icon className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-primary">
                  {value.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
