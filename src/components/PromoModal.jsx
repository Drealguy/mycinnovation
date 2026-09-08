import { useEffect, useState } from 'react'
import { X, Calendar, Clock, Wallet } from 'lucide-react'
import Button from './Button'
import { waLink } from '../lib/whatsapp'

const STORAGE_KEY = 'myc-academy-promo-dismissed'
const REGISTER_MESSAGE =
  "Hi MYC Academy, I'd like to register for the Solar & Inverter Installer training (21 Sept – 5 Oct 2026). Please send me the next steps."

export default function PromoModal() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return
    const timer = setTimeout(() => setOpen(true), 900)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && close()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const close = () => {
    setOpen(false)
    sessionStorage.setItem(STORAGE_KEY, '1')
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/60 p-4"
      onClick={close}
    >
      <div
        className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-ink shadow"
        >
          <X size={18} />
        </button>

        <div className="bg-brand-blue px-7 pb-6 pt-8 text-white">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-green">
            MYC Academy · Vocational &amp; Technical Skill Training
          </p>
          <h2 className="mt-2 text-2xl font-semibold leading-tight">
            Become a Trained Solar &amp; Inverter Installer
          </h2>
          <p className="mt-2 text-sm text-white/70">
            100% practical training. Join our September class today and start
            building a career in solar installation.
          </p>
        </div>

        <div className="space-y-3 px-7 py-6">
          <div className="flex items-center gap-3 text-sm text-ink/80">
            <Wallet size={16} className="shrink-0 text-brand-green" />
            <span className="font-semibold">₦60,000</span> per person
          </div>
          <div className="flex items-center gap-3 text-sm text-ink/80">
            <Calendar size={16} className="shrink-0 text-brand-green" />
            21 Sept – 5 Oct 2026 <span className="text-muted">(2 weeks)</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-ink/80">
            <Clock size={16} className="shrink-0 text-brand-green" />
            10am – 2pm, daily
          </div>
          <div className="rounded-xl bg-amber/10 px-4 py-2.5 text-xs font-semibold text-amber-dark">
            Limited slots · Registration closes 19 September 2026
          </div>
        </div>

        <div className="flex gap-3 border-t border-ink/8 px-7 py-5">
          <Button to="/academy" onClick={close} variant="outline" className="flex-1">
            Learn More
          </Button>
          <Button
            href={waLink(REGISTER_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="flex-1"
          >
            Register Now
          </Button>
        </div>
      </div>
    </div>
  )
}
