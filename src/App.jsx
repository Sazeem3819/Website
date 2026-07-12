import { lazy, Suspense, useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

import { LanguageProvider, useLang } from './i18n/LanguageContext.jsx'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'

const Services = lazy(() => import('./pages/Services.jsx'))
const Industries = lazy(() => import('./pages/Industries.jsx'))
const Insights = lazy(() => import('./pages/Insights.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))

gsap.registerPlugin(ScrollTrigger)

/** Scroll to top (or the URL hash target) on route change; keep page meta in sync. */
function ScrollAndMeta({ lenisRef }) {
  const { pathname, hash } = useLocation()
  const { t, lang } = useLang()

  useEffect(() => {
    const target = hash ? document.querySelector(hash) : null
    if (target) {
      if (lenisRef.current) lenisRef.current.scrollTo(target, { immediate: false })
      else target.scrollIntoView({ behavior: 'smooth' })
    } else {
      if (lenisRef.current) lenisRef.current.scrollTo(0, { immediate: true })
      else window.scrollTo(0, 0)
    }
    requestAnimationFrame(() => ScrollTrigger.refresh())
  }, [pathname, hash, lenisRef])

  useEffect(() => {
    const key = pathname.replaceAll('/', '')
    document.title = t.meta.pages[key] || t.meta.title
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', t.meta.description)
  }, [pathname, t, lang])

  return null
}

function Shell() {
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
      <ScrollAndMeta lenisRef={lenisRef} />
      <Nav />
      <Suspense fallback={<div style={{ minHeight: '100svh' }} />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <Shell />
    </LanguageProvider>
  )
}
