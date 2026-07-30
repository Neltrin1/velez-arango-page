const PARTNERS = [
  'Banca de Inversión',
  'Gremio Empresarial',
  'Firma de Auditoría',
  'Cámara de Comercio',
  'Fondo de Capital',
  'Red Jurídica',
]

export function Partners() {
  return (
    <section id="aliados" className="bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 flex items-center justify-center gap-3 text-sm font-medium uppercase tracking-[0.3em] text-accent">
            <span className="h-px w-10 bg-accent" />
            Aliados estratégicos
            <span className="h-px w-10 bg-accent" />
          </p>
          <h2 className="font-serif text-3xl font-medium leading-tight text-balance text-primary sm:text-4xl">
            Una red que multiplica el valor
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Trabajamos de la mano con instituciones y firmas aliadas para ofrecer
            soluciones completas y de alto nivel.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {PARTNERS.map((partner) => (
            <div
              key={partner}
              className="flex items-center justify-center rounded-lg border border-border bg-card px-4 py-8 text-center text-sm font-medium text-muted-foreground"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
