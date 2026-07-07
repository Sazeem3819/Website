import { Link } from 'react-router-dom'
import useReveal from './useReveal.js'

export default function CtaBand({
  title = 'Have a project in mind?',
  label = 'Start the conversation',
}) {
  const ref = useReveal('.cta-band-inner > *')
  return (
    <section ref={ref} className="cta-band">
      <div className="container cta-band-inner">
        <h2 className="cta-band-title">{title}</h2>
        <Link className="btn btn-primary" to="/contact">
          {label}
        </Link>
      </div>
    </section>
  )
}
