import PageHero from '../components/PageHero.jsx'
import Clients from '../components/Clients.jsx'
import CtaBand from '../components/CtaBand.jsx'
import useReveal from '../components/useReveal.js'
import { asset } from '../data/solutions.js'

const VALUES = [
  {
    title: 'Engineering first',
    body: 'Every proposal starts with physics, sightlines and redundancy — not a product catalogue.',
  },
  {
    title: 'One accountable team',
    body: 'Design, build and support under one roof. When something matters, you call one number.',
  },
  {
    title: 'Built for the Kingdom',
    body: 'Local delivery, local support, and environments engineered for the region’s climate and ambition.',
  },
]

export default function About() {
  const ref = useReveal('.value-card, .about-story p')
  return (
    <main>
      <PageHero
        eyebrow="Who we are"
        title={
          <>
            Connecting vision
            <br />
            with <em>technology.</em>
          </>
        }
        intro="TSSCO is a Saudi audio-visual integrator specialising in LED displays, AV solutions and command-and-control environments."
        video={asset('videos/immersive-museum.mp4')}
        poster={asset('posters/immersive-museum.jpg')}
      />
      <section className="container about-story">
        <p>
          We exist for the moments when a screen stops being hardware and becomes
          the experience itself — the operations wall a city relies on, the gallery
          that gives visitors goosebumps, the lobby that tells a company&rsquo;s story
          before anyone says a word.
        </p>
        <p>
          Our team brings together display engineers, AV designers, programmers and
          project managers who have delivered for the Kingdom&rsquo;s leading
          organisations. We are vendor-neutral, standards-driven and allergic to
          single points of failure.
        </p>
      </section>
      <section className="container value-grid">
        {VALUES.map((v) => (
          <article key={v.title} className="value-card">
            <h2>{v.title}</h2>
            <p>{v.body}</p>
          </article>
        ))}
      </section>
      <Clients />
      <CtaBand title="Meet the team behind the screens." />
    </main>
  )
}
