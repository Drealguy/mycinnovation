import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Check } from 'lucide-react'

export default function CategoryDropdown({ options, value, onChange, className = '' }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  const active = options.find((o) => o.key === value) ?? options[0]

  useEffect(() => {
    if (!open) return
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', onClick)
    window.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-2 rounded-full border border-ink/15 bg-white px-4 py-2.5 text-sm font-semibold text-ink"
      >
        <span className="flex items-center gap-2">
          {active.icon && <active.icon size={16} className="text-brand-green" />}
          {active.label}
        </span>
        <ChevronDown
          size={16}
          className={`shrink-0 text-ink/50 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute left-0 right-0 top-[calc(100%+8px)] z-40 overflow-hidden rounded-2xl border border-ink/10 bg-white py-1.5 shadow-xl shadow-ink/10"
        >
          {options.map((o) => (
            <li key={o.key}>
              <button
                type="button"
                role="option"
                aria-selected={o.key === value}
                onClick={() => {
                  onChange(o.key)
                  setOpen(false)
                }}
                className={`flex w-full items-center gap-2.5 px-4 py-2.5 text-left text-sm font-medium transition-colors ${
                  o.key === value
                    ? 'bg-brand-green-light text-brand-green-dark'
                    : 'text-ink/70 hover:bg-ink/5'
                }`}
              >
                {o.icon && <o.icon size={16} className="shrink-0 text-brand-green" />}
                <span className="flex-1">{o.label}</span>
                {o.key === value && <Check size={16} className="shrink-0" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
