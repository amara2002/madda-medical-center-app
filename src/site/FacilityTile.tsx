import { useState } from 'react'
import { ImageIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

export function FacilityTile({
  src,
  alt,
  caption,
  className,
}: {
  src: string
  alt: string
  caption: string
  className?: string
}) {
  const [failed, setFailed] = useState(false)

  return (
    <figure
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-border bg-muted',
        className
      )}
    >
      <div className="aspect-[4/3] w-full">
        {failed ? (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-primary/10 via-muted to-secondary/10 text-muted-foreground">
            <ImageIcon className="h-8 w-8" aria-hidden="true" />
            <p className="px-4 text-center text-xs font-medium">
              Photograph pending management approval
            </p>
          </div>
        ) : (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            onError={() => setFailed(true)}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        )}
      </div>
      <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 pb-3 pt-8 text-sm font-semibold text-white">
        {caption}
      </figcaption>
    </figure>
  )
}