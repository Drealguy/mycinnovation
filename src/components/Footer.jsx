import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-brand-blue text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo dark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Solar power, security systems, and construction contracting
              built to Nigerian standards — with an academy that trains the
              next generation of technicians.
            </p>
            <p className="mt-4 text-xs text-white/40">RC-NO 1604123</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Company</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/product" className="hover:text-white">Shop</Link></li>
              <li><Link to="/academy" className="hover:text-white">Academy</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Services</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li>Solar Power Systems</li>
              <li>CCTV & Security</li>
              <li>Building Construction</li>
              <li>General Contracting</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Get in Touch</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="shrink-0 text-brand-green" />
                <a href="tel:+2348036032275" className="hover:text-white">
                  +234 803 603 2275
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="shrink-0 text-brand-green" />
                <a href="mailto:info@myc-innovation.com" className="hover:text-white">
                  info@myc-innovation.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-brand-green" />
                <span>Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} MYC Innovation. All rights reserved.</p>
          <p>Installation • Construction • Training</p>
        </div>
      </div>
    </footer>
  )
}
