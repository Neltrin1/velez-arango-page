import { MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '573000000000'

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition-transform hover:scale-105"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="sr-only">Escríbenos por WhatsApp</span>
    </a>
  )
}
