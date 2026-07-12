import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { useLang } from '../i18n/LanguageContext.jsx'

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
  const { t, lang } = useLang()

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
  }, [lang])

  const names = t.clients.names
  const row = [...names, ...names]

  return (
    <section ref={rootRef} className="clients" id="clients">
      <div className="clients-head container">
        <p className="section-eyebrow">{t.clients.eyebrow}</p>
        <h2 className="section-title">
          {t.clients.title1}
          <br />
          {t.clients.title2}
        </h2>
        <p className="clients-sub">{t.clients.sub}</p>
      </div>
      <div className="marquee" aria-label={names.join(', ')}>
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
