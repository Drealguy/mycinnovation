import {
  Sun,
  ShieldCheck,
  Building2,
  HardHat,
  ArrowRight,
  Check,
  ClipboardList,
  PenTool,
  Wrench,
  LifeBuoy,
} from 'lucide-react'
import Tag from '../components/Tag'
import Button from '../components/Button'
import IconPanel from '../components/IconPanel'

const products = [
  {
    icon: Sun,
    tone: 'green',
    title: 'Solar Power Systems',
    desc: 'Complete solar solutions sized to your load — from single-panel backup to full off-grid systems for homes, offices, and estates.',
    features: [
      'Free load assessment & site survey',
      'Panels, inverters & battery installation',
      'Hybrid and off-grid system design',
      '1-year installation warranty',
    ],
  },
  {
    icon: ShieldCheck,
    tone: 'blue',
    title: 'CCTV & Security Systems',
    desc: 'Camera systems and access control designed around how your property actually needs to be protected — indoors, outdoors, and remotely monitored.',
    features: [
      'HD & night-vision camera installation',
      'Remote mobile viewing setup',
      'Access control & alarm integration',
      'Ongoing maintenance plans',
    ],
  },
  {
    icon: Building2,
    tone: 'dark',
    title: 'Building Construction',
    desc: 'From foundation to finishing, we manage residential and commercial builds with clear timelines and dependable site supervision.',
    features: [
      'Architectural & structural planning support',
      'Residential & commercial builds',
      'Quality materials sourcing',
      'Regular progress reporting',
    ],
  },
  {
    icon: HardHat,
    tone: 'green',
    title: 'General Contracting',
    desc: 'Renovations, fit-outs, and multi-trade projects handled by one accountable team — so you deal with a single point of contact.',
    features: [
      'Renovation & remodeling',
      'Multi-trade project management',
      'Budget & procurement oversight',
      'Post-project handover support',
    ],
  },
]

const process = [
  { icon: ClipboardList, title: 'Consultation', desc: 'We assess your site, needs, and budget — free of charge.' },
  { icon: PenTool, title: 'Design & Quote', desc: 'You receive a clear scope of work and transparent pricing.' },
  { icon: Wrench, title: 'Installation', desc: 'Our trained engineers execute the project to specification.' },
  { icon: LifeBuoy, title: 'Ongoing Support', desc: 'We stay reachable for maintenance and follow-up service.' },
]

export default function Product() {
  return (
    <div>
      <section className="bg-brand-green-light/40">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center lg:px-8">
          <Tag>Our Products & Services</Tag>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Everything You Need, Under One Contractor
          </h1>
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-muted">
            Solar power, security systems, and construction — each delivered
            to the same standard, by the same accountable team.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="space-y-16">
          {products.map((p, i) => (
            <div
              key={p.title}
              className={`grid items-center gap-10 lg:grid-cols-2 ${
                i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <IconPanel icon={p.icon} tone={p.tone} className="h-72" size={64} />
              <div>
                <h2 className="text-2xl font-semibold text-ink sm:text-3xl">{p.title}</h2>
                <p className="mt-4 leading-relaxed text-muted">{p.desc}</p>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-ink/80">
                      <Check size={18} className="mt-0.5 shrink-0 text-brand-green" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button to="/contact" className="mt-8">
                  Request This Service <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <Tag dark>How We Work</Tag>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              A Straightforward Process, Every Time
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <div key={step.title} className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
                <span className="text-xs font-semibold text-brand-green">STEP {i + 1}</span>
                <IconPanel icon={step.icon} tone="green" className="mt-4 h-12 w-12" size={20} />
                <h3 className="mt-4 font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-brand-blue px-8 py-12 text-center sm:flex-row sm:text-left sm:px-12">
          <div>
            <h3 className="text-2xl font-semibold text-white">
              Not sure which service you need?
            </h3>
            <p className="mt-2 text-white/60">
              Talk to our team — we’ll recommend the right solution for your budget.
            </p>
          </div>
          <Button to="/contact" className="shrink-0">
            Get a Free Quote <ArrowRight size={16} />
          </Button>
        </div>
      </section>
    </div>
  )
}
