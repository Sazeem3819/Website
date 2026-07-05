import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { CLIENTS } from '../data/solutions.js'

function LogoMark({ name }) {
  // Placeholder wordmarks — swap for real client logo assets when provided.
  return (
    <span className="client-logo" title={name}>
      <span className="client-logo-square" aria-hidden="true" />
      {name}
    </span>
  )
}

export default function Clients() {
  const rootRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.clients-head > *',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: { trigger: rootRef.current, start: 'top 80%' },
        }
      )
    }, rootRef)
    return () => ctx.revert()
  }, [])

  const row = [...CLIENTS, ...CLIENTS, ...CLIENTS]

  return (
    <section ref={rootRef} className="clients" id="clients">
      <div className="clients-head container">
        <p className="section-eyebrow">Trusted by</p>
        <h2 className="section-title">
          Proven with the organisations
          <br />
          that move the Kingdom.
        </h2>
        <p className="clients-sub">
          Project experience with leading enterprises, government entities and
          developers across Saudi Arabia.
        </p>
      </div>
      <div className="marquee" aria-label={`Clients: ${CLIENTS.join(', ')}`}>
        <div className="marquee-track">
          {row.map((name, i) => (
            <LogoMark key={`${name}-${i}`} name={name} />
          ))}
        </div>
        <div className="marquee-track" aria-hidden="true">
          {row.map((name, i) => (
            <LogoMark key={`dup-${name}-${i}`} name={name} />
          ))}
        </div>
      </div>
    </section>
  )
}
