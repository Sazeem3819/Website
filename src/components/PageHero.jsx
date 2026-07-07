import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import LazyVideo from './LazyVideo.jsx'

/**
 * Editorial full-bleed page header: eyebrow, oversized title, intro copy,
 * optional background video/poster with a dark scrim.
 */
export default function PageHero({ eyebrow, title, intro, video, poster }) {
  const rootRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.page-hero-content > *',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.1, ease: 'power4.out', delay: 0.2 }
      )
      if (rootRef.current.querySelector('.page-hero-media')) {
        gsap.to('.page-hero-media', {
          yPercent: 16,
          scale: 1.06,
          ease: 'none',
          scrollTrigger: {
            trigger: rootRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })
      }
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return (
    <header ref={rootRef} className={`page-hero ${video || poster ? 'page-hero--media' : ''}`}>
      {(video || poster) && (
        <div className="page-hero-media">
          {video ? (
            <LazyVideo src={video} poster={poster} />
          ) : (
            <img className="lazy-video" src={poster} alt="" loading="eager" decoding="async" />
          )}
          <div className="page-hero-scrim" />
        </div>
      )}
      <div className="page-hero-content container">
        {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
        <h1 className="page-hero-title">{title}</h1>
        {intro && <p className="page-hero-intro">{intro}</p>}
      </div>
    </header>
  )
}
