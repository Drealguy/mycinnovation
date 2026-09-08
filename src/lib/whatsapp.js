const PHONE = '2348036032275'

export function waLink(message) {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`
}
