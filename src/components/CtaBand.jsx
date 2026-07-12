import { Link } from 'react-router-dom'
import useReveal from './useReveal.js'
import { useLang } from '../i18n/LanguageContext.jsx'

export default function CtaBand({ title }) {
  const { t } = useLang()
  const ref = useReveal('.cta-band-inner > *')
  return (
    <section ref={ref} className="cta-band">
      <div className="container cta-band-inner">
        <h2 className="cta-band-title">{title || t.ctaBand.title}</h2>
        <Link className="btn btn-primary" to="/contact">
          {t.ctaBand.label}
        </Link>
      </div>
    </section>
  )
}
