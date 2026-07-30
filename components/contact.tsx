'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, MessageCircle, Check } from 'lucide-react'

const WHATSAPP_NUMBER = '573000000000'

const CONTACT_INFO = [
  {
    icon: MapPin,
    label: 'Dirección',
    value: 'Cra. 43A #1-50, Torre Empresarial, Medellín, Colombia',
  },
  { icon: Phone, label: 'Teléfono', value: '+57 300 000 0000' },
  { icon: Mail, label: 'Correo', value: 'contacto@velezarango.com' },
  { icon: Clock, label: 'Horario', value: 'Lun a Vie · 8:00 a.m. – 6:00 p.m.' },
]

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contacto" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.3em] text-accent">
              <span className="h-px w-10 bg-accent" />
              Contacto
            </p>
            <h2 className="font-serif text-3xl font-medium leading-tight text-balance text-primary sm:text-4xl">
              Conversemos sobre el futuro de tu empresa
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
              Agenda una consulta con nuestro equipo. Te responderemos de forma
              oportuna y confidencial.
            </p>

            <dl className="mt-10 space-y-6">
              {CONTACT_INFO.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-primary">
                      {item.label}
                    </dt>
                    <dd className="text-sm text-muted-foreground">{item.value}</dd>
                  </div>
                </div>
              ))}
            </dl>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" />
              Escríbenos por WhatsApp
            </a>

            <div className="mt-8 overflow-hidden rounded-lg border border-border">
              <iframe
                title="Ubicación de Vélez Arango & Asociados"
                src="https://www.google.com/maps?q=Medellin,Colombia&output=embed"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-8 lg:p-10">
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Check className="h-7 w-7" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-primary">
                  ¡Gracias por contactarnos!
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  Hemos recibido tu mensaje. Un asesor de Vélez Arango &
                  Asociados se pondrá en contacto contigo muy pronto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="name" label="Nombre completo" type="text" required />
                  <Field id="company" label="Empresa" type="text" />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="email" label="Correo electrónico" type="email" required />
                  <Field id="phone" label="Teléfono" type="tel" />
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm font-medium text-primary"
                  >
                    Servicio de interés
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
                  >
                    <option>Reestructuración Empresarial</option>
                    <option>Soluciones Financieras</option>
                    <option>Consultoría Empresarial</option>
                    <option>Servicios Contables y Tributarios</option>
                    <option>Asesoría Jurídica</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-primary"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full resize-none rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
                    placeholder="Cuéntanos brevemente cómo podemos ayudarte"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Enviar mensaje
                </button>
                <p className="text-center text-xs text-muted-foreground">
                  Tus datos serán tratados de forma confidencial.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  id,
  label,
  type,
  required,
}: {
  id: string
  label: string
  type: string
  required?: boolean
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-primary">
        {label}
        {required && <span className="text-accent"> *</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
      />
    </div>
  )
}
