import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import en from './en.js'
import ar from './ar.js'

const DICTIONARIES = { en, ar }
const STORAGE_KEY = 'tssco-lang'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored === 'ar' || stored === 'en' ? stored : 'en'
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }, [lang])

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggle: () => setLang((l) => (l === 'en' ? 'ar' : 'en')),
      t: DICTIONARIES[lang],
      dir: lang === 'ar' ? 'rtl' : 'ltr',
      isRTL: lang === 'ar',
    }),
    [lang]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used inside LanguageProvider')
  return ctx
}
