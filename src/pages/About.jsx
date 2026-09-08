import {
  Target,
  Eye,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
  Sun,
  ShieldCheck,
  HardHat,
} from 'lucide-react'
import Tag from '../components/Tag'
import Button from '../components/Button'
import IconPanel from '../components/IconPanel'

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    desc: 'To deliver dependable power, security, and construction solutions that help Nigerian homes and businesses thrive.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    desc: 'To be West Africa’s most trusted technical contracting company, known for quality and integrity on every site.',
  },
  {
    icon: HeartHandshake,
    title: 'Our Values',
    desc: 'Safety, craftsmanship, and honest communication guide every project we take on — no shortcuts, no surprises.',
  },
]

const reasons = [
  'Licensed and registered contractor (RC-NO 1604123)',
  'Experienced, safety-trained field engineers',
  'Transparent quotes with no hidden costs',
  'Free site survey before every project',
  'Ongoing maintenance and support after handover',
  'In-house academy — we train the people we hire',
]

const stats = [
  { value: '200+', label: 'Projects Delivered' },
  { value: '150+', label: 'Happy Clients' },
  { value: '10+', label: 'States Served' },
  { value: '4.8/5', label: 'Client Rating' },
]

export default function About() {
  return (
    <div>
      <section className="bg-brand-green-light/40">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center lg:px-8">
          <Tag>About Us</Tag>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Engineering Reliable Power, Security & Structures
          </h1>
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-muted">
            Myc Innovations Concept NG LTD is a registered Nigerian technical
            and general contracting company. We design, install, and support
            solar power systems, CCTV security, and construction projects —
            and train the next generation of technicians to do the same.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Tag>Our Story</Tag>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Built From the Field, Not the Boardroom
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              MYC Innovation started with a simple observation: too many
              solar and security installations in Nigeria failed within
              months of handover. We set out to change that — hiring
              engineers who take craftsmanship seriously and standing behind
              every system we install.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Today, that same standard extends across solar power, CCTV
              security, building construction, and general contracting —
              plus a technical academy that passes our know-how on to the
              next generation.
            </p>
            <Button to="/contact" variant="dark" className="mt-8">
              Work With Us <ArrowRight size={16} />
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <IconPanel icon={Sun} tone="green" className="h-44" size={40} />
            <IconPanel icon={ShieldCheck} tone="blue" className="h-44 mt-8" size={40} />
            <IconPanel icon={HardHat} tone="dark" className="col-span-2 h-40" size={40} />
          </div>
        </div>
      </section>

      {/* Mission/Vision/Values */}
      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <Tag dark>Why We Exist</Tag>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Mission, Vision & Values
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-8"
              >
                <IconPanel icon={v.icon} tone="green" className="h-14 w-14" size={24} />
                <h3 className="mt-5 text-lg font-semibold text-white">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-ink/8 p-6 text-center">
              <p className="text-3xl font-semibold text-brand-blue">{s.value}</p>
              <p className="mt-2 text-sm text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-brand-green-light/30">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <Tag>Why Choose Us</Tag>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              A Contractor You Can Actually Rely On
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              We hold ourselves to the same standard our clients expect:
              show up, do it right, and stand behind the work.
            </p>
          </div>
          <ul className="space-y-4">
            {reasons.map((r) => (
              <li key={r} className="flex items-start gap-3 rounded-xl bg-white p-4">
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-brand-green" />
                <span className="text-sm text-ink/80">{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-brand-blue px-8 py-12 text-center sm:flex-row sm:text-left sm:px-12">
          <div>
            <h3 className="text-2xl font-semibold text-white">
              Have a project in mind?
            </h3>
            <p className="mt-2 text-white/60">
              Tell us about it and we’ll get back to you within 48 hours.
            </p>
          </div>
          <Button to="/contact" className="shrink-0">
            Get in Touch <ArrowRight size={16} />
          </Button>
        </div>
      </section>
    </div>
  )
}
