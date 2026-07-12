import PageHero from '../components/PageHero.jsx'
import CtaBand from '../components/CtaBand.jsx'
import useReveal from '../components/useReveal.js'
import { INDUSTRIES } from '../data/services.js'
import { asset } from '../data/solutions.js'
import { useLang } from '../i18n/LanguageContext.jsx'

export default function Industries() {
  const { t } = useLang()
  const ref = useReveal('.industry-card')

  return (
    <main>
      <PageHero
        eyebrow={t.industriesPage.eyebrow}
        title={
          <>
            {t.industriesPage.title1}
            <br />
            {t.industriesPage.title2}
            <em>{t.industriesPage.titleEm}</em>
          </>
        }
        intro={t.industriesPage.intro}
        video={asset('videos/control-room.mp4')}
        poster={asset('posters/control-room.jpg')}
      />
      <section className="container industry-grid" ref={ref}>
        {INDUSTRIES.map((ind) => {
          const copy = t.industriesPage.items[ind.id]
          return (
            <article key={ind.id} className="industry-card">
              <div
                className="industry-card-media"
                style={{ backgroundImage: `url(${ind.poster})` }}
                aria-hidden="true"
              />
              <div className="industry-card-body">
                <h2>{copy.title}</h2>
                <p>{copy.blurb}</p>
              </div>
            </article>
          )
        })}
      </section>
      <CtaBand title={t.industriesPage.cta} />
    </main>
  )
}
