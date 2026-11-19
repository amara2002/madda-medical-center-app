import { createFileRoute } from '@tanstack/react-router'
import { MapPin, Phone, Mail, Clock, ArrowUpRight, AlertTriangle } from 'lucide-react'
import { SectionHeading } from '@/site/SectionHeading'
import { InquiryForm } from '@/site/InquiryForm'
import { Button } from '@/components/ui/button'
import { SITE, DIRECTIONS_URL } from '@/lib/madda-data'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <p className="eyebrow-light">Contact Us</p>
          <h1 className="mt-3 font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl">
            We're here to help
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/85">
            Reach us by phone, visit us in person, or send a general inquiry using
            the form below.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-4">
            <ContactCard icon={MapPin} label="Address">
              {SITE.address.street}<br />
              {SITE.address.district}<br />
              {SITE.address.county}, {SITE.address.country}
            </ContactCard>

            <ContactCard icon={Phone} label="Phone">
              {SITE.phones.map((p) => (
                <a key={p.tel} href={`tel:${p.tel}`} className="block text-primary hover:underline">
                  {p.label}
                </a>
              ))}
            </ContactCard>

            <ContactCard icon={Mail} label="Email">
              <a href={`mailto:${SITE.email}`} className="text-primary hover:underline break-all">
                {SITE.email}
              </a>
            </ContactCard>

            <ContactCard icon={Clock} label="Outpatient Clinics">
              {SITE.hours}
            </ContactCard>

            <Button asChild size="lg" variant="secondary" className="w-full">
              <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
                Get directions
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>

            <div className="flex items-start gap-3 rounded-2xl border border-accent/50 bg-accent/10 p-4 text-sm">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-accent-foreground" aria-hidden="true" />
              <p className="leading-6 text-foreground">
                <strong>Emergency:</strong> Emergency care is available at our
                facility. For urgent assistance, call either number above.
              </p>
            </div>
          </div>

          <div id="contact-form" className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8 scroll-mt-28">
            <SectionHeading
              eyebrow="General inquiry"
              title="Send a message"
              copy="We respond to general inquiries during working hours."
            />
            <div className="mt-6">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function ContactCard({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean }>
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="contact-card">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" aria-hidden={true} />
      </div>
      <div className="text-sm leading-6">
        <p className="font-semibold text-foreground">{label}</p>
        <div className="mt-1 text-muted-foreground">{children}</div>
      </div>
    </div>
  )
}