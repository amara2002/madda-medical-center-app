import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowUpRight, MapPin, Phone, Clock } from 'lucide-react'
import { SectionHeading } from '@/site/SectionHeading'
import { ServiceCard } from '@/site/ServiceCard'
import { Button } from '@/components/ui/button'
import {
  SITE,
  CAPACITY,
  CLINICAL_SERVICES,
  DIRECTIONS_URL,
  hospitalImages,
} from '@/lib/madda-data'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm ring-1 ring-white/20">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse"></span>
              Now Open · November 2026
            </div>
            
            <h1 className="mt-6 font-serif text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {SITE.name}
            </h1>
            <p className="mt-4 font-serif text-xl italic text-white/90">
              {SITE.tagline}
            </p>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/80">
              {SITE.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href={`tel:${SITE.phones[0].tel}`}>
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call {SITE.phones[0].label}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                <Link to="/services">
                  Our Services
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/20">
            <img
              src={hospitalImages.hero.src}
              alt={hospitalImages.hero.alt}
              className="h-full w-full object-cover"
              onError={(e) => {
                ;(e.currentTarget as HTMLImageElement).style.display = 'none'
              }}
            />
          </div>
        </div>
      </section>

      {/* Capacity stats */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl gap-px bg-border sm:grid-cols-2 lg:grid-cols-5">
          {CAPACITY.map((stat) => (
            <div key={stat.label} className="bg-card px-6 py-8 text-center">
              <p className="font-serif text-4xl font-bold text-primary">{stat.value}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick appointment action (Kelinah Style) */}
      <section className="bg-muted/40 py-12">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 rounded-3xl border border-border bg-card p-8 shadow-sm sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-8 lg:p-10">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary text-primary-foreground">
              <Clock className="h-7 w-7" />
            </div>
            <div>
              <p className="eyebrow">Outpatient clinics</p>
              <h2 className="mt-1 font-serif text-2xl font-bold">75 patients seen every day</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Walk in during operating hours or call ahead to plan your visit.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button asChild size="lg">
                <a href={`tel:${SITE.phones[0].tel}`}>
                  <Phone className="h-4 w-4" />
                  Call to book
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact" hash="contact-form">Send an inquiry</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro + contact */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Who we are"
              title="Compassionate care, close to home."
              copy="MADDA Medical Center is a private tertiary healthcare facility serving as a referral and treatment center for patients across the Western Region. We are committed to accessible, dignified care for every patient."
            />
            <div className="mt-6">
              <Button asChild variant="link" className="px-0">
                <Link to="/about">Learn more about MADDA →</Link>
              </Button>
            </div>
          </div>

          <div className="space-y-3 rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <div className="text-sm leading-6">
                <p className="font-semibold text-foreground">Visit us</p>
                <p className="text-muted-foreground">
                  {SITE.address.street}, {SITE.address.district},<br />
                  {SITE.address.county}, {SITE.address.country}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <div className="text-sm leading-6">
                <p className="font-semibold text-foreground">Call us</p>
                {SITE.phones.map((p) => (
                  <a key={p.tel} href={`tel:${p.tel}`} className="block text-primary hover:underline">
                    {p.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <div className="text-sm leading-6">
                <p className="font-semibold text-foreground">Outpatient Clinics</p>
                <p className="text-muted-foreground">{SITE.hours}</p>
              </div>
            </div>
            <Button asChild variant="secondary" className="mt-2 w-full">
              <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
                Get directions
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="bg-muted/40 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="What we offer"
            title="Clinical services"
            copy="Comprehensive inpatient, outpatient, surgical, maternity, pediatric and internal medicine care."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CLINICAL_SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="mt-10">
            <Button asChild>
              <Link to="/services">
                View all services
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="rounded-3xl bg-primary px-8 py-12 text-center text-primary-foreground sm:px-12">
          <h2 className="font-serif text-3xl font-bold sm:text-4xl">
            Have a question for MADDA?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-primary-foreground/85">
            Send us a message and our team will respond as soon as possible.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground/40 hover:bg-primary-foreground/10">
              <Link to="/facilities">Our Facilities</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}