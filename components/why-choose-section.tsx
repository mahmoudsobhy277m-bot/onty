"use client"

import Image from "next/image"
import { useLang } from "./language-context"
import { useReveal } from "@/hooks/use-reveal"

export function WhyChooseSection() {
  const { t } = useLang()
  const ref = useReveal()

  return (
    <section className="relative overflow-hidden bg-primary py-24">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Pharaonic geometric pattern overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 30px, hsl(var(--gold)) 30px, hsl(var(--gold)) 31px)`,
        }} />
      </div>

      <div ref={ref} className="reveal relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          <div className="flex-1">
            <span className="text-xs font-semibold tracking-widest text-gold uppercase">
              {t("The ONTI Difference", "\u0641\u0631\u0642 \u0623\u0648\u0646\u062A\u064A")}
            </span>
            <h2 className="mt-4 font-serif text-3xl font-bold text-primary-foreground sm:text-4xl text-balance">
              {t("Why Choose ONTI?", "\u0644\u0645\u0627\u0630\u0627 \u062A\u062E\u062A\u0627\u0631 \u0623\u0648\u0646\u062A\u064A\u061F")}
            </h2>
            <div className="mt-3 h-1 w-12 rounded-full bg-gold" />

            <p className="mt-8 text-base leading-relaxed text-primary-foreground/70">
              {t(
                "In a market flooded with generic options, ONTI stands apart. We don't just clean dishes -- we care for the people who use our product. Every bottle represents our commitment to quality, safety, and Egyptian pride.",
                "\u0641\u064A \u0633\u0648\u0642 \u0645\u0644\u064A\u0621 \u0628\u0627\u0644\u062E\u064A\u0627\u0631\u0627\u062A \u0627\u0644\u0639\u0627\u0645\u0629\u060C \u064A\u062A\u0645\u064A\u0632 \u0623\u0648\u0646\u062A\u064A. \u0646\u062D\u0646 \u0644\u0627 \u0646\u0646\u0638\u0641 \u0627\u0644\u0623\u0637\u0628\u0627\u0642 \u0641\u0642\u0637 - \u0628\u0644 \u0646\u0647\u062A\u0645 \u0628\u0627\u0644\u0623\u0634\u062E\u0627\u0635 \u0627\u0644\u0630\u064A\u0646 \u064A\u0633\u062A\u062E\u062F\u0645\u0648\u0646 \u0645\u0646\u062A\u062C\u0646\u0627. \u0643\u0644 \u0639\u0628\u0648\u0629 \u062A\u0645\u062B\u0644 \u0627\u0644\u062A\u0632\u0627\u0645\u0646\u0627 \u0628\u0627\u0644\u062C\u0648\u062F\u0629 \u0648\u0627\u0644\u0623\u0645\u0627\u0646 \u0648\u0627\u0644\u0641\u062E\u0631 \u0627\u0644\u0645\u0635\u0631\u064A."
              )}
            </p>

            <div className="mt-10 flex flex-col gap-6">
              {[
                {
                  label: t("Egyptian Made", "\u0635\u0646\u0639 \u0645\u0635\u0631\u064A"),
                  desc: t(
                    "Proudly manufactured in Egypt, supporting local communities and economy.",
                    "\u0645\u0635\u0646\u0648\u0639 \u0628\u0641\u062E\u0631 \u0641\u064A \u0645\u0635\u0631\u060C \u062F\u0639\u0645\u064B\u0627 \u0644\u0644\u0645\u062C\u062A\u0645\u0639\u0627\u062A \u0648\u0627\u0644\u0627\u0642\u062A\u0635\u0627\u062F \u0627\u0644\u0645\u062D\u0644\u064A."
                  ),
                },
                {
                  label: t("Health First", "\u0627\u0644\u0635\u062D\u0629 \u0623\u0648\u0644\u0627\u064B"),
                  desc: t(
                    "Dermatologically tested formula that prioritizes your family's health and wellbeing.",
                    "\u062A\u0631\u0643\u064A\u0628\u0629 \u0645\u062E\u062A\u0628\u0631\u0629 \u0637\u0628\u064A\u064B\u0627 \u062A\u0639\u0637\u064A \u0627\u0644\u0623\u0648\u0644\u0648\u064A\u0629 \u0644\u0635\u062D\u0629 \u0639\u0627\u0626\u0644\u062A\u0643 \u0648\u0631\u0641\u0627\u0647\u064A\u062A\u0647\u0627."
                  ),
                },
                {
                  label: t("Eco Conscious", "\u0635\u062F\u064A\u0642 \u0644\u0644\u0628\u064A\u0626\u0629"),
                  desc: t(
                    "Biodegradable formula and recyclable packaging for a cleaner planet.",
                    "\u062A\u0631\u0643\u064A\u0628\u0629 \u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u062A\u062D\u0644\u0644 \u0627\u0644\u0628\u064A\u0648\u0644\u0648\u062C\u064A \u0648\u0639\u0628\u0648\u0627\u062A \u0642\u0627\u0628\u0644\u0629 \u0644\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062A\u062F\u0648\u064A\u0631 \u0644\u0643\u0648\u0643\u0628 \u0623\u0646\u0638\u0641."
                  ),
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gold/10">
                    <div className="h-2 w-2 rounded-full bg-gold" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-primary-foreground">{item.label}</h4>
                    <p className="mt-1 text-sm text-primary-foreground/50">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Product showcase */}
          <div className="relative flex-1">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-12 rounded-full bg-gold/5 blur-3xl" />
              <Image
                src="/images/onti-product.png"
                alt="ONTI Dish Soap Bottle"
                width={400}
                height={500}
                className="relative drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  )
}
