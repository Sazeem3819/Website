import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import LazyVideo from './LazyVideo.jsx'
import { asset } from '../data/solutions.js'

export default function Hero() {
  const rootRef = useRef(null)

  useLayoutEffect(() => {
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
      gsap.to('.hero-media', {
        yPercent: 18,
        scale: 1.08,
        ease: 'none',
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
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
    }, rootRef)
    return () => ctx.revert()
  }, [])

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
        <p className="hero-eyebrow">
          LED Displays&ensp;·&ensp;AV Solutions&ensp;·&ensp;Command &amp; Control
        </p>
        <h1 className="hero-title" aria-label="Connecting vision with technology">
          <span className="hero-line">
            <span className="hero-line-inner">Connecting</span>
          </span>
          <span className="hero-line">
            <span className="hero-line-inner">vision with</span>
          </span>
          <span className="hero-line">
            <span className="hero-line-inner accent">technology.</span>
          </span>
        </h1>
        <p className="hero-sub">
          TSSCO designs, engineers and delivers the Kingdom&rsquo;s most ambitious
          visual environments — from mission-critical control rooms to immersive
          cultural experiences.
        </p>
        <div className="hero-scroll-hint" aria-hidden="true">
          <span className="hero-scroll-track">
            <span className="hero-scroll-thumb" />
          </span>
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  )
}
