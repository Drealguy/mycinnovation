import { Link } from 'react-router-dom'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-150 whitespace-nowrap'

const variants = {
  primary: 'bg-brand-green text-white hover:bg-brand-green-dark',
  dark: 'bg-brand-blue text-white hover:bg-brand-blue-dark',
  outline: 'border border-ink/15 text-ink hover:border-ink/40 bg-white',
  ghost: 'text-white border border-white/30 hover:bg-white/10',
}

export default function Button({
  to,
  href,
  variant = 'primary',
  className = '',
  children,
  ...rest
}) {
  const classes = `${base} ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}
