import {
  Sun,
  ShieldCheck,
  HardHat,
  Building2,
  ArrowRight,
  Star,
  ChevronDown,
  GraduationCap,
} from 'lucide-react'
import Tag from '../components/Tag'
import Button from '../components/Button'
import IconPanel from '../components/IconPanel'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import heroTechnician from '../assets/hero-technician.jpg'

const services = [
  {
    icon: Sun,
    title: 'Solar Power Systems',
    desc: 'Design, supply and installation of reliable solar power systems for homes and businesses.',
  },
  {
    icon: ShieldCheck,
    title: 'CCTV & Security',
    desc: 'Professional CCTV camera installation and security systems that keep your property protected.',
  },
  {
    icon: Building2,
    title: 'Building Construction',
    desc: 'End-to-end construction services delivered to a high standard, on time and on budget.',
  },
  {
    icon: HardHat,
    title: 'General Contracting',
    desc: 'Full-service contracting for projects of every scale, managed by an experienced team.',
  },
]

const stats = [
  { value: '98%', label: 'Client satisfaction rate' },
  { value: '200+', label: 'Projects delivered' },
  { value: '4.8/5', label: 'Average client rating' },
]

const testimonials = [
  {
    quote:
      'MYC Innovation installed our solar system in days, not weeks. Our office hasn’t had a power outage since.',
    name: 'Adaeze Okafor',
    role: 'Facility Manager, Lagos',
  },
  {
    quote:
      'The CCTV setup was professional from survey to sign-off. Clear cabling, clean work, and fast support when we needed it.',
    name: 'Ibrahim Musa',
    role: 'Business Owner, Abuja',
  },
  {
    quote:
      'We hired MYC for a full building contract. They kept us updated at every stage and delivered on budget.',
    name: 'Grace Eze',
    role: 'Property Developer',
  },
]

const faqs = [
  {
    q: 'What areas do you serve?',
    a: 'We operate across Nigeria, with teams available to travel for solar, CCTV, and construction projects nationwide.',
  },
  {
    q: 'Do you offer free site surveys?',
    a: 'Yes. Every solar, CCTV, or construction enquiry starts with a free, no-obligation site survey and quote.',
  },
  {
    q: 'Can I combine solar and CCTV installation?',
    a: 'Absolutely — many clients bundle solar power with CCTV installation. We’ll design one project plan covering both.',
  },
  {
    q: 'Does MYC Academy award certificates?',
    a: 'Yes, every Academy programme ends with a hands-on assessment and a certificate of completion.',
  },
]

function Faq({ item, open, onClick }) {
  return (
    <div className={`rounded-2xl border transition-colors ${open ? 'border-brand-green/30 bg-brand-green-light/40' : 'border-ink/10 bg-white'}`}>
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-semibold text-ink">{item.q}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-brand-green transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <p className="px-6 pb-5 text-sm leading-relaxed text-muted">{item.a}</p>
      )}
    </div>
  )
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState(1)

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-green-light/60 to-white">
        <div className="mx-auto max-w-7xl px-5 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Tag>Solar • Security • Construction</Tag>
              <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[56px]">
                Powering Homes, Securing Spaces,{' '}
                <span className="text-brand-green">Building the Future</span>
              </h1>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
                MYC Innovation delivers dependable solar power systems, CCTV
                security installations, and construction contracting across
                Nigeria — backed by a technical academy that trains the
                engineers of tomorrow.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button to="/contact">
                  Get a Quote <ArrowRight size={16} />
                </Button>
                <Button to="/product" variant="outline">
                  View Our Services
                </Button>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-4">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-2xl border border-ink/8 bg-white p-4">
                    <p className="text-2xl font-semibold text-brand-blue">{s.value}</p>
                    <p className="mt-1 text-xs leading-snug text-muted">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-ink/8 shadow-xl shadow-ink/5">
                <img
                  src={heroTechnician}
                  alt="MYC Solar technician on site at a rooftop solar panel installation"
                  className="h-[420px] w-full object-cover object-top sm:h-[520px]"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-ink/8 bg-white p-4 shadow-xl shadow-ink/5 sm:block">
                <p className="text-sm font-semibold text-ink">RC-NO 1604123</p>
                <p className="text-xs text-muted">Registered Nigerian company</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Tag>What We Do</Tag>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Core Services Built on Reliability
          </h2>
          <p className="mt-4 text-muted">
            From power to protection to the physical structure itself, we
            handle the technical work so you don’t have to.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-ink/8 p-6 transition-shadow hover:shadow-lg hover:shadow-ink/5"
            >
              <IconPanel icon={s.icon} tone="green" className="h-14 w-14" size={24} />
              <h3 className="mt-5 font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
              <Link
                to="/product"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green"
              >
                Learn more <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* About preview */}
      <section className="bg-brand-green-light/30">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8">
          <div className="grid grid-cols-2 gap-4">
            <IconPanel icon={HardHat} tone="dark" className="h-64" size={48} />
            <div className="flex flex-col gap-4">
              <IconPanel icon={Sun} tone="green" className="h-30 flex-1" size={36} />
              <IconPanel icon={ShieldCheck} tone="blue" className="h-30 flex-1" size={36} />
            </div>
          </div>
          <div>
            <Tag>About Us</Tag>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Empowering Nigeria Through Reliable Engineering
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Myc Innovations Concept NG LTD (RC-NO 1604123) is a technical
              and general contracting company. We plan, install, and support
              solar power, CCTV security, and construction projects for
              homes and businesses nationwide.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <p className="text-2xl font-semibold text-brand-blue">150+</p>
                <p className="text-sm text-muted">Happy clients</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-brand-blue">10+</p>
                <p className="text-sm text-muted">States covered</p>
              </div>
            </div>
            <Button to="/about" variant="dark" className="mt-8">
              More About Us <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* Academy banner */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-brand-blue px-8 py-14 text-center sm:px-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                'radial-gradient(circle at 15% 20%, rgba(35,125,2,0.5) 0, transparent 35%), radial-gradient(circle at 85% 80%, rgba(35,125,2,0.35) 0, transparent 40%)',
            }}
          />
          <div className="relative">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-green">
              <GraduationCap size={26} className="text-white" />
            </div>
            <h2 className="mx-auto mt-6 max-w-xl text-3xl font-semibold text-white sm:text-4xl">
              Build Your Career at MYC Academy
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-white/70">
              Hands-on technical training in solar installation, CCTV
              systems, and construction supervision — taught by our own
              field engineers.
            </p>
            <Button to="/academy" className="mt-8">
              Explore Courses <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Tag>Testimonials</Tag>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Hear What Our Clients Say
          </h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-ink/8 p-6">
              <div className="flex gap-1 text-brand-green">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink/80">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-brand-green-light text-sm font-semibold text-brand-green-dark">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-green-light/30">
        <div className="mx-auto max-w-3xl px-5 py-20 lg:px-8">
          <div className="text-center">
            <Tag>FAQ</Tag>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Your Questions, Our Solutions
            </h2>
          </div>
          <div className="mt-10 space-y-4">
            {faqs.map((item, i) => (
              <Faq
                key={item.q}
                item={item}
                open={openFaq === i}
                onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-ink px-8 py-12 text-center sm:flex-row sm:text-left sm:px-12">
          <div>
            <h3 className="text-2xl font-semibold text-white">
              Ready to start your project?
            </h3>
            <p className="mt-2 text-white/60">
              Get a free site survey and quote within 48 hours.
            </p>
          </div>
          <Button to="/contact" className="shrink-0">
            Contact Us <ArrowRight size={16} />
          </Button>
        </div>
      </section>
    </div>
  )
}
