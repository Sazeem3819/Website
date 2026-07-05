import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import LazyVideo from './LazyVideo.jsx'
import { SOLUTIONS } from '../data/solutions.js'

function SolutionPanel({ solution }) {
  const panelRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Cinematic aperture: the media frame opens as the panel arrives.
      gsap.fromTo(
        '.solution-media',
        { clipPath: 'inset(14% 8% 14% 8% round 20px)' },
        {
          clipPath: 'inset(0% 0% 0% 0% round 0px)',
          ease: 'none',
          scrollTrigger: {
            trigger: panelRef.current,
            start: 'top 90%',
            end: 'top 15%',
            scrub: true,
          },
        }
      )

      // Slow drift inside the frame for depth.
      gsap.fromTo(
        '.lazy-video',
        { yPercent: -8, scale: 1.15 },
        {
          yPercent: 8,
          ease: 'none',
          scrollTrigger: {
            trigger: panelRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      )

      gsap.fromTo(
        '.solution-copy > *',
        { opacity: 0, y: 46 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          stagger: 0.09,
          ease: 'power3.out',
          scrollTrigger: { trigger: panelRef.current, start: 'top 55%' },
        }
      )
    }, panelRef)
    return () => ctx.revert()
  }, [])

  return (
    <article
      ref={panelRef}
      className={`solution ${solution.treatment ? `solution--${solution.treatment}` : ''}`}
      id={solution.id}
    >
      <div className="solution-media">
        {solution.image ? (
          <img
            className="lazy-video"
            src={solution.image}
            alt={solution.imageAlt || ''}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <LazyVideo src={solution.video} poster={solution.poster} />
        )}
        <div className="solution-scrim" />
      </div>
      <div className="solution-copy container">
        <span className="solution-index">{solution.index}</span>
        <p className="solution-kicker section-eyebrow">{solution.kicker}</p>
        <h3 className="solution-title">{solution.title}</h3>
        <p className="solution-desc">{solution.description}</p>
        <a className="solution-link" href="#contact">
          Discuss your project <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  )
}

export default function Solutions() {
  const headRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.solutions-head > *',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: { trigger: headRef.current, start: 'top 80%' },
        }
      )
    }, headRef)
    return () => ctx.revert()
  }, [])

  return (
    <section className="solutions" id="solutions">
      <div ref={headRef} className="solutions-head container">
        <p className="section-eyebrow">What we do</p>
        <h2 className="section-title">
          Four disciplines.
          <br />
          One standard: <em>flawless.</em>
        </h2>
      </div>
      {SOLUTIONS.map((s) => (
        <SolutionPanel key={s.id} solution={s} />
      ))}
    </section>
  )
}
