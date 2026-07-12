import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext.jsx'

function Logo() {
  return (
    <Link to="/" className="logo" aria-label="TSSCO — home">
      <span className="logo-word">
        TSSC
        <span className="logo-o">
          O<span className="logo-dot" />
        </span>
      </span>
    </Link>
  )
}

const ROUTES = ['/services', '/industries', '/insights', '/about']
const KEYS = ['services', 'industries', 'insights', 'about']

export default function Nav() {
  const { t, toggle } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('menu-open', open)
    return () => document.documentElement.classList.remove('menu-open')
  }, [open])

  const close = () => setOpen(false)

  const links = ROUTES.map((to, i) => (
    <NavLink key={to} to={to} onClick={close}>
      {t.nav[KEYS[i]]}
    </NavLink>
  ))

  const langButton = (
    <button className="nav-lang" onClick={() => (close(), toggle())} aria-label="Switch language">
      {t.nav.langLabel}
    </button>
  )

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${open ? 'nav--open' : ''}`}>
      <div className="nav-inner">
        <Logo />
        <nav className="nav-links" aria-label="Primary">
          {links}
          {langButton}
          <Link to="/contact" className="nav-cta" onClick={close}>
            {t.nav.cta}
          </Link>
        </nav>
        <button
          className="nav-burger"
          aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>
      <div className="nav-drawer" aria-hidden={!open}>
        {links}
        {langButton}
        <Link to="/contact" className="nav-cta" onClick={close}>
          {t.nav.cta}
        </Link>
      </div>
    </header>
  )
}
