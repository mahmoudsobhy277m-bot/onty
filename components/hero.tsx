"use client"

import Image from "next/image"
import { useLang } from "./language-context"

export function Hero() {
  const { t } = useLang()

  return (
    <section className="relative min-h-screen overflow-hidden bg-primary pt-16">
      {/* Background image overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary" />
      </div>

      {/* Decorative bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-primary-foreground/10 bg-primary-foreground/5"
            style={{
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              left: `${10 + Math.random() * 80}%`,
              bottom: `-${Math.random() * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Gold geometric line accents */}
      <div className="absolute top-24 left-8 w-32 h-px bg-gradient-to-r from-gold/60 to-transparent" />
      <div className="absolute top-24 right-8 w-32 h-px bg-gradient-to-l from-gold/60 to-transparent" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 pt-24 pb-16 lg:flex-row lg:gap-16 lg:pt-32">
        {/* Text content */}
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-start">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span className="text-xs font-semibold tracking-wider text-gold uppercase">
              {t("Premium Egyptian Craftsmanship", "\u0635\u0646\u0627\u0639\u0629 \u0645\u0635\u0631\u064A\u0629 \u0641\u0627\u062E\u0631\u0629")}
            </span>
          </div>

          <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance">
            {t(
              "The Power of Clean, The Gentleness of Care",
              "\u0642\u0648\u0629 \u0627\u0644\u0646\u0638\u0627\u0641\u0629\u060C \u0648\u0631\u0642\u0629 \u0627\u0644\u0639\u0646\u0627\u064A\u0629"
            )}
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-primary-foreground/70">
            {t(
              "ONTI combines ancient Egyptian wisdom with modern cleaning science. A premium dishwashing liquid that protects your hands while eliminating the toughest grease.",
              "\u0623\u0648\u0646\u062A\u064A \u064A\u062C\u0645\u0639 \u0628\u064A\u0646 \u0627\u0644\u062D\u0643\u0645\u0629 \u0627\u0644\u0645\u0635\u0631\u064A\u0629 \u0627\u0644\u0642\u062F\u064A\u0645\u0629 \u0648\u0639\u0644\u0645 \u0627\u0644\u062A\u0646\u0638\u064A\u0641 \u0627\u0644\u062D\u062F\u064A\u062B. \u0633\u0627\u0626\u0644 \u063A\u0633\u064A\u0644 \u0623\u0637\u0628\u0627\u0642 \u0641\u0627\u062E\u0631 \u064A\u062D\u0645\u064A \u064A\u062F\u064A\u0643 \u0645\u0639 \u0625\u0632\u0627\u0644\u0629 \u0623\u0635\u0639\u0628 \u0627\u0644\u062F\u0647\u0648\u0646."
            )}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#about"
              className="group relative inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-accent-foreground shadow-lg shadow-gold/20 transition-all hover:shadow-gold/40 hover:scale-105"
            >
              {t("Discover ONTI", "\u0627\u0643\u062A\u0634\u0641 \u0623\u0648\u0646\u062A\u064A")}
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#benefits"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:border-gold hover:text-gold"
            >
              {t("See Benefits", "\u0634\u0627\u0647\u062F \u0627\u0644\u0641\u0648\u0627\u0626\u062F")}
            </a>
          </div>

          {/* Stats */}
          <div className="mt-14 flex items-center gap-8 border-t border-primary-foreground/10 pt-8">
            {[
              { value: "800ml", label: t("Premium Formula", "\u062A\u0631\u0643\u064A\u0628\u0629 \u0641\u0627\u062E\u0631\u0629") },
              { value: "0%", label: t("Harsh Chemicals", "\u0645\u0648\u0627\u062F \u0643\u064A\u0645\u064A\u0627\u0626\u064A\u0629 \u0636\u0627\u0631\u0629") },
              { value: "100%", label: t("Skin Safe", "\u0622\u0645\u0646 \u0639\u0644\u0649 \u0627\u0644\u0628\u0634\u0631\u0629") },
            ].map((stat) => (
              <div key={stat.value} className="text-center">
                <div className="text-2xl font-bold text-gold">{stat.value}</div>
                <div className="mt-1 text-xs text-primary-foreground/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Product image */}
        <div className="relative flex flex-1 items-center justify-center">
          <div className="absolute -inset-8 rounded-full bg-gold/5 blur-3xl" />
          <div className="relative animate-float">
            <Image
              src="/images/onti-product.png"
              alt="ONTI Premium Dish Soap"
              width={500}
              height={600}
              className="relative z-10 drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 80V40C360 0 720 80 1080 40C1260 20 1380 20 1440 30V80H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  )
}
