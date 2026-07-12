import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import LazyVideo from '../components/LazyVideo.jsx'
import CtaBand from '../components/CtaBand.jsx'
import useReveal from '../components/useReveal.js'
import { SERVICES } from '../data/services.js'
import { asset } from '../data/solutions.js'
import { useLang } from '../i18n/LanguageContext.jsx'

function ServiceRow({ service, flip }) {
  const { t } = useLang()
  const copy = t.servicesPage.items[service.id]
  const group =
    service.group === 'deliver' ? t.servicesPage.groups.deliver : t.servicesPage.groups.solutions
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
        <p className="section-eyebrow">{group}</p>
        <h2 className="service-row-title">{copy.title}</h2>
        <p className="service-row-summary">{copy.summary}</p>
        <ul className="service-row-list">
          {copy.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <Link className="solution-link" to="/contact">
          {t.servicesPage.discuss} <span aria-hidden="true">{t.arrow}</span>
        </Link>
      </div>
    </article>
  )
}

export default function Services() {
  const { t } = useLang()
  const jumpRef = useReveal('.service-jump a')

  return (
    <main>
      <PageHero
        eyebrow={t.servicesPage.eyebrow}
        title={
          <>
            {t.servicesPage.title1}
            <br />
            {t.servicesPage.title2}
            <em>{t.servicesPage.titleEm}</em>
          </>
        }
        intro={t.servicesPage.intro}
        video={asset('videos/showroom-led.mp4')}
        poster={asset('posters/showroom-led.jpg')}
      />
      <nav ref={jumpRef} className="service-jump container" aria-label={t.servicesPage.eyebrow}>
        {SERVICES.map((s) => (
          <a key={s.id} href={`#${s.id}`}>
            {t.servicesPage.items[s.id].title}
          </a>
        ))}
      </nav>
      <div className="service-rows">
        {SERVICES.map((s, i) => (
          <ServiceRow key={s.id} service={s} flip={i % 2 === 1} />
        ))}
      </div>
      <CtaBand title={t.servicesPage.cta} />
    </main>
  )
}
