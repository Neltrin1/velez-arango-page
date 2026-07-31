import {
  RefreshCcw,
  TrendingUp,
  Briefcase,
  Calculator,
  Scale,
  ArrowUpRight,
} from 'lucide-react'

const SERVICES = [
  {
    icon: RefreshCcw,
    title: 'Diagnóstico Estratégico',
    description:
      'Análisis financiero y legal, Evaluación de riesgos, Ruta estratégica',
  },
  {
    icon: TrendingUp,
    title: 'Soluciones de Financiación',
    description:
      'Factoring, confirming, Créditos empresariales y Anticipo de contratos y órdenes de compra.',
  },
  {
    icon: Briefcase,
    title: 'Optimización Empresarial',
    description:
      'Reingeniería financiera, Optimización del flujo de caja y Reducción de costos.',
  },
  {
    icon: Calculator,
    title: 'Reorganización Empresarial',
    description:
      'Diagnóstico de insolvencia, Negociación con acreedores y Acuerdos de pago.',
  },
  {
    icon: Scale,
    title: 'Liquidación Empresarial',
    description:
      'Evaluación de viabilidad, Gestión de activos y Acompañamiento integral.',
  },
]

export function Services() {
  return (
    <section id="servicios" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 flex items-center justify-center gap-3 text-sm font-medium uppercase tracking-[0.3em] text-accent">
            <span className="h-px w-10 bg-accent" />
            Servicios
            <span className="h-px w-10 bg-accent" />
          </p>
          <h2 className="font-serif text-3xl font-medium leading-tight text-balance text-primary sm:text-4xl">
            Áreas de práctica al servicio de tu empresa
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Integramos las disciplinas financiera, empresarial y jurídica en una
            sola firma para ofrecerte soluciones completas.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="group flex flex-col rounded-lg border border-border bg-card p-8 transition-colors hover:border-accent"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-md bg-primary text-primary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-primary">
                {service.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <a
                href="#contacto"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-primary"
              >
                Solicitar información
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </article>
          ))}

          <article className="flex flex-col justify-center rounded-lg bg-primary p-8 text-primary-foreground">
            <h3 className="font-serif text-xl font-semibold">
              ¿Necesitas una solución a la medida?
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/80">
              Diseñamos estrategias integrales que combinan varias de nuestras
              áreas de práctica según las necesidades de tu empresa.
            </p>
            <a
              href="#contacto"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              Hablemos
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}
