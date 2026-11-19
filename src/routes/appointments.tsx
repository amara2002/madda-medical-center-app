import { createFileRoute, Link } from '@tanstack/react-router'
import { Phone, MessageSquare, MapPin, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { SectionHeading } from '@/site/SectionHeading'
import { Button } from '@/components/ui/button'
import { SITE, DIRECTIONS_URL } from '@/lib/madda-data'

export const Route = createFileRoute('/appointments')({
  component: AppointmentsPage,
})

function AppointmentsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <p className="eyebrow-light">Appointments</p>
          <h1 className="mt-3 font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Request an Appointment
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/85">
            Choose the method that works best for you. Our staff will confirm your
            appointment request promptly.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <SectionHeading
          eyebrow="How to book"
          title="Four ways to reach us"
          copy="We do not currently offer automated online scheduling. Please use one of the contact methods below to request your visit."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Call */}
          <div className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md">
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="font-serif text-lg font-bold">Call Us</h3>
            <p className="mt-2 flex-1 text-sm text-muted-foreground">
              Speak directly with our front desk to schedule your visit.
            </p>
            <div className="mt-4 flex flex-col gap-2">
              {SITE.phones.map((p) => (
                <a key={p.tel} href={`tel:${p.tel}`} className="text-sm font-semibold text-primary hover:underline">
                  {p.label}
                </a>
              ))}
            </div>
          </div>

          {/* WhatsApp */}
          <div className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md">
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-green-500/10 text-green-600">
              <MessageSquare className="h-6 w-6" />
            </div>
            <h3 className="font-serif text-lg font-bold">Send a Message</h3>
            <p className="mt-2 flex-1 text-sm text-muted-foreground">
              Send an SMS or WhatsApp message to our primary contact number.
            </p>
            <Button asChild variant="outline" className="mt-4 w-full">
              <a href={`https://wa.me/${SITE.phones[0].tel.replace('+', '')}`} target="_blank" rel="noopener noreferrer">
                Message Us
              </a>
            </Button>
          </div>

          {/* Walk-in */}
          <div className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md">
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-accent/20 text-accent-foreground">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="font-serif text-lg font-bold">Walk In</h3>
            <p className="mt-2 flex-1 text-sm text-muted-foreground">
              Visit our front desk during operating hours to book in person.
            </p>
            <Button asChild variant="outline" className="mt-4 w-full">
              <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
                Get Directions <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Online */}
          <div className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md">
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h3 className="font-serif text-lg font-bold">Send an Inquiry</h3>
            <p className="mt-2 flex-1 text-sm text-muted-foreground">
              Use our secure contact form to request an appointment. Staff will call you back.
            </p>
            <Button asChild variant="outline" className="mt-4 w-full">
              <Link to="/contact">Send Request</Link>
            </Button>
          </div>
        </div>

        <div className="mt-14 rounded-2xl border border-border bg-muted/40 p-6 lg:p-8">
          <h3 className="font-serif text-xl font-bold">What happens next?</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3"><span className="font-bold text-primary">1.</span> You call, message, or submit a request.</li>
            <li className="flex gap-3"><span className="font-bold text-primary">2.</span> Our staff reviews the request and confirms your preferred date and time.</li>
            <li className="flex gap-3"><span className="font-bold text-primary">3.</span> You receive confirmation via phone or SMS before your visit.</li>
          </ul>
        </div>
      </section>
    </>
  )
}