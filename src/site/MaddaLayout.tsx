import { Link, useLocation } from '@tanstack/react-router'
import { ArrowUpRight, Menu, Phone, X } from 'lucide-react'
import { useEffect, useState, type ReactNode } from 'react'
import { NAV, SITE } from '@/lib/madda-data'

export function MaddaLayout({ children }: { children: ReactNode }) {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 420)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-dvh bg-background text-foreground">
      {/* Top strip */}
      <div className="bg-primary px-4 py-2 text-center text-xs font-semibold tracking-wide text-primary-foreground">
        <span className="font-bold text-accent">NEWLY OPENED</span> · Serving Grand Cape Mount County since September 2026 · <a href={`tel:${SITE.phones[0].tel}`} className="underline hover:text-accent">Call {SITE.phones[0].label}</a>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/80 bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-md transition-transform duration-200 group-hover:scale-105">
              <span className="text-2xl font-bold leading-none">M</span>
            </div>
            <div>
              <p className="font-serif text-lg font-bold leading-none tracking-tight text-primary">
                {SITE.shortName}
              </p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                Medical Center
              </p>
            </div>
          </Link>

          <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`nav-link text-sm font-semibold transition-colors ${
                  location.pathname === item.to
                    ? 'nav-link-active text-primary'
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-bold text-accent-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              Contact Hospital <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-xl p-2 text-primary hover:bg-muted lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <nav
            aria-label="Mobile navigation"
            className="border-t border-border bg-background px-5 py-4 lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-semibold ${
                    location.pathname === item.to
                      ? 'bg-secondary text-primary'
                      : 'text-muted-foreground hover:bg-muted hover:text-primary'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-bold text-primary-foreground"
              >
                Contact Hospital <Phone className="h-4 w-4" />
              </Link>
            </div>
          </nav>
        )}
      </header>

      {children}

      {/* Footer */}
      <footer className="bg-[oklch(0.2_0.04_242)] text-primary-foreground mt-auto">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-accent text-accent-foreground">
                <span className="text-2xl font-bold">M</span>
              </div>
              <div>
                <p className="font-serif text-lg font-bold">MADDA</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary-foreground/60">
                  Medical Center
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-xs font-serif text-xl italic text-primary-foreground/90">
              {SITE.tagline}.
            </p>
            <p className="mt-4 max-w-xs text-sm leading-6 text-primary-foreground/65">
              {SITE.description}
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-accent">Explore</p>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
              {NAV.slice(0, 4).map((item) => (
                <Link key={item.to} to={item.to} className="transition-colors hover:text-accent">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-accent">Services</p>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
              <Link to="/services" className="hover:text-accent">Outpatient Services</Link>
              <Link to="/services" className="hover:text-accent">Surgical Services</Link>
              <Link to="/services" className="hover:text-accent">Maternity Care</Link>
              <Link to="/services" className="hover:text-accent">Laboratory & Imaging</Link>
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-accent">Find us</p>
            <address className="not-italic text-sm leading-7 text-primary-foreground/70">
              {SITE.address.street}<br />
              {SITE.address.district}<br />
              {SITE.address.county}, {SITE.address.country}
            </address>
            <div className="mt-4 flex flex-col gap-2 text-sm font-semibold">
              {SITE.phones.map((p) => (
                <a key={p.tel} href={`tel:${p.tel}`} className="hover:text-accent">
                  {p.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-primary-foreground/50 sm:flex-row sm:items-center sm:justify-between lg:px-8">
            <p>© {new Date().getFullYear()} MADDA Medical Center. All rights reserved.</p>
            <p>Serving with compassion and dignity.</p>
          </div>
        </div>
      </footer>

      {/* Floating Actions */}
      {showTop && (
        <button
          type="button"
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-5 right-5 z-30 grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:-translate-y-1"
        >
          <ArrowUpRight className="h-5 w-5 -rotate-45" />
        </button>
      )}

      <a
        href={`tel:${SITE.phones[0].tel}`}
        className="fixed bottom-5 left-5 z-30 flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-lg transition-transform hover:-translate-y-1 lg:hidden"
        aria-label={`Call MADDA Medical Center at ${SITE.phones[0].label}`}
      >
        <Phone className="h-4 w-4" />
        Call Us
      </a>
    </div>
  )
}