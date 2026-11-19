import { createFileRoute } from '@tanstack/react-router'
import { CheckCircle2, HandHeart, Users, Award } from 'lucide-react'
import { SectionHeading } from '@/site/SectionHeading'
import { ABOUT, SITE, DEPARTMENTS, CAPACITY } from '@/lib/madda-data'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <p className="eyebrow-light">About Us</p>
          <h1 className="mt-3 font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl">
            MADDA Medical Center
          </h1>
          <p className="mt-4 max-w-2xl font-serif text-lg italic text-white/90">
            {SITE.tagline}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading eyebrow="Our Story" title="A tertiary referral center for the Western Region" />
            <p className="mt-6 text-base leading-7 text-foreground">{ABOUT.intro}</p>
            <p className="mt-4 text-base leading-7 text-muted-foreground">{ABOUT.purpose}</p>
          </div>

          <div className="grid gap-3 rounded-2xl border border-border bg-card p-6 shadow-sm">
            <InfoRow label="Established" value={SITE.established} />
            <InfoRow label="Ownership" value={SITE.ownership} />
            <InfoRow label="Level" value={SITE.level} />
            <InfoRow label="License" value={SITE.license} />
            <InfoRow label="Beds" value={CAPACITY[0].value} />
            <InfoRow label="Wards" value={CAPACITY[1].value} />
          </div>
        </div>

        {/* Mission / Vision / Values */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          <ValueCard title="Mission" body={ABOUT.mission} />
          <ValueCard title="Vision" body={ABOUT.vision} />
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <p className="eyebrow">Core Values</p>
            <ul className="mt-4 space-y-2">
              {ABOUT.values.map((v) => (
                <li key={v} className="flex items-start gap-2 text-sm leading-6 text-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Achievements + Community + Partnerships */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          <ListCard icon={Award} title="Achievements" items={ABOUT.achievements} />
          <ListCard icon={HandHeart} title="Community Engagement" items={ABOUT.communityEngagement} />
          <ListCard icon={Users} title="Partnerships" items={ABOUT.partnerships} />
        </div>

        {/* Organizational Structure */}
        <div className="mt-16">
          <SectionHeading
            eyebrow="Organizational Structure"
            title="How MADDA is governed"
            copy="Our hospital is managed through a clear chain of departments and leadership."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {DEPARTMENTS.map((dept) => (
              <div
                key={dept}
                className="rounded-xl border border-border bg-card px-5 py-3 text-sm font-medium"
              >
                {dept}
              </div>
            ))}
          </div>
        </div>

        {/* Staff */}
        <div className="mt-16 rounded-3xl bg-muted/40 p-8 lg:p-12">
          <SectionHeading
            eyebrow="Human Resources"
            title="A qualified healthcare team"
            copy="MADDA employs qualified healthcare professionals across every department."
          />
          <div className="mt-6 flex flex-wrap gap-2">
            {ABOUT.staff.map((role) => (
              <span
                key={role}
                className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between border-b border-border/60 pb-2 last:border-0">
      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      <span className="text-sm font-semibold text-foreground">{value}</span>
    </div>
  )
}

function ValueCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <p className="eyebrow">{title}</p>
      <p className="mt-4 text-sm leading-6 text-muted-foreground">{body}</p>
    </div>
  )
}

function ListCard({
  icon: Icon,
  title,
  items,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  items: readonly string[]
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="flex items-center gap-2">
        <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
        <p className="font-serif text-lg font-bold">{title}</p>
      </div>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm leading-6 text-muted-foreground">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}