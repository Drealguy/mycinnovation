import { useState } from 'react'
import {
  Sun,
  PlugZap,
  BatteryCharging,
  Camera,
  ArrowRight,
  MessageCircle,
  Wrench,
} from 'lucide-react'
import Tag from '../components/Tag'
import Button from '../components/Button'
import IconPanel from '../components/IconPanel'
import { waLink } from '../lib/whatsapp'
import deyeInverter from '../assets/deye-hybrid-inverter-8kw.png'
import deyeBattery from '../assets/deye-battery-se-f5l.png'
import eastmanBattery from '../assets/eastman-solar-lifepo4-battery.jpg'

const categories = [
  { key: 'panels', label: 'Solar Panels', icon: Sun, tone: 'green' },
  { key: 'inverters', label: 'Inverters', icon: PlugZap, tone: 'blue' },
  { key: 'batteries', label: 'Batteries', icon: BatteryCharging, tone: 'dark' },
  { key: 'cctv', label: 'CCTV & Security', icon: Camera, tone: 'green' },
]

const products = [
  { category: 'panels', name: 'Monocrystalline Solar Panel', spec: '350W' },
  { category: 'panels', name: 'Monocrystalline Solar Panel', spec: '450W' },
  { category: 'panels', name: 'Monocrystalline Solar Panel', spec: '550W' },
  { category: 'inverters', name: 'Pure Sine Wave Inverter', spec: '3kVA / 24V' },
  { category: 'inverters', name: 'Pure Sine Wave Inverter', spec: '5kVA / 48V' },
  {
    category: 'inverters',
    name: 'Deye Hybrid Inverter 8kW LV Battery Supported',
    spec: 'SUN-8K-SG05LP1-EU-SM2 · Single Phase',
    sku: 'DEYEINV8K-SG05LP1-EU',
    price: 1600000,
    image: deyeInverter,
  },
  {
    category: 'batteries',
    name: 'Deye Low Voltage SE-F5(L) Battery',
    spec: '5.12kWh · 51.2V',
    price: 800000,
    image: deyeBattery,
  },
  {
    category: 'batteries',
    name: 'Eastman Lithium Battery',
    spec: '5kWh 24V & 10kWh 51.2V',
    image: eastmanBattery,
  },
  { category: 'batteries', name: 'Tubular / AGM Battery', spec: '200Ah / 12V' },
  { category: 'cctv', name: 'HD Dome Camera', spec: 'Indoor, Night Vision' },
  { category: 'cctv', name: 'HD Bullet Camera', spec: 'Outdoor, Night Vision' },
  { category: 'cctv', name: 'NVR Kit', spec: '4 / 8 / 16 Channel' },
]

const formatNaira = (n) => `₦${n.toLocaleString('en-NG')}`

export default function Product() {
  const [active, setActive] = useState('all')

  const visible =
    active === 'all' ? products : products.filter((p) => p.category === active)

  return (
    <div>
      <section className="bg-brand-green-light/40">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center lg:px-8">
          <Tag>Shop Equipment</Tag>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Solar Panels, Inverters, Batteries & CCTV Equipment
          </h1>
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-muted">
            Genuine equipment sold directly by MYC Innovation — with
            installation available from the same team if you need it.
          </p>
        </div>
      </section>

      {/* Category filter */}
      <section className="sticky top-[73px] z-30 border-b border-ink/8 bg-white/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-5 py-4 lg:px-8">
          {/* Mobile: dropdown */}
          <select
            value={active}
            onChange={(e) => setActive(e.target.value)}
            className="w-full rounded-full border border-ink/15 bg-white px-4 py-2.5 text-sm font-semibold text-ink sm:hidden"
          >
            <option value="all">All Products</option>
            {categories.map((c) => (
              <option key={c.key} value={c.key}>
                {c.label}
              </option>
            ))}
          </select>

          {/* Tablet & up: pills */}
          <div className="hidden gap-2 overflow-x-auto sm:flex">
            <button
              onClick={() => setActive('all')}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                active === 'all'
                  ? 'bg-brand-green text-white'
                  : 'bg-ink/5 text-ink/70 hover:bg-ink/10'
              }`}
            >
              All Products
            </button>
            {categories.map((c) => (
              <button
                key={c.key}
                onClick={() => setActive(c.key)}
                className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  active === c.key
                    ? 'bg-brand-green text-white'
                    : 'bg-ink/5 text-ink/70 hover:bg-ink/10'
                }`}
              >
                <c.icon size={15} />
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Price notice */}
      <div className="mx-auto max-w-7xl px-5 pt-8 lg:px-8">
        <div className="flex items-start gap-3 rounded-2xl bg-amber/10 px-5 py-4 text-sm text-amber-dark">
          <MessageCircle size={18} className="mt-0.5 shrink-0" />
          <p>
            Prices are in Naira, per unit. For items without a listed price,
            message us on WhatsApp for a quote.
          </p>
        </div>
      </div>

      {/* Product grid */}
      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => {
            const cat = categories.find((c) => c.key === p.category)
            return (
              <div
                key={`${p.name}-${p.spec}-${i}`}
                className="flex flex-col overflow-hidden rounded-2xl border border-ink/8"
              >
                {p.image ? (
                  <div className="flex aspect-[3/4] items-center justify-center bg-ink/5 p-6">
                    <img
                      src={p.image}
                      alt={`${p.name} ${p.spec}`}
                      className="h-full w-full object-contain"
                    />
                  </div>
                ) : (
                  <IconPanel icon={cat.icon} tone={cat.tone} className="aspect-[3/4]" size={36} />
                )}
                <div className="flex flex-1 flex-col p-5">
                  <span className="text-xs font-semibold uppercase tracking-wide text-brand-green">
                    {cat.label}
                  </span>
                  <h3 className="mt-1 font-semibold text-ink">{p.name}</h3>
                  <p className="mt-1 text-sm text-muted">{p.spec}</p>
                  {p.sku && <p className="mt-0.5 text-xs text-ink/40">SKU: {p.sku}</p>}
                  <div className="mt-4 flex items-center justify-between">
                    {p.price ? (
                      <span className="text-lg font-semibold text-brand-blue">
                        {formatNaira(p.price)}
                      </span>
                    ) : (
                      <span className="rounded-full bg-ink/5 px-3 py-1 text-xs font-semibold text-ink/70">
                        Contact for price
                      </span>
                    )}
                  </div>
                  <Button
                    href={waLink(
                      p.price
                        ? `Hi MYC, I want to buy the ${p.name} (${p.spec}) for ${formatNaira(p.price)}. Please confirm availability and payment details.`
                        : `Hi MYC, I'm interested in the ${p.name} (${p.spec}). Please share pricing and availability.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant={p.price ? 'primary' : 'outline'}
                    className="mt-4 w-full"
                  >
                    {p.price ? 'Buy Now' : 'Enquire on WhatsApp'}
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Installation note */}
      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <div className="flex flex-col items-center gap-6 rounded-3xl bg-ink px-8 py-12 text-center sm:flex-row sm:text-left sm:px-12">
          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand-green">
            <Wrench size={24} className="text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-white">
              Need it installed, not just supplied?
            </h3>
            <p className="mt-2 text-white/60">
              Our team installs everything we sell — solar systems, inverters, batteries, and CCTV.
            </p>
          </div>
          <Button to="/contact" className="shrink-0">
            Get a Quote <ArrowRight size={16} />
          </Button>
        </div>
      </section>
    </div>
  )
}
