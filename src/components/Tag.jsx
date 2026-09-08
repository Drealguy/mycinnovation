export default function Tag({ children, dark = false }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide ${
        dark
          ? 'bg-white/10 text-white'
          : 'bg-brand-green-light text-brand-green-dark'
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
      {children}
    </span>
  )
}
