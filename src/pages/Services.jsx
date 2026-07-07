import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import LazyVideo from '../components/LazyVideo.jsx'
import CtaBand from '../components/CtaBand.jsx'
import useReveal from '../components/useReveal.js'
import { SERVICES } from '../data/services.js'
import { asset } from '../data/solutions.js'

function ServiceRow({ service, flip }) {
  const ref = useReveal('.service-row-copy > *, .service-row-media')
  return (
    <article ref={ref} id={service.id} className={`service-row ${flip ? 'service-row--flip' : ''}`}>
      <div className="service-row-media">
        {service.video ? (
          <LazyVideo src={service.video} poster={service.poster} />
        ) : (
          <img className="lazy-video" src={service.poster} alt="" loading="lazy" decoding="async" />
        )}
      </div>
      <div className="service-row-copy">
        <span className="solution-index">{service.index}</span>
        <p className="section-eyebrow">{service.group}</p>
        <h2 className="service-row-title">{service.title}</h2>
        <p className="service-row-summary">{service.summary}</p>
        <ul className="service-row-list">
          {service.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <Link className="solution-link" to="/contact">
          Discuss your project <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  )
}

export default function Services() {
  const jumpRef = useReveal('.service-jump a')
  return (
    <main>
      <PageHero
        eyebrow="What we do"
        title={
          <>
            From first sketch
            <br />
            to flawless <em>operation.</em>
          </>
        }
        intro="We design, build and support the technology behind the Kingdom's most ambitious visual environments — one accountable partner across the entire lifecycle."
        video={asset('videos/showroom-led.mp4')}
        poster={asset('posters/showroom-led.jpg')}
      />
      <nav ref={jumpRef} className="service-jump container" aria-label="Services">
        {SERVICES.map((s) => (
          <a key={s.id} href={`#${s.id}`}>
            {s.title}
          </a>
        ))}
      </nav>
      <div className="service-rows">
        {SERVICES.map((s, i) => (
          <ServiceRow key={s.id} service={s} flip={i % 2 === 1} />
        ))}
      </div>
      <CtaBand title="Not sure where to start? Let's scope it together." />
    </main>
  )
}
