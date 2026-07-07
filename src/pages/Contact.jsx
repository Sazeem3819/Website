import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import useReveal from '../components/useReveal.js'

export default function Contact() {
  const ref = useReveal('.contact-page-grid > *')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const onSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Project enquiry — ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:info@tssco.org?subject=${subject}&body=${body}`
  }

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&rsquo;s build something
            <br />
            <em>worth watching.</em>
          </>
        }
        intro="Tell us about your space, your audience and your ambition — we'll bring the engineering."
      />
      <section className="container contact-page-grid">
        <form className="contact-form" onSubmit={onSubmit}>
          <label>
            Name
            <input type="text" required value={form.name} onChange={set('name')} placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" required value={form.email} onChange={set('email')} placeholder="you@company.com" />
          </label>
          <label>
            Project
            <textarea rows={6} required value={form.message} onChange={set('message')} placeholder="Tell us about the space, timeline and what success looks like." />
          </label>
          <button className="btn btn-primary" type="submit">
            Send enquiry
          </button>
          <p className="contact-form-note">Submitting opens your email client — nothing is stored on this site.</p>
        </form>
        <aside className="contact-cards">
          <div className="contact-card">
            <h2>Email</h2>
            <a href="mailto:info@tssco.org">info@tssco.org</a>
          </div>
          <div className="contact-card">
            <h2>Phone</h2>
            <a href="tel:+966000000000">+966 (0) 00 000 0000</a>
          </div>
          <div className="contact-card">
            <h2>Office</h2>
            <p>Riyadh, Kingdom of Saudi Arabia</p>
          </div>
          <div className="contact-card">
            <h2>Hours</h2>
            <p>Sunday – Thursday, 9:00 – 18:00 AST</p>
          </div>
        </aside>
      </section>
    </main>
  )
}
