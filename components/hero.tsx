import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden">
      <img
        src="/images/hero-office.png"
        alt="Oficina corporativa elegante de Vélez Arango & Asociados"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-primary/70" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(35,59,93,0.55) 0%, rgba(35,59,93,0.75) 100%)',
        }}
      />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-28 pb-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-6 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.3em] text-accent">
            <span className="h-px w-10 bg-accent" />
            Firma boutique de consultoría
          </p>
          <h1 className="font-serif text-4xl font-medium leading-tight text-balance text-background sm:text-5xl lg:text-6xl">
            Soluciones financieras, empresariales y jurídicas con visión integral
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-background/80">
            En Vélez Arango & Asociados integramos consultoría financiera,
            estructuración empresarial y asesoría jurídica para acompañar a tu
            empresa con confianza, experiencia y profesionalismo.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              Agenda tu consulta
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-background/40 px-7 py-3.5 text-sm font-semibold text-background transition-colors hover:bg-background/10"
            >
              Conoce nuestros servicios
            </a>
          </div>
        </div>

        <dl className="mt-16 grid max-w-3xl grid-cols-2 gap-8 border-t border-background/20 pt-8 sm:grid-cols-4">
          {[
            { value: '+20', label: 'Años de experiencia' },
            { value: '+350', label: 'Empresas asesoradas' },
            { value: '5', label: 'Áreas de práctica' },
            { value: '100%', label: 'Enfoque a la medida' },
          ].map((stat) => (
            <div key={stat.label}>
              <dt className="font-serif text-3xl font-semibold text-accent">
                {stat.value}
              </dt>
              <dd className="mt-1 text-sm text-background/70">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
