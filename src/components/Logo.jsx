export default function Logo({ dark = false }) {
  return (
    <div className="flex items-center gap-2.5 shrink-0">
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-green">
        <svg width="18" height="18" viewBox="0 0 48 48" fill="none">
          <path
            d="M12 34V14L24 26L36 14V34"
            stroke="#fff"
            strokeWidth="4.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </span>
      <span
        className={`text-lg font-semibold tracking-tight ${dark ? 'text-white' : 'text-ink'}`}
      >
        MYC <span className="text-brand-green">Innovation</span>
      </span>
    </div>
  )
}
