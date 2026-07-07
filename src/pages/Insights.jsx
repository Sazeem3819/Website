import PageHero from '../components/PageHero.jsx'
import CtaBand from '../components/CtaBand.jsx'
import useReveal from '../components/useReveal.js'
import { INSIGHTS } from '../data/services.js'

export default function Insights() {
  const ref = useReveal('.insight-card')
  return (
    <main>
      <PageHero
        eyebrow="Insights"
        title={
          <>
            Thinking out
            <br />
            <em>loud.</em>
          </>
        }
        intro="Perspectives from our engineers and designers on LED, control rooms, AV strategy and the experience economy in the Kingdom."
      />
      <section className="container insight-grid">
        {INSIGHTS.map((a) => (
          <article key={a.id} className="insight-card">
            <span className="project-card-sector">{a.tag}</span>
            <h2>{a.title}</h2>
            <p>{a.blurb}</p>
            <span className="insight-card-more" aria-hidden="true">
              Read soon →
            </span>
          </article>
        ))}
      </section>
      <CtaBand title="Want these in your inbox? Say hello and we'll add you." />
    </main>
  )
}
