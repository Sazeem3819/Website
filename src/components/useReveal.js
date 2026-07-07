import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

/**
 * Fade-up children matching `selector` when they scroll into view.
 * Returns a ref to attach to the section root.
 */
export default function useReveal(selector, options = {}) {
  const rootRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(selector).forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 44 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: (i % (options.staggerGroup || 3)) * 0.08,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%' },
          }
        )
      })
    }, rootRef)
    return () => ctx.revert()
  }, [selector, options.staggerGroup])

  return rootRef
}
