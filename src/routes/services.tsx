import { createFileRoute } from '@tanstack/react-router'
import { SectionHeading } from '@/site/SectionHeading'
import { ServiceCard } from '@/site/ServiceCard'
import { CLINICAL_SERVICES, DIAGNOSTIC_SERVICES } from '@/lib/madda-data'

export const Route = createFileRoute('/services')({
  component: ServicesPage,
})

function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <p className="eyebrow-light">Our Services</p>
          <h1 className="mt-3 font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Care you can count on
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/85">
            Clinical and diagnostic services offered at MADDA Medical Center — from
            outpatient care and surgery to laboratory, imaging and immunization.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <SectionHeading
          eyebrow="Clinical Services"
          title="Medical care across every stage of life"
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CLINICAL_SERVICES.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <section className="bg-muted/40 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Diagnostic Services"
            title="Accurate diagnosis, on-site"
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {DIAGNOSTIC_SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="rounded-2xl border border-border bg-muted/40 p-6 lg:p-8">
          <SectionHeading
            eyebrow="Please note"
            title="Laboratory test availability"
            copy="Specific laboratory tests are confirmed by our clinical staff. Please call the hospital to verify whether a specific test is currently available."
          />
        </div>
      </section>
    </>
  )
}