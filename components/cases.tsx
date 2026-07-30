import { Quote } from 'lucide-react'

const CASES = [
  {
    metric: 'Ley 1116',
    title: 'Reorganización exitosa de empresa industrial',
    description:
      'Acompañamos un proceso de reorganización empresarial que permitió preservar más de 120 empleos y recuperar la viabilidad operativa.',
  },
  {
    metric: '+40%',
    title: 'Optimización de capital de trabajo',
    description:
      'Estructuramos soluciones de factoring y confirming que mejoraron el flujo de caja de una comercializadora en más de un 40%.',
  },
  {
    metric: '0 hallazgos',
    title: 'Auditoría y revisoría fiscal',
    description:
      'Implementamos controles contables y tributarios que llevaron a un cierre fiscal sin hallazgos ni contingencias relevantes.',
  },
]

export function Cases() {
  return (
    <section id="casos" className="bg-primary py-24 text-primary-foreground lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 flex items-center justify-center gap-3 text-sm font-medium uppercase tracking-[0.3em] text-accent">
            <span className="h-px w-10 bg-accent" />
            Casos de éxito
            <span className="h-px w-10 bg-accent" />
          </p>
          <h2 className="font-serif text-3xl font-medium leading-tight text-balance sm:text-4xl">
            Resultados que generan confianza
          </h2>
          <p className="mt-4 leading-relaxed text-primary-foreground/75">
            Historias reales de empresas que transformaron sus retos en
            oportunidades con nuestro acompañamiento.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {CASES.map((item) => (
            <article
              key={item.title}
              className="rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 p-8"
            >
              <p className="font-serif text-3xl font-semibold text-accent">
                {item.metric}
              </p>
              <h3 className="mt-4 font-serif text-lg font-semibold">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/75">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <figure className="mx-auto mt-16 max-w-3xl text-center">
          <Quote className="mx-auto mb-6 h-10 w-10 text-accent" />
          <blockquote className="font-serif text-2xl font-medium leading-relaxed text-balance sm:text-3xl">
            &ldquo;Encontramos en Vélez Arango & Asociados un aliado estratégico
            que entendió nuestra empresa de forma integral. Su asesoría fue
            decisiva para nuestra continuidad.&rdquo;
          </blockquote>
          <figcaption className="mt-6 text-sm text-primary-foreground/70">
            Gerente General · Empresa del sector manufacturero
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
