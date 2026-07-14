import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import useReveal from '../components/useReveal.js'
import { CONTACT } from '../data/contact.js'
import { useLang } from '../i18n/LanguageContext.jsx'

export default function Contact() {
  const { t } = useLang()
  const ref = useReveal('.contact-page-grid > *')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const onSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`${t.contactPage.form.subject} — ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`
  }

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))
  const f = t.contactPage.form
  const c = t.contactPage.cards

  return (
    <main>
      <PageHero
        eyebrow={t.contactPage.eyebrow}
        title={
          <>
            {t.contactPage.title1}
            <br />
            <em>{t.contactPage.titleEm}</em>
          </>
        }
        intro={t.contactPage.intro}
      />
      <section className="container contact-page-grid" ref={ref}>
        <form className="contact-form" onSubmit={onSubmit}>
          <label>
            {f.name}
            <input type="text" required autoComplete="name" value={form.name} onChange={set('name')} placeholder={f.namePh} />
          </label>
          <label>
            {f.email}
            <input type="email" required autoComplete="email" value={form.email} onChange={set('email')} placeholder={f.emailPh} />
          </label>
          <label>
            {f.project}
            <textarea rows={6} required value={form.message} onChange={set('message')} placeholder={f.projectPh} />
          </label>
          <button className="btn btn-primary" type="submit">
            {f.send}
          </button>
          <p className="contact-form-note">{f.note}</p>
        </form>
        <aside className="contact-cards">
          <div className="contact-card">
            <h2>{c.email}</h2>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </div>
          <div className="contact-card">
            <h2>{c.phone}</h2>
            <a href={CONTACT.phoneHref} dir="ltr">
              {CONTACT.phoneDisplay}
            </a>
            <br />
            <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer">
              {c.whatsapp} {t.arrow}
            </a>
          </div>
          <div className="contact-card">
            <h2>{c.office}</h2>
            <a href={CONTACT.mapsHref} target="_blank" rel="noopener noreferrer">
              {t.footer.addressLines.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
              <span className="contact-card-maps">
                {c.maps} {t.arrow}
              </span>
            </a>
          </div>
          <div className="contact-card">
            <h2>{c.hours}</h2>
            <p>{c.hoursValue}</p>
          </div>
        </aside>
      </section>
    </main>
  )
}
