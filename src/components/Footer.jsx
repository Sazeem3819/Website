export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="logo-word">
            TSSC
            <span className="logo-o">
              O<span className="logo-dot" />
            </span>
          </span>
          <p>Connecting vision with technology.</p>
        </div>
        <nav className="footer-links" aria-label="Footer">
          <a href="#solutions">Solutions</a>
          <a href="#clients">Clients</a>
          <a href="#contact">Contact</a>
        </nav>
        <p className="footer-copy">
          © {new Date().getFullYear()} TSSCO. LED Displays · AV Solutions ·
          Command &amp; Control. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
