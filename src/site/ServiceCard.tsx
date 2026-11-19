import {
  Stethoscope,
  Bed,
  Siren,
  Scissors,
  Baby,
  Heart,
  Activity,
  FlaskConical,
  ScanLine,
  Waves,
  Syringe,
  type LucideIcon,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

type IconKey =
  | 'stethoscope'
  | 'bed'
  | 'siren'
  | 'scalpel'
  | 'baby'
  | 'heart'
  | 'activity'
  | 'flask'
  | 'scan'
  | 'waves'
  | 'syringe'

const ICON_MAP: Record<IconKey, LucideIcon> = {
  stethoscope: Stethoscope,
  bed: Bed,
  siren: Siren,
  scalpel: Scissors,
  baby: Baby,
  heart: Heart,
  activity: Activity,
  flask: FlaskConical,
  scan: ScanLine,
  waves: Waves,
  syringe: Syringe,
}

type Service = {
  slug: string
  title: string
  summary: string
  icon: IconKey
}

export function ServiceCard({ service }: { service: Service }) {
  const Icon = ICON_MAP[service.icon] ?? Stethoscope
  return (
    <Card className="group h-full transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md">
      <CardHeader className="pb-3">
        <div className="mb-3 grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>
        <CardTitle className="font-serif text-lg leading-tight">{service.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-6 text-muted-foreground">{service.summary}</p>
      </CardContent>
    </Card>
  )
}