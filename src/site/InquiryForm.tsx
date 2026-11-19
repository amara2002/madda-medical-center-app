import { useState, type FormEvent } from 'react'
import { toast } from 'sonner'
import { Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { SITE } from '@/lib/madda-data'

export function InquiryForm() {
  const [sending, setSending] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    if (data.get('_gotcha')) {
      toast.success('Message sent. Thank you.')
      form.reset()
      return
    }

    setSending(true)

    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    const subject = encodeURIComponent(`Website inquiry from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`

    toast.success('Message ready — your email app will open to send it.')
    form.reset()
    setSending(false)
  }

  return (
    <form onSubmit={handleSubmit} className="relative space-y-5" noValidate>
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="_gotcha">Do not fill this field</label>
        <input id="_gotcha" name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="name">Full name</Label>
        <Input id="name" name="name" required autoComplete="name" placeholder="Your name" />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="email">Email address</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" required rows={5} placeholder="How can we help?" />
      </div>

      <p className="text-xs leading-5 text-muted-foreground">
        Please do not submit private medical information through this form. For
        medical emergencies, contact the hospital directly.
      </p>

      <Button type="submit" size="lg" disabled={sending} className="w-full sm:w-auto">
        <Send className="h-4 w-4" aria-hidden="true" />
        {sending ? 'Sending…' : 'Send inquiry'}
      </Button>
    </form>
  )
}