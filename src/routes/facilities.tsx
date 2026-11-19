import { createFileRoute } from '@tanstack/react-router'
import { SectionHeading } from '@/site/SectionHeading'
import { FacilityTile } from '@/site/FacilityTile'
import { hospitalImages, CAPACITY } from '@/lib/madda-data'

export const Route = createFileRoute('/facilities')({
  component: FacilitiesPage,
})

function FacilitiesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <p className="eyebrow-light">Our Facilities</p>
          <h1 className="mt-3 font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl">
            A look inside MADDA
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/85">
            Our wards, laboratory, imaging room, maternal care, operating theater,
            and intensive care unit — photographed with the approval of hospital management.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        {/* Capacity strip */}
        <div className="mb-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {CAPACITY.map((stat) => (
            <div key={stat.label} className="bg-card px-4 py-6 text-center">
              <p className="font-serif text-3xl font-bold text-primary">{stat.value}</p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {hospitalImages.gallery.map((img) => (
            <FacilityTile
              key={img.src}
              src={img.src}
              alt={img.alt}
              caption={img.caption}
            />
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-border bg-muted/40 p-6">
          <SectionHeading
            eyebrow="Please note"
            title="Photographs"
            copy="Only photographs approved for publication by hospital management appear on this page. Additional facility images will be added as they are approved."
          />
        </div>
      </section>
    </>
  )
}