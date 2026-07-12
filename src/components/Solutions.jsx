import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import LazyVideo from './LazyVideo.jsx'
import { SOLUTIONS } from '../data/solutions.js'
import { useLang } from '../i18n/LanguageContext.jsx'

const isSmallScreen = () => window.matchMedia('(max-width: 768px)').matches

function SolutionPanel({ solution }) {
  const panelRef = useRef(null)
  const { t, lang } = useLang()
  const copy = t.solutions[solution.id]

  useLayoutEffect(() => {
    const small = isSmallScreen()
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

      // Slow drift inside the frame; smaller overscan on mobile for FPS.
      gsap.fromTo(
        '.lazy-video',
        { yPercent: small ? -4 : -8, scale: small ? 1.08 : 1.15 },
        {
          yPercent: small ? 4 : 8,
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
  }, [lang])

  return (
    <article ref={panelRef} className="solution" id={solution.id}>
      <div className="solution-media">
        <LazyVideo src={solution.video} poster={solution.poster} />
        <div className="solution-scrim" />
      </div>
      <div className="solution-copy container">
        <span className="solution-index">{solution.index}</span>
        <p className="solution-kicker section-eyebrow">{copy.kicker}</p>
        <h3 className="solution-title">{copy.title}</h3>
        <p className="solution-desc">{copy.description}</p>
        <Link className="solution-link" to={solution.href}>
          {t.solutionLink} <span aria-hidden="true">{t.arrow}</span>
        </Link>
      </div>
    </article>
  )
}

export default function Solutions() {
  const headRef = useRef(null)
  const { t, lang } = useLang()

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
  }, [lang])

  return (
    <section className="solutions" id="solutions">
      <div ref={headRef} className="solutions-head container">
        <p className="section-eyebrow">{t.solutionsHead.eyebrow}</p>
        <h2 className="section-title">
          {t.solutionsHead.title1}
          <br />
          {t.solutionsHead.title2}
          <em>{t.solutionsHead.titleEm}</em>
        </h2>
      </div>
      {SOLUTIONS.map((s) => (
        <SolutionPanel key={s.id} solution={s} />
      ))}
    </section>
  )
}
