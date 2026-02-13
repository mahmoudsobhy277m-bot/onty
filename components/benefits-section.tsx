"use client"

import { useLang } from "./language-context"
import { useReveal } from "@/hooks/use-reveal"
import { Droplets, Shield, Sparkles, Leaf, Clock, ThumbsUp } from "lucide-react"

export function BenefitsSection() {
  const { t } = useLang()
  const ref = useReveal()

  const benefits = [
    {
      icon: Droplets,
      title: t("Powerful Degreasing", "\u0625\u0632\u0627\u0644\u0629 \u0642\u0648\u064A\u0629 \u0644\u0644\u062F\u0647\u0648\u0646"),
      description: t(
        "Advanced formula cuts through the toughest grease and baked-on food with minimal effort.",
        "\u062A\u0631\u0643\u064A\u0628\u0629 \u0645\u062A\u0642\u062F\u0645\u0629 \u062A\u0632\u064A\u0644 \u0623\u0635\u0639\u0628 \u0627\u0644\u062F\u0647\u0648\u0646 \u0648\u0627\u0644\u0637\u0639\u0627\u0645 \u0627\u0644\u0645\u0644\u062A\u0635\u0642 \u0628\u0623\u0642\u0644 \u062C\u0647\u062F."
      ),
    },
    {
      icon: Shield,
      title: t("Skin Protection", "\u062D\u0645\u0627\u064A\u0629 \u0627\u0644\u0628\u0634\u0631\u0629"),
      description: t(
        "0% harsh chemicals means your hands stay soft and moisturized even after extended washing sessions.",
        "0% \u0645\u0648\u0627\u062F \u0643\u064A\u0645\u064A\u0627\u0626\u064A\u0629 \u0636\u0627\u0631\u0629 \u064A\u0639\u0646\u064A \u0623\u0646 \u064A\u062F\u064A\u0643 \u062A\u0628\u0642\u0649 \u0646\u0627\u0639\u0645\u0629 \u0648\u0631\u0637\u0628\u0629 \u062D\u062A\u0649 \u0628\u0639\u062F \u062C\u0644\u0633\u0627\u062A \u063A\u0633\u064A\u0644 \u0637\u0648\u064A\u0644\u0629."
      ),
    },
    {
      icon: Sparkles,
      title: t("Sparkling Clean", "\u0646\u0638\u0627\u0641\u0629 \u0644\u0627\u0645\u0639\u0629"),
      description: t(
        "Leaves dishes, glasses, and cutlery sparkling clean with a streak-free shine every time.",
        "\u064A\u062A\u0631\u0643 \u0627\u0644\u0623\u0637\u0628\u0627\u0642 \u0648\u0627\u0644\u0623\u0643\u0648\u0627\u0628 \u0648\u0627\u0644\u0623\u062F\u0648\u0627\u062A \u0646\u0638\u064A\u0641\u0629 \u0644\u0627\u0645\u0639\u0629 \u0628\u062F\u0648\u0646 \u0628\u0642\u0639 \u0641\u064A \u0643\u0644 \u0645\u0631\u0629."
      ),
    },
    {
      icon: Leaf,
      title: t("Fresh Lemon Scent", "\u0631\u0627\u0626\u062D\u0629 \u0644\u064A\u0645\u0648\u0646 \u0645\u0646\u0639\u0634\u0629"),
      description: t(
        "Natural lemon fragrance that freshens your kitchen and makes the washing experience enjoyable.",
        "\u0639\u0637\u0631 \u0627\u0644\u0644\u064A\u0645\u0648\u0646 \u0627\u0644\u0637\u0628\u064A\u0639\u064A \u064A\u0646\u0639\u0634 \u0645\u0637\u0628\u062E\u0643 \u0648\u064A\u062C\u0639\u0644 \u062A\u062C\u0631\u0628\u0629 \u0627\u0644\u063A\u0633\u064A\u0644 \u0645\u0645\u062A\u0639\u0629."
      ),
    },
    {
      icon: Clock,
      title: t("Long Lasting", "\u064A\u062F\u0648\u0645 \u0637\u0648\u064A\u0644\u0627\u064B"),
      description: t(
        "Concentrated 800ml formula means each bottle lasts significantly longer than regular alternatives.",
        "\u062A\u0631\u0643\u064A\u0628\u0629 \u0645\u0631\u0643\u0632\u0629 800 \u0645\u0644 \u062A\u0639\u0646\u064A \u0623\u0646 \u0643\u0644 \u0639\u0628\u0648\u0629 \u062A\u062F\u0648\u0645 \u0644\u0641\u062A\u0631\u0629 \u0623\u0637\u0648\u0644 \u0628\u0643\u062B\u064A\u0631 \u0645\u0646 \u0627\u0644\u0628\u062F\u0627\u0626\u0644 \u0627\u0644\u0639\u0627\u062F\u064A\u0629."
      ),
    },
    {
      icon: ThumbsUp,
      title: t("Great Value", "\u0642\u064A\u0645\u0629 \u0639\u0638\u064A\u0645\u0629"),
      description: t(
        "Premium quality at a fair price. ONTI delivers professional-grade cleaning to every Egyptian home.",
        "\u062C\u0648\u062F\u0629 \u0641\u0627\u062E\u0631\u0629 \u0628\u0633\u0639\u0631 \u0639\u0627\u062F\u0644. \u0623\u0648\u0646\u062A\u064A \u064A\u0642\u062F\u0645 \u062A\u0646\u0638\u064A\u0641\u064B\u0627 \u0627\u062D\u062A\u0631\u0627\u0641\u064A\u064B\u0627 \u0644\u0643\u0644 \u0645\u0646\u0632\u0644 \u0645\u0635\u0631\u064A."
      ),
    },
  ]

  return (
    <section id="benefits" className="relative py-24">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-xs font-semibold tracking-widest text-gold uppercase">
            {t("Product Benefits", "\u0641\u0648\u0627\u0626\u062F \u0627\u0644\u0645\u0646\u062A\u062C")}
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
            {t("What ONTI Offers", "\u0645\u0627 \u064A\u0642\u062F\u0645\u0647 \u0623\u0648\u0646\u062A\u064A")}
          </h2>
          <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-gold" />
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-border bg-card p-8 transition-all hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 hover:-translate-y-1"
            >
              {/* Gold corner accent */}
              <div className="absolute top-0 right-0 h-12 w-12 overflow-hidden rounded-tr-2xl">
                <div className="absolute -right-6 -top-6 h-12 w-12 rotate-45 bg-gold/10" />
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-gold/10 group-hover:text-gold">
                <benefit.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
