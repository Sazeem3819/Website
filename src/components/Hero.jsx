import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import LazyVideo from './LazyVideo.jsx'
import { asset } from '../data/solutions.js'
import { useLang } from '../i18n/LanguageContext.jsx'

const isSmallScreen = () => window.matchMedia('(max-width: 768px)').matches

export default function Hero() {
  const rootRef = useRef(null)
  const { t, lang } = useLang()

  useLayoutEffect(() => {
    const small = isSmallScreen()
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: 'power4.out' } })
        .fromTo(
          '.hero-line-inner',
          { yPercent: 110 },
          { yPercent: 0, duration: 1.4, stagger: 0.12, delay: 0.35 }
        )
        .fromTo(
          '.hero-sub, .hero-scroll-hint',
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.1 },
          '-=0.9'
        )

      // Depth: media sinks and dims as the next section slides over it.
      // Lighter transform budget on small screens to protect scroll FPS.
      gsap.to('.hero-media', {
        yPercent: small ? 10 : 18,
        scale: small ? 1.03 : 1.08,
        ease: 'none',
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
      if (!small) {
        gsap.to('.hero-content', {
          yPercent: -30,
          opacity: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: rootRef.current,
            start: 'top top',
            end: '75% top',
            scrub: true,
          },
        })
      }
    }, rootRef)
    return () => ctx.revert()
  }, [lang])

  return (
    <section ref={rootRef} className="hero" id="top">
      <div className="hero-media">
        <LazyVideo
          src={asset('videos/immersive-museum.mp4')}
          poster={asset('posters/immersive-museum.jpg')}
        />
        <div className="hero-scrim" />
      </div>
      <div className="hero-content container">
        <p className="hero-eyebrow">{t.hero.eyebrow}</p>
        <h1 className="hero-title">
          {[t.hero.line1, t.hero.line2, t.hero.line3].map((line, i) => (
            <span key={i} className="hero-line">
              <span className={`hero-line-inner ${i === 2 ? 'accent' : ''}`}>{line}</span>
            </span>
          ))}
        </h1>
        <p className="hero-sub">{t.hero.sub}</p>
        <div className="hero-scroll-hint" aria-hidden="true">
          <span className="hero-scroll-track">
            <span className="hero-scroll-thumb" />
          </span>
          <span>{t.hero.scroll}</span>
        </div>
      </div>
    </section>
  )
}
