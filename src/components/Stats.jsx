import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

const STATS = [
  { value: 4, suffix: '', label: 'Core disciplines' },
  { value: 100, suffix: '%', label: 'In-Kingdom delivery' },
  { value: 24, suffix: '/7', label: 'Mission-critical support' },
]

export default function Stats() {
  const rootRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.stat-value').forEach((el) => {
        const target = Number(el.dataset.value)
        const counter = { v: 0 }
        gsap.to(counter, {
          v: target,
          duration: 1.6,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%' },
          onUpdate: () => {
            el.firstChild.textContent = Math.round(counter.v)
          },
        })
      })
      gsap.fromTo(
        '.stat',
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: { trigger: rootRef.current, start: 'top 82%' },
        }
      )
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={rootRef} className="stats">
      <div className="container stats-grid">
        {STATS.map((s) => (
          <div className="stat" key={s.label}>
            <span className="stat-value" data-value={s.value}>
              <span>0</span>
              {s.suffix}
            </span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
