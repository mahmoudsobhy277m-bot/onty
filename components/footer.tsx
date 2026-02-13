"use client"

import Image from "next/image"
import { useLang } from "./language-context"
import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react"

export function Footer() {
  const { t } = useLang()

  return (
    <footer className="bg-navy py-16 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-8">
          <Image
            src="/images/onti-logo.png"
            alt="ONTI"
            width={120}
            height={48}
            className="h-12 w-auto brightness-0 invert"
          />
          <p className="max-w-md text-center text-sm leading-relaxed text-primary-foreground/50">
            {t(
              "Premium Egyptian dishwashing liquid. Powerful cleaning, gentle care.",
              "\u0633\u0627\u0626\u0644 \u063A\u0633\u064A\u0644 \u0623\u0637\u0628\u0627\u0642 \u0645\u0635\u0631\u064A \u0641\u0627\u062E\u0631. \u062A\u0646\u0638\u064A\u0641 \u0642\u0648\u064A\u060C \u0639\u0646\u0627\u064A\u0629 \u0644\u0637\u064A\u0641\u0629."
            )}
          </p>
          <div className="flex items-center gap-4">
            {[Facebook, MessageCircle, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/10 text-primary-foreground/50 transition-all hover:border-gold hover:text-gold hover:scale-110"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <div className="h-px w-full max-w-md bg-primary-foreground/10" />
          <p className="text-xs text-primary-foreground/30">
            {t(
              "\u00A9 2026 ONTI. All rights reserved. Made with pride in Egypt.",
              "\u00A9 2026 \u0623\u0648\u0646\u062A\u064A. \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0642 \u0645\u062D\u0641\u0648\u0638\u0629. \u0635\u0646\u0639 \u0628\u0641\u062E\u0631 \u0641\u064A \u0645\u0635\u0631."
            )}
          </p>
        </div>
      </div>
    </footer>
  )
}
