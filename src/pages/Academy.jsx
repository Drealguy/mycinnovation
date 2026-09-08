import {
  Sun,
  Zap,
  ClipboardCheck,
  ArrowRight,
  Clock,
  Calendar,
  Wallet,
  Users,
  Wrench,
  Award,
  AlertCircle,
} from 'lucide-react'
import Tag from '../components/Tag'
import Button from '../components/Button'
import IconPanel from '../components/IconPanel'

const curriculum = [
  {
    icon: Sun,
    title: 'Solar PV System Design/Installation',
    desc: 'How to plan and install a complete solar PV system from the ground up.',
  },
  {
    icon: Zap,
    title: 'PV Moduli & Inverter Specifications',
    desc: 'Reading and understanding panel and inverter specs so you size systems correctly.',
  },
  {
    icon: ClipboardCheck,
    title: '100% Practical, Hands-On Experience',
    desc: 'Every session is on real equipment, on real rooftops — not a slideshow.',
  },
]

const details = [
  { icon: Wallet, label: 'Fee', value: '₦60,000 per person' },
  { icon: Calendar, label: 'Class Dates', value: '21 Sept – 5 Oct 2026 (2 weeks)' },
  { icon: Clock, label: 'Daily Schedule', value: '10am – 2pm, Monday–Friday' },
  { icon: AlertCircle, label: 'Registration Closes', value: '19 September 2026' },
]

const why = [
  { icon: Users, title: 'Taught by Field Engineers', desc: 'Instructors work on live MYC Innovation solar installations.' },
  { icon: Wrench, title: '100% Practical Training', desc: 'No filler theory — you install real PV systems from day one.' },
  { icon: Award, title: 'Certificate on Completion', desc: 'Finish the two weeks with a certificate you can show employers.' },
]

export default function Academy() {
  return (
    <div>
      <section className="bg-brand-green-light/40">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center lg:px-8">
          <Tag>MYC Academy · Vocational & Technical Skill Training</Tag>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Become a Trained Solar & Inverter Installer
          </h1>
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-muted">
            100% practical training. Join our September class today and
            start building a career in solar installation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button to="/contact">
              Register Now <ArrowRight size={16} />
            </Button>
            <Button href="#curriculum" variant="outline">
              What You'll Learn
            </Button>
          </div>
        </div>
      </section>

      {/* Enrollment details */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-brand-green/20 bg-white shadow-xl shadow-brand-green/5">
          <div className="flex flex-col items-start justify-between gap-4 bg-brand-blue px-8 py-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-green">
                September 2026 Cohort
              </p>
              <p className="mt-1 text-lg font-semibold text-white">
                Limited slots available — register before intake closes
              </p>
            </div>
            <span className="rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white">
              Registration closes 19 Sept 2026
            </span>
          </div>
          <div className="grid gap-6 p-8 sm:grid-cols-2 lg:grid-cols-4">
            {details.map((d) => (
              <div key={d.label} className="flex items-start gap-3">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-green-light">
                  <d.icon size={20} className="text-brand-green-dark" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted">{d.label}</p>
                  <p className="mt-0.5 text-sm font-semibold text-ink">{d.value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-ink/8 px-8 py-6">
            <Button to="/contact" className="w-full sm:w-auto">
              Register & Secure Your Spot <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Tag>What You Will Learn</Tag>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            A Curriculum Built Around the Rooftop, Not the Classroom
          </h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {curriculum.map((c) => (
            <div key={c.title} className="rounded-2xl border border-ink/8 p-6">
              <IconPanel icon={c.icon} tone="green" className="h-14 w-14" size={24} />
              <h3 className="mt-5 font-semibold text-ink">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why train with us */}
      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <Tag dark>Why Train With Us</Tag>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Training Grounded in Real Projects
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {why.map((w) => (
              <div key={w.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <IconPanel icon={w.icon} tone="green" className="h-14 w-14" size={24} />
                <h3 className="mt-5 font-semibold text-white">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More tracks note */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="rounded-2xl border border-dashed border-ink/15 p-8 text-center">
          <p className="text-sm font-semibold text-ink">More technical training tracks are on the way.</p>
          <p className="mt-2 text-sm text-muted">
            Get in touch to be notified when new MYC Academy programmes open for registration.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-brand-blue px-8 py-12 text-center sm:flex-row sm:text-left sm:px-12">
          <div>
            <h3 className="text-2xl font-semibold text-white">
              Ready to start your training?
            </h3>
            <p className="mt-2 text-white/60">
              Slots are limited — reach out today to secure your spot.
            </p>
          </div>
          <Button to="/contact" className="shrink-0">
            Talk to the Academy <ArrowRight size={16} />
          </Button>
        </div>
      </section>
    </div>
  )
}
