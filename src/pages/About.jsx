import PageHero from '../components/PageHero.jsx'
import Clients from '../components/Clients.jsx'
import CtaBand from '../components/CtaBand.jsx'
import useReveal from '../components/useReveal.js'
import { asset } from '../data/solutions.js'
import { useLang } from '../i18n/LanguageContext.jsx'

export default function About() {
  const { t } = useLang()
  const ref = useReveal('.value-card, .about-story p')

  return (
    <main>
      <PageHero
        eyebrow={t.aboutPage.eyebrow}
        title={
          <>
            {t.aboutPage.title1}
            <br />
            {t.aboutPage.title2}
            <em>{t.aboutPage.titleEm}</em>
          </>
        }
        intro={t.aboutPage.intro}
        video={asset('videos/immersive-museum.mp4')}
        poster={asset('posters/immersive-museum.jpg')}
      />
      <section className="container about-story" ref={ref}>
        <p>{t.aboutPage.story1}</p>
        <p>{t.aboutPage.story2}</p>
      </section>
      <section className="container value-grid">
        {t.aboutPage.values.map((v) => (
          <article key={v.title} className="value-card">
            <h2>{v.title}</h2>
            <p>{v.body}</p>
          </article>
        ))}
      </section>
      <Clients />
      <CtaBand title={t.aboutPage.cta} />
    </main>
  )
}
