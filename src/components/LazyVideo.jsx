import { useEffect, useRef } from 'react'

/**
 * Full-bleed background video that only downloads once it approaches the
 * viewport, autoplays muted/looped/inline, and pauses while off-screen.
 * The poster stays visible wherever autoplay is unavailable.
 */
export default function LazyVideo({ src, poster, className = '' }) {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const loader = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !video.src) {
          video.src = src
          video.load()
          loader.disconnect()
        }
      },
      { rootMargin: '60% 0px' }
    )
    loader.observe(video)

    const player = new IntersectionObserver(
      ([entry]) => {
        if (!video.src) return
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { rootMargin: '10% 0px' }
    )
    player.observe(video)

    return () => {
      loader.disconnect()
      player.disconnect()
    }
  }, [src])

  return (
    <video
      ref={videoRef}
      className={`lazy-video ${className}`}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
      tabIndex={-1}
    />
  )
}
