const gradients = {
  green: 'from-brand-green to-brand-green-dark',
  blue: 'from-brand-blue to-brand-blue-dark',
  dark: 'from-ink to-brand-blue-dark',
  light: 'from-brand-green-light to-white',
}

export default function IconPanel({
  icon: Icon,
  tone = 'green',
  className = '',
  iconClassName = '',
  size = 40,
}) {
  const isLight = tone === 'light'
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${gradients[tone]} ${className}`}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.5) 0, transparent 40%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.35) 0, transparent 45%)',
        }}
      />
      <Icon
        size={size}
        strokeWidth={1.5}
        className={`relative ${isLight ? 'text-brand-green' : 'text-white'} ${iconClassName}`}
      />
    </div>
  )
}
