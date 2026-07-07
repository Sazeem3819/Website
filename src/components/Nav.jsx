import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

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

const LINKS = [
  ['What We Do', '/services'],
  ['Industries', '/industries'],
  ['Our Work', '/work'],
  ['Insights', '/insights'],
  ['About', '/about'],
]

export default function Nav() {
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

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${open ? 'nav--open' : ''}`}>
      <div className="nav-inner">
        <Logo />
        <nav className="nav-links" aria-label="Primary">
          {LINKS.map(([label, to]) => (
            <NavLink key={to} to={to} onClick={close}>
              {label}
            </NavLink>
          ))}
          <Link to="/contact" className="nav-cta" onClick={close}>
            Start a project
          </Link>
        </nav>
        <button
          className="nav-burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>
      <div className="nav-drawer" aria-hidden={!open}>
        {LINKS.map(([label, to]) => (
          <NavLink key={to} to={to} onClick={close}>
            {label}
          </NavLink>
        ))}
        <Link to="/contact" className="nav-cta" onClick={close}>
          Start a project
        </Link>
      </div>
    </header>
  )
}
