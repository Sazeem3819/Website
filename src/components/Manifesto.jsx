import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { useLang } from '../i18n/LanguageContext.jsx'

export default function Manifesto() {
  const rootRef = useRef(null)
  const { t, lang } = useLang()

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
  }, [lang])

  return (
    <section ref={rootRef} className="manifesto">
      <div className="container">
        <p className="manifesto-meta section-eyebrow">{t.manifesto.meta}</p>
        <p className="manifesto-text">
          {t.manifesto.statement.split(' ').map((word, i) => (
            <span key={i} className="manifesto-word">
              {word}{' '}
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}
