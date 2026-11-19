import { createFileRoute } from '@tanstack/react-router'
import { SectionHeading } from '@/site/SectionHeading'
import { Button } from '@/components/ui/button'
import { Link } from '@tanstack/react-router'

export const Route = createFileRoute('/faq')({
  component: FaqPage,
})

const FAQS = [
  {
    q: "Where is MADDA Medical Center located?",
    a: "We are located at Vonzula, Bendu Road, Garwula District, Grand Cape Mount County, Liberia."
  },
  {
    q: "What are your operating hours?",
    a: "Our outpatient clinics see 75 patients per day. Please call ahead to confirm the specific department hours you need."
  },
  {
    q: "Do you accept insurance or HMO?",
    a: "We are currently finalizing insurance partnerships. Please contact our front desk to confirm your specific provider before your visit."
  },
  {
    q: "How do I book an appointment?",
    a: "You can call us directly, send a WhatsApp message, visit our front desk, or fill out the inquiry form on our Contact page. Staff will confirm your appointment."
  },
  {
    q: "Is emergency care available 24/7?",
    a: "Emergency care is available at our facility. For urgent assistance, please call our main line immediately."
  },
  {
    q: "Do you have an ambulance service?",
    a: "Yes, MADDA Medical Center operates an ambulance for patient transport. Please call for availability and arrangement."
  }
]

function FaqPage() {
  return (
    <>
      <section className="page-hero">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <p className="eyebrow-light">Frequently Asked Questions</p>
          <h1 className="mt-3 font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl">
            How can we help?
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/85">
            Answers to common questions about visiting MADDA Medical Center.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <details key={i} className="group rounded-2xl border border-border bg-card p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between font-serif text-lg font-bold text-foreground">
                {faq.q}
                <span className="ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground group-open:bg-primary group-open:text-primary-foreground group-open:border-primary">
                  <svg className="h-3 w-3 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </span>
              </summary>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                {faq.a}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-muted/40 p-6 text-center shadow-sm">
          <h3 className="font-serif text-xl font-bold">Still have questions?</h3>
          <p className="mt-2 text-sm text-muted-foreground">Our team is ready to help you.</p>
          <Button asChild className="mt-4">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </>
  )
}