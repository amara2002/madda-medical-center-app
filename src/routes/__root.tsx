import { createRootRoute, Outlet, Link } from '@tanstack/react-router'
import { MaddaLayout } from '@/site/MaddaLayout'
import { Toaster } from '@/components/ui/sonner'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'MADDA Medical Center — Your Health, Our Priority' },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundPage,
})

function RootComponent() {
  return (
    <MaddaLayout>
      <Outlet />
      <Toaster position="top-center" richColors />
    </MaddaLayout>
  )
}

function NotFoundPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-20 text-center">
      <p className="eyebrow">404 — Page Not Found</p>
      <h1 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">
        This page doesn't exist
      </h1>
      <p className="mt-4 text-base text-muted-foreground">
        The page you're looking for may have been moved or never existed.
      </p>
      <div className="mt-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground hover:bg-primary/90"
        >
          Return to Home
        </Link>
      </div>
    </div>
  )
}