import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Manrope } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Vélez Arango & Asociados | Consultoría Financiera, Empresarial y Jurídica',
  description:
    'Firma boutique especializada en reestructuración empresarial, soluciones financieras, consultoría empresarial, servicios contables y tributarios, y asesoría jurídica. Confianza, experiencia y profesionalismo.',
  keywords: [
    'consultoría financiera',
    'Ley 1116',
    'reorganización empresarial',
    'factoring',
    'confirming',
    'capital de trabajo',
    'auditoría',
    'revisoría fiscal',
    'consultoría empresarial',
    'asesoría jurídica',
  ],
  generator: 'v0.app',
  openGraph: {
    title: 'Vélez Arango & Asociados',
    description:
      'Soluciones financieras, empresariales y jurídicas para empresas que buscan crecer con confianza.',
    type: 'website',
    locale: 'es_CO',
  },
}

export const viewport: Viewport = {
  themeColor: '#233B5D',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`light ${cormorant.variable} ${manrope.variable}`}>
      <body className="bg-background font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
