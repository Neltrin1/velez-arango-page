import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Team } from '@/components/team'
import { Cases } from '@/components/cases'
import { Partners } from '@/components/partners'
import { Blog } from '@/components/blog'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Services />
        <Team />
        <Cases />
        <Partners />
        <Blog />
        <Contact />
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </>
  )
}
