import PageHero from '../components/PageHero.jsx'
import CtaBand from '../components/CtaBand.jsx'
import useReveal from '../components/useReveal.js'
import { PROJECTS } from '../data/services.js'
import { asset } from '../data/solutions.js'

export default function Work() {
  const ref = useReveal('.project-card')
  return (
    <main>
      <PageHero
        eyebrow="Our work"
        title={
          <>
            Built to be
            <br />
            <em>watched.</em>
          </>
        }
        intro="A selection of representative engagements. Client names and full case studies available on request — much of our work is delivered under NDA."
        video={asset('videos/led-lobby.mp4')}
        poster={asset('posters/led-lobby.jpg')}
      />
      <section className="container project-grid">
        {PROJECTS.map((p) => (
          <article key={p.id} className="project-card">
            <div
              className="project-card-media"
              style={{ backgroundImage: `url(${p.poster})` }}
              aria-hidden="true"
            />
            <div className="project-card-body">
              <span className="project-card-sector">{p.sector}</span>
              <h2>{p.title}</h2>
              <p>{p.blurb}</p>
            </div>
          </article>
        ))}
      </section>
      <CtaBand title="Want the full case studies? We'll walk you through them." />
    </main>
  )
}
