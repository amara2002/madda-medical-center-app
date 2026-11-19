import { createFileRoute } from '@tanstack/react-router'
import { SectionHeading } from '@/site/SectionHeading'
import { CalendarDays } from 'lucide-react'

export const Route = createFileRoute('/updates')({
  component: UpdatesPage,
})

const UPDATES = [
  {
    date: "November 2026",
    title: "MADDA Medical Center Officially Opens",
    body: "We are proud to announce the official opening of MADDA Medical Center, serving the Western Region as a tertiary referral and treatment center.",
  },
  {
    date: "October 2026",
    title: "Accreditation by the Liberia Medical and Dental Council",
    body: "MADDA Medical Center has been accredited by the LMDC, reaffirming our commitment to safe, quality, and ethical healthcare delivery.",
  },
  {
    date: "September 2026",
    title: "Community Health Outreach Programs Commenced",
    body: "Our team has begun conducting health education campaigns, immunization drives, and community screening programs across Garwula District.",
  },
]

function UpdatesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <p className="eyebrow-light">News & Updates</p>
          <h1 className="mt-3 font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl">
            MADDA in the Community
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/85">
            Milestones, announcements, and achievements from MADDA Medical Center.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
        <SectionHeading
          eyebrow="Latest updates"
          title="What's new at MADDA"
        />
        
        <div className="mt-10 space-y-6">
          {UPDATES.map((item, i) => (
            <div key={i} className="relative rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                <CalendarDays className="h-4 w-4" />
                {item.date}
              </div>
              <h3 className="mt-3 font-serif text-xl font-bold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}