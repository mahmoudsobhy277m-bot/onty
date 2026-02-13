"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Lang = "en" | "ar"

interface LanguageContextType {
  lang: Lang
  toggleLang: () => void
  t: (en: string, ar: string) => string
  dir: "ltr" | "rtl"
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en")

  const toggleLang = () => setLang((prev) => (prev === "en" ? "ar" : "en"))
  const t = (en: string, ar: string) => (lang === "en" ? en : ar)
  const dir = lang === "ar" ? "rtl" : "ltr"

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t, dir }}>
      <div dir={dir}>{children}</div>
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLang must be used within LanguageProvider")
  return ctx
}
