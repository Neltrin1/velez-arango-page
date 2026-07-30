import { ArrowUpRight } from 'lucide-react'

const POSTS = [
  {
    image: '/images/blog-1.png',
    category: 'Reestructuración',
    date: '12 May 2026',
    title: 'Claves de la Ley 1116 para la reorganización empresarial',
    excerpt:
      'Qué debes saber antes de iniciar un proceso de reorganización y cómo proteger la continuidad de tu empresa.',
  },
  {
    image: '/images/blog-2.png',
    category: 'Finanzas',
    date: '28 Abr 2026',
    title: 'Factoring y confirming: liquidez sin comprometer tu operación',
    excerpt:
      'Estrategias de financiación de capital de trabajo que optimizan tu flujo de caja de forma sostenible.',
  },
  {
    image: '/images/blog-3.png',
    category: 'Jurídico',
    date: '15 Abr 2026',
    title: 'Revisoría fiscal: más que un requisito, una ventaja',
    excerpt:
      'Cómo una auditoría y revisoría fiscal bien estructurada protege el patrimonio y genera confianza.',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="mb-4 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.3em] text-accent">
              <span className="h-px w-10 bg-accent" />
              Blog
            </p>
            <h2 className="font-serif text-3xl font-medium leading-tight text-balance text-primary sm:text-4xl">
              Perspectivas y conocimiento para tu empresa
            </h2>
          </div>
          <a
            href="#contacto"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-primary"
          >
            Ver todos los artículos
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {POSTS.map((post) => (
            <article
              key={post.title}
              className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card"
            >
              <div className="overflow-hidden">
                <img
                  src={post.image || '/placeholder.svg'}
                  alt={post.title}
                  className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center gap-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  <span className="text-accent">{post.category}</span>
                  <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
                  <span>{post.date}</span>
                </div>
                <h3 className="font-serif text-lg font-semibold leading-snug text-primary">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <a
                  href="#contacto"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-accent"
                >
                  Leer más
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
