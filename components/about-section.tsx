"use client"

import Image from "next/image"
import { useLang } from "./language-context"
import { useReveal } from "@/hooks/use-reveal"

export function AboutSection() {
  const { t } = useLang()
  const ref = useReveal()

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Subtle gold geometric accent */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div ref={ref} className="reveal mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          {/* Image side */}
          <div className="relative flex-1">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/images/onti-product.png"
                alt="ONTI Product"
                width={560}
                height={480}
                className="h-auto w-full object-cover"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-primary/90 backdrop-blur-sm p-4">
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/onti-icon.png"
                    alt="ONTI Icon"
                    width={40}
                    height={40}
                    className="h-10 w-10 brightness-0 invert"
                  />
                  <div>
                    <p className="text-sm font-semibold text-primary-foreground">
                      {t("Egyptian Heritage", "\u062A\u0631\u0627\u062B \u0645\u0635\u0631\u064A")}
                    </p>
                    <p className="text-xs text-primary-foreground/60">
                      {t("Modern Innovation", "\u0627\u0628\u062A\u0643\u0627\u0631 \u062D\u062F\u064A\u062B")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="flex-1">
            <span className="text-xs font-semibold tracking-widest text-gold uppercase">
              {t("About the Brand", "\u0639\u0646 \u0627\u0644\u0639\u0644\u0627\u0645\u0629 \u0627\u0644\u062A\u062C\u0627\u0631\u064A\u0629")}
            </span>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-foreground sm:text-4xl text-balance">
              {t("What is ONTI?", "\u0645\u0627 \u0647\u0648 \u0623\u0648\u0646\u062A\u064A\u061F")}
            </h2>
            <div className="mt-2 h-1 w-12 rounded-full bg-gold" />

            <p className="mt-8 text-base leading-relaxed text-muted-foreground">
              {t(
                "ONTI is more than just a dishwashing liquid. It is a premium Egyptian brand inspired by the timeless principles of purity, strength, and care that defined ancient Egyptian civilization.",
                "\u0623\u0648\u0646\u062A\u064A \u0644\u064A\u0633 \u0645\u062C\u0631\u062F \u0633\u0627\u0626\u0644 \u063A\u0633\u064A\u0644 \u0623\u0637\u0628\u0627\u0642. \u0625\u0646\u0647 \u0639\u0644\u0627\u0645\u0629 \u062A\u062C\u0627\u0631\u064A\u0629 \u0645\u0635\u0631\u064A\u0629 \u0641\u0627\u062E\u0631\u0629 \u0645\u0633\u062A\u0648\u062D\u0627\u0629 \u0645\u0646 \u0645\u0628\u0627\u062F\u0626 \u0627\u0644\u0646\u0642\u0627\u0621 \u0648\u0627\u0644\u0642\u0648\u0629 \u0648\u0627\u0644\u0639\u0646\u0627\u064A\u0629 \u0627\u0644\u062E\u0627\u0644\u062F\u0629 \u0627\u0644\u062A\u064A \u0645\u064A\u0632\u062A \u0627\u0644\u062D\u0636\u0627\u0631\u0629 \u0627\u0644\u0645\u0635\u0631\u064A\u0629 \u0627\u0644\u0642\u062F\u064A\u0645\u0629."
              )}
            </p>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {t(
                "Our formula delivers exceptional grease-cutting power while remaining gentle on your skin. With 800ml of concentrated formula, ONTI provides lasting value without compromising on quality.",
                "\u062A\u0631\u0643\u064A\u0628\u062A\u0646\u0627 \u062A\u0648\u0641\u0631 \u0642\u0648\u0629 \u0627\u0633\u062A\u062B\u0646\u0627\u0626\u064A\u0629 \u0641\u064A \u0625\u0632\u0627\u0644\u0629 \u0627\u0644\u062F\u0647\u0648\u0646 \u0645\u0639 \u0627\u0644\u062D\u0641\u0627\u0638 \u0639\u0644\u0649 \u0646\u0639\u0648\u0645\u0629 \u0628\u0634\u0631\u062A\u0643. \u0645\u0639 800 \u0645\u0644 \u0645\u0646 \u0627\u0644\u062A\u0631\u0643\u064A\u0628\u0629 \u0627\u0644\u0645\u0631\u0643\u0632\u0629\u060C \u064A\u0648\u0641\u0631 \u0623\u0648\u0646\u062A\u064A \u0642\u064A\u0645\u0629 \u062F\u0627\u0626\u0645\u0629 \u062F\u0648\u0646 \u0627\u0644\u0645\u0633\u0627\u0648\u0645\u0629 \u0639\u0644\u0649 \u0627\u0644\u062C\u0648\u062F\u0629."
              )}
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                {
                  icon: (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  text: t("0% Harsh Chemicals", "0% \u0645\u0648\u0627\u062F \u0643\u064A\u0645\u064A\u0627\u0626\u064A\u0629 \u0636\u0627\u0631\u0629"),
                },
                {
                  icon: (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  text: t("Concentrated 800ml", "\u0645\u0631\u0643\u0632 800 \u0645\u0644"),
                },
                {
                  icon: (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  text: t("Lemon Fresh Scent", "\u0631\u0627\u0626\u062D\u0629 \u0627\u0644\u0644\u064A\u0645\u0648\u0646 \u0627\u0644\u0645\u0646\u0639\u0634\u0629"),
                },
                {
                  icon: (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  text: t("Skin Friendly", "\u0644\u0637\u064A\u0641 \u0639\u0644\u0649 \u0627\u0644\u0628\u0634\u0631\u0629"),
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <span className="flex-shrink-0 text-gold">{item.icon}</span>
                  <span className="text-sm font-medium text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
