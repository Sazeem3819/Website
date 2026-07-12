import PageHero from '../components/PageHero.jsx'
import CtaBand from '../components/CtaBand.jsx'
import useReveal from '../components/useReveal.js'
import { INSIGHT_IDS } from '../data/services.js'
import { useLang } from '../i18n/LanguageContext.jsx'

export default function Insights() {
  const { t } = useLang()
  const ref = useReveal('.insight-card')

  return (
    <main>
      <PageHero
        eyebrow={t.insightsPage.eyebrow}
        title={
          <>
            {t.insightsPage.title1}
            <br />
            <em>{t.insightsPage.titleEm}</em>
          </>
        }
        intro={t.insightsPage.intro}
      />
      <section className="container insight-grid" ref={ref}>
        {INSIGHT_IDS.map((id) => {
          const a = t.insightsPage.items[id]
          return (
            <article key={id} className="insight-card">
              <span className="project-card-sector">{a.tag}</span>
              <h2>{a.title}</h2>
              <p>{a.blurb}</p>
              <span className="insight-card-more" aria-hidden="true">
                {t.insightsPage.more} {t.arrow}
              </span>
            </article>
          )
        })}
      </section>
      <CtaBand title={t.insightsPage.cta} />
    </main>
  )
}
