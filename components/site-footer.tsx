import { LinkedinIcon, InstagramIcon, FacebookIcon } from '@/components/social-icons'

const FOOTER_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Casos de éxito', href: '#casos' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contacto', href: '#contacto' },
]

const SERVICES = [
  'Reestructuración Empresarial',
  'Soluciones Financieras',
  'Consultoría Empresarial',
  'Servicios Contables y Tributarios',
  'Asesoría Jurídica',
]

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex flex-col leading-none">
              <span className="font-serif text-2xl font-semibold tracking-wide">
                Vélez Arango
              </span>
              <span className="text-xs uppercase tracking-[0.35em] text-accent">
                & Asociados
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
              Firma boutique especializada en consultoría financiera,
              estructuración empresarial y asesoría jurídica.
            </p>
            <div className="mt-6 flex gap-3">
              {[LinkedinIcon, InstagramIcon, FacebookIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#contacto"
                  aria-label="Red social de Vélez Arango & Asociados"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-primary-foreground/20 text-primary-foreground/80 transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Navegación
            </h3>
            <ul className="mt-5 space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Servicios
            </h3>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((service) => (
                <li key={service}>
                  <a
                    href="#servicios"
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Contacto
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-primary-foreground/70">
              <li>Cra. 43A #1-50, Torre Empresarial</li>
              <li>Medellín, Colombia</li>
              <li>+57 300 000 0000</li>
              <li>contacto@velezarango.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/15 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-primary-foreground/60">
            © {new Date().getFullYear()} Vélez Arango & Asociados. Todos los
            derechos reservados.
          </p>
          <div className="flex gap-6 text-xs text-primary-foreground/60">
            <a href="#" className="transition-colors hover:text-primary-foreground">
              Política de privacidad
            </a>
            <a href="#" className="transition-colors hover:text-primary-foreground">
              Términos y condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
