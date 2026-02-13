"use client"

import Image from "next/image"
import { useLang } from "./language-context"
import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react"

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.7a8.26 8.26 0 004.76 1.5V6.75a4.8 4.8 0 01-1-.06z"
        fill="currentColor"
      />
    </svg>
  )
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: MessageCircle, href: "#", label: "WhatsApp" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: TikTokIcon, href: "#", label: "TikTok" },
]

export function Header() {
  const { lang, toggleLang, t } = useLang()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <div className="flex items-center gap-3">
          <Image
            src="/images/onti-logo.png"
            alt="ONTI Logo"
            width={100}
            height={40}
            className="h-20 w-auto brightness-0 invert"
          />
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          {[
            { href: "#about", label: t("About", "\u062D\u0648\u0644") },
            { href: "#problems", label: t("Solutions", "\u0627\u0644\u062D\u0644\u0648\u0644") },
            { href: "#benefits", label: t("Benefits", "\u0627\u0644\u0641\u0648\u0627\u0626\u062F") },
            { href: "#reviews", label: t("Reviews", "\u0627\u0644\u062A\u0642\u064A\u064A\u0645\u0627\u062A") },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2 sm:flex">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-8 w-8 items-center justify-center rounded-full text-primary-foreground/70 transition-all hover:bg-primary-foreground/10 hover:text-gold hover:scale-110"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          <button
            onClick={toggleLang}
            className="flex h-8 items-center gap-1.5 rounded-full border border-primary-foreground/20 px-3 text-xs font-semibold text-primary-foreground transition-all hover:border-gold hover:text-gold"
          >
            {lang === "en" ? "\u0639\u0631\u0628\u064A" : "EN"}
          </button>
        </div>
      </div>
    </header>
  )
}
