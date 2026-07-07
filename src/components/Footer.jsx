import { Link } from 'react-router-dom'

const COLUMNS = [
  {
    heading: 'Company',
    links: [
      ['What We Do', '/services'],
      ['Industries', '/industries'],
      ['Our Work', '/work'],
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
          <p className="footer-loc">Riyadh · Kingdom of Saudi Arabia</p>
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
          <a href="mailto:info@tssco.org">info@tssco.org</a>
          <a href="tel:+966000000000">+966 (0) 00 000 0000</a>
        </div>
      </div>
      <div className="container footer-copy">
        © {new Date().getFullYear()} TSSCO. LED Displays · AV Solutions · Command &amp;
        Control. All rights reserved.
      </div>
    </footer>
  )
}
