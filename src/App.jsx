import { useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Industries from './pages/Industries.jsx'
import Work from './pages/Work.jsx'
import Insights from './pages/Insights.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

gsap.registerPlugin(ScrollTrigger)

/** Scroll to top (or the URL hash target) on every route change. */
function ScrollManager({ lenisRef }) {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const target = hash ? document.querySelector(hash) : null
    if (target) {
      if (lenisRef.current) lenisRef.current.scrollTo(target, { immediate: false })
      else target.scrollIntoView({ behavior: 'smooth' })
    } else {
      if (lenisRef.current) lenisRef.current.scrollTo(0, { immediate: true })
      else window.scrollTo(0, 0)
    }
    // New page content changes layout — recalc all scroll triggers.
    requestAnimationFrame(() => ScrollTrigger.refresh())
  }, [pathname, hash, lenisRef])

  return null
}

export default function App() {
  const lenisRef = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    if (prefersReducedMotion) return

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    lenisRef.current = lenis
    lenis.on('scroll', ScrollTrigger.update)

    const raf = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(raf)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <ScrollManager lenisRef={lenisRef} />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/work" element={<Work />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
