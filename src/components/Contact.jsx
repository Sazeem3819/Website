import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { CONTACT } from '../data/contact.js'

export default function Contact() {
  const rootRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-inner > *',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: rootRef.current, start: 'top 70%' },
        }
      )
      gsap.fromTo(
        '.contact-glow',
        { opacity: 0.35, scale: 0.9 },
        {
          opacity: 0.7,
          scale: 1.1,
          ease: 'none',
          scrollTrigger: {
            trigger: rootRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      )
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={rootRef} className="contact" id="contact">
      <div className="contact-glow" aria-hidden="true" />
      <div className="contact-inner container">
        <p className="section-eyebrow">Start a project</p>
        <h2 className="contact-title">
          Let&rsquo;s build something
          <br />
          <em>worth watching.</em>
        </h2>
        <p className="contact-sub">
          Tell us about your space, your audience and your ambition — we&rsquo;ll
          bring the engineering.
        </p>
        <div className="contact-actions">
          <a className="btn btn-primary" href={`mailto:${CONTACT.email}`}>
            {CONTACT.email}
          </a>
          <a className="btn btn-ghost" href={CONTACT.phoneHref}>
            {CONTACT.phoneDisplay}
          </a>
          <a
            className="btn btn-ghost"
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>
        <a
          className="contact-loc"
          href={CONTACT.mapsHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          {CONTACT.addressShort}
        </a>
      </div>
    </section>
  )
}
