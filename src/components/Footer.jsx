import { Link } from 'react-router-dom'
import { CONTACT } from '../data/contact.js'

const COLUMNS = [
  {
    heading: 'Company',
    links: [
      ['What We Do', '/services'],
      ['Industries', '/industries'],
      ['Insights', '/insights'],
      ['About', '/about'],
      ['Contact', '/contact'],
    ],
  },
  {
    heading: 'Services',
    links: [
      ['Design & Consulting', '/services#design-consulting'],
      ['Build & Integration', '/services#systems-integration'],
      ['Managed Services', '/services#managed-services'],
      ['LED Displays', '/services#led-displays'],
      ['Command & Control', '/services#command-control'],
      ['Immersive Experiences', '/services#immersive-experiences'],
    ],
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <span className="logo-word">
            TSSC
            <span className="logo-o">
              O<span className="logo-dot" />
            </span>
          </span>
          <p>Connecting vision with technology.</p>
          <a
            className="footer-loc"
            href={CONTACT.mapsHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {CONTACT.addressShort}
          </a>
        </div>
        {COLUMNS.map((col) => (
          <nav key={col.heading} className="footer-col" aria-label={col.heading}>
            <h2>{col.heading}</h2>
            {col.links.map(([label, to]) => (
              <Link key={label} to={to}>
                {label}
              </Link>
            ))}
          </nav>
        ))}
        <div className="footer-col">
          <h2>Get in touch</h2>
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
          <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          <a href={CONTACT.mapsHref} target="_blank" rel="noopener noreferrer">
            {CONTACT.addressLines.join(', ')}
          </a>
        </div>
      </div>
      <div className="container footer-copy">
        © {new Date().getFullYear()} TSSCO. LED Displays · AV Solutions · Command &amp;
        Control. All rights reserved.
      </div>
    </footer>
  )
}
