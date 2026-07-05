import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

const STATEMENT =
  'We build the screens the Kingdom watches — the walls that command cities, the rooms that move audiences, and the systems behind them all.'

export default function Manifesto() {
  const rootRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.manifesto-word',
        { opacity: 0.12 },
        {
          opacity: 1,
          stagger: 0.4,
          ease: 'none',
          scrollTrigger: {
            trigger: rootRef.current,
            start: 'top 75%',
            end: 'bottom 45%',
            scrub: true,
          },
        }
      )
      gsap.fromTo(
        '.manifesto-meta',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.manifesto-meta', start: 'top 88%' },
        }
      )
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={rootRef} className="manifesto">
      <div className="container">
        <p className="manifesto-meta section-eyebrow">TSSCO — Riyadh, Saudi Arabia</p>
        <p className="manifesto-text">
          {STATEMENT.split(' ').map((word, i) => (
            <span key={i} className="manifesto-word">
              {word}{' '}
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}
