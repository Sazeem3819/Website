import { Link } from 'react-router-dom'
import { CONTACT } from '../data/contact.js'
import { useLang } from '../i18n/LanguageContext.jsx'

export default function Footer() {
  const { t } = useLang()

  const companyLinks = [
    [t.nav.services, '/services'],
    [t.nav.industries, '/industries'],
    [t.nav.insights, '/insights'],
    [t.nav.about, '/about'],
    [t.footer.contact, '/contact'],
  ]

  const serviceLinks = Object.entries(t.footer.serviceLinks).map(([id, label]) => [
    label,
    `/services#${id}`,
  ])

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
          <p>{t.footer.tagline}</p>
          <a
            className="footer-loc"
            href={CONTACT.mapsHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.footer.addressShort}
          </a>
        </div>
        <nav className="footer-col" aria-label={t.footer.company}>
          <h2>{t.footer.company}</h2>
          {companyLinks.map(([label, to]) => (
            <Link key={to} to={to}>
              {label}
            </Link>
          ))}
        </nav>
        <nav className="footer-col" aria-label={t.footer.services}>
          <h2>{t.footer.services}</h2>
          {serviceLinks.map(([label, to]) => (
            <Link key={to} to={to}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="footer-col">
          <h2>{t.footer.getInTouch}</h2>
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          <a href={CONTACT.phoneHref} dir="ltr">
            {CONTACT.phoneDisplay}
          </a>
          <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer">
            {t.footer.whatsapp}
          </a>
          <a href={CONTACT.mapsHref} target="_blank" rel="noopener noreferrer">
            {t.footer.addressLines.join(', ')}
          </a>
        </div>
      </div>
      <div className="container footer-copy">
        © {new Date().getFullYear()} {t.footer.rights}
      </div>
    </footer>
  )
}
