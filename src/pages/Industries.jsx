import PageHero from '../components/PageHero.jsx'
import CtaBand from '../components/CtaBand.jsx'
import useReveal from '../components/useReveal.js'
import { INDUSTRIES } from '../data/services.js'
import { asset } from '../data/solutions.js'

export default function Industries() {
  const ref = useReveal('.industry-card')
  return (
    <main>
      <PageHero
        eyebrow="Who we serve"
        title={
          <>
            Every sector.
            <br />
            The same <em>standard.</em>
          </>
        }
        intro="From government command centers to cultural destinations, we bring the same engineering discipline to every environment we touch."
        video={asset('videos/control-room.mp4')}
        poster={asset('posters/control-room.jpg')}
      />
      <section className="container industry-grid">
        {INDUSTRIES.map((ind) => (
          <article key={ind.id} className="industry-card">
            <div
              className="industry-card-media"
              style={{ backgroundImage: `url(${ind.poster})` }}
              aria-hidden="true"
            />
            <div className="industry-card-body">
              <h2>{ind.title}</h2>
              <p>{ind.blurb}</p>
            </div>
          </article>
        ))}
      </section>
      <CtaBand title="Working in a sector we haven't listed? Talk to us anyway." />
    </main>
  )
}
