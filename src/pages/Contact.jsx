import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react'
import Tag from '../components/Tag'
import Button from '../components/Button'

const info = [
  { icon: Phone, title: 'Call Us', value: '+234 803 603 2275', href: 'tel:+2348036032275' },
  { icon: Mail, title: 'Email Us', value: 'info@myc-innovation.com', href: 'mailto:info@myc-innovation.com' },
  { icon: MapPin, title: 'Location', value: 'Nigeria', href: null },
  { icon: Clock, title: 'Working Hours', value: 'Mon – Sat, 8am – 6pm', href: null },
]

const services = [
  'Solar Power Systems',
  'CCTV & Security Systems',
  'Building Construction',
  'General Contracting',
  'MYC Academy Training',
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: services[0],
    message: '',
  })
  const [sent, setSent] = useState(false)

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = encodeURIComponent(
      `Enquiry: ${form.service}\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`,
    )
    window.open(`https://wa.me/2348036032275?text=${text}`, '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  return (
    <div>
      <section className="bg-brand-green-light/40">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center lg:px-8">
          <Tag>Contact Us</Tag>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Let’s Talk About Your Project
          </h1>
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-muted">
            Whether it’s solar, security, construction, or Academy training —
            tell us what you need and we’ll respond within 48 hours.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {info.map((item) => {
                const Icon = item.icon
                const content = (
                  <div className="flex items-start gap-4 rounded-2xl border border-ink/8 p-5">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-green-light">
                      <Icon size={20} className="text-brand-green-dark" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ink">{item.title}</p>
                      <p className="mt-1 text-sm text-muted">{item.value}</p>
                    </div>
                  </div>
                )
                return item.href ? (
                  <a key={item.title} href={item.href}>
                    {content}
                  </a>
                ) : (
                  <div key={item.title}>{content}</div>
                )
              })}
            </div>

            <div className="mt-8 rounded-2xl bg-brand-blue p-6">
              <p className="text-sm font-semibold text-white">RC-NO 1604123</p>
              <p className="mt-1 text-sm text-white/60">
                Myc Innovations Concept NG LTD — a registered Nigerian
                technical & general contracting company.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-ink/8 p-6 sm:p-10">
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                <CheckCircle2 size={48} className="text-brand-green" />
                <h3 className="mt-4 text-xl font-semibold text-ink">
                  WhatsApp should now be open
                </h3>
                <p className="mt-2 max-w-sm text-sm text-muted">
                  Just hit send there and our team will get back to you
                  within 48 hours. You can also reach us directly at{' '}
                  <a href="tel:+2348036032275" className="font-semibold text-brand-green">
                    +234 803 603 2275
                  </a>
                  .
                </p>
                <Button variant="outline" className="mt-6" onClick={() => setSent(false)}>
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-ink">Full Name</label>
                    <input
                      required
                      value={form.name}
                      onChange={update('name')}
                      type="text"
                      placeholder="Your name"
                      className="mt-2 w-full rounded-xl border border-ink/15 px-4 py-3 text-sm outline-none focus:border-brand-green"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-ink">Phone Number</label>
                    <input
                      required
                      value={form.phone}
                      onChange={update('phone')}
                      type="tel"
                      placeholder="+234"
                      className="mt-2 w-full rounded-xl border border-ink/15 px-4 py-3 text-sm outline-none focus:border-brand-green"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-ink">Email Address</label>
                  <input
                    required
                    value={form.email}
                    onChange={update('email')}
                    type="email"
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-xl border border-ink/15 px-4 py-3 text-sm outline-none focus:border-brand-green"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-ink">Service Interested In</label>
                  <select
                    value={form.service}
                    onChange={update('service')}
                    className="mt-2 w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm outline-none focus:border-brand-green"
                  >
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-ink">Message</label>
                  <textarea
                    required
                    value={form.message}
                    onChange={update('message')}
                    rows={5}
                    placeholder="Tell us about your project or enquiry..."
                    className="mt-2 w-full resize-none rounded-xl border border-ink/15 px-4 py-3 text-sm outline-none focus:border-brand-green"
                  />
                </div>

                <Button type="submit" className="w-full sm:w-auto">
                  Send Message <ArrowRight size={16} />
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
