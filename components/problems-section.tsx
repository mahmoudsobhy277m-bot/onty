"use client"

import Image from "next/image"
import { useLang } from "./language-context"
import { useReveal } from "@/hooks/use-reveal"

export function ProblemsSection() {
  const { t } = useLang()
  const ref1 = useReveal()
  const ref2 = useReveal()
  const ref3 = useReveal()

  const problems = [
    {
      ref: ref1,
      image: "/images/dirty-dishes.jpg",
      title: t("Stubborn Grease Won't Budge", "\u0627\u0644\u062F\u0647\u0648\u0646 \u0627\u0644\u0639\u0646\u064A\u062F\u0629 \u0644\u0627 \u062A\u0632\u0648\u0644"),
      description: t(
        "Ordinary dish soaps leave behind grease residue, forcing you to scrub harder and use more product. ONTI's concentrated formula breaks down even the toughest grease on first contact.",
        "\u0627\u0644\u0635\u0627\u0628\u0648\u0646 \u0627\u0644\u0639\u0627\u062F\u064A \u064A\u062A\u0631\u0643 \u0628\u0642\u0627\u064A\u0627 \u0627\u0644\u062F\u0647\u0648\u0646\u060C \u0645\u0645\u0627 \u064A\u062C\u0628\u0631\u0643 \u0639\u0644\u0649 \u0641\u0631\u0643 \u0623\u0643\u062B\u0631 \u0648\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0645\u0646\u062A\u062C \u0623\u0643\u062B\u0631. \u062A\u0631\u0643\u064A\u0628\u0629 \u0623\u0648\u0646\u062A\u064A \u0627\u0644\u0645\u0631\u0643\u0632\u0629 \u062A\u0641\u0643\u0643 \u062D\u062A\u0649 \u0623\u0635\u0639\u0628 \u0627\u0644\u062F\u0647\u0648\u0646 \u0645\u0646 \u0623\u0648\u0644 \u0627\u062A\u0635\u0627\u0644."
      ),
      delay: "reveal-delay-1",
    },
    {
      ref: ref2,
      image: "/images/gentle-hands.jpg",
      title: t("Harsh Chemicals Damage Skin", "\u0627\u0644\u0645\u0648\u0627\u062F \u0627\u0644\u0643\u064A\u0645\u064A\u0627\u0626\u064A\u0629 \u0627\u0644\u0642\u0627\u0633\u064A\u0629 \u062A\u0636\u0631 \u0627\u0644\u0628\u0634\u0631\u0629"),
      description: t(
        "Many dishwashing liquids contain aggressive chemicals that dry out your skin and cause irritation. ONTI is formulated to be tough on grease yet gentle on your hands.",
        "\u0627\u0644\u0639\u062F\u064A\u062F \u0645\u0646 \u0633\u0648\u0627\u0626\u0644 \u063A\u0633\u064A\u0644 \u0627\u0644\u0623\u0637\u0628\u0627\u0642 \u062A\u062D\u062A\u0648\u064A \u0639\u0644\u0649 \u0645\u0648\u0627\u062F \u0643\u064A\u0645\u064A\u0627\u0626\u064A\u0629 \u0639\u062F\u0648\u0627\u0646\u064A\u0629 \u062A\u062C\u0641\u0641 \u0628\u0634\u0631\u062A\u0643 \u0648\u062A\u0633\u0628\u0628 \u0627\u0644\u062A\u0647\u064A\u062C. \u0623\u0648\u0646\u062A\u064A \u0645\u0635\u0645\u0645 \u0644\u064A\u0643\u0648\u0646 \u0642\u0648\u064A\u064B\u0627 \u0639\u0644\u0649 \u0627\u0644\u062F\u0647\u0648\u0646 \u0648\u0644\u0637\u064A\u0641\u064B\u0627 \u0639\u0644\u0649 \u064A\u062F\u064A\u0643."
      ),
      delay: "reveal-delay-2",
    },
    {
      ref: ref3,
      image: "/images/sparkling-clean.jpg",
      title: t("Wasteful Products, Poor Value", "\u0645\u0646\u062A\u062C\u0627\u062A \u0645\u0647\u062F\u0631\u0629\u060C \u0642\u064A\u0645\u0629 \u0636\u0639\u064A\u0641\u0629"),
      description: t(
        "Diluted formulas mean you go through bottles quickly. ONTI's 800ml concentrated formula lasts significantly longer, giving you real value for your money.",
        "\u0627\u0644\u062A\u0631\u0643\u064A\u0628\u0627\u062A \u0627\u0644\u0645\u062E\u0641\u0641\u0629 \u062A\u0639\u0646\u064A \u0627\u0633\u062A\u0647\u0644\u0627\u0643 \u0627\u0644\u0639\u0628\u0648\u0627\u062A \u0628\u0633\u0631\u0639\u0629. \u062A\u0631\u0643\u064A\u0628\u0629 \u0623\u0648\u0646\u062A\u064A \u0627\u0644\u0645\u0631\u0643\u0632\u0629 800 \u0645\u0644 \u062A\u062F\u0648\u0645 \u0644\u0641\u062A\u0631\u0629 \u0623\u0637\u0648\u0644 \u0628\u0643\u062B\u064A\u0631\u060C \u0645\u0645\u0627 \u064A\u0645\u0646\u062D\u0643 \u0642\u064A\u0645\u0629 \u062D\u0642\u064A\u0642\u064A\u0629 \u0644\u0623\u0645\u0648\u0627\u0644\u0643."
      ),
      delay: "reveal-delay-3",
    },
  ]

  return (
    <section id="problems" className="relative bg-primary py-24">
      {/* Geometric patterns */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-xs font-semibold tracking-widest text-gold uppercase">
            {t("Common Problems", "\u0645\u0634\u0627\u0643\u0644 \u0634\u0627\u0626\u0639\u0629")}
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold text-primary-foreground sm:text-4xl text-balance">
            {t("Problems ONTI Solves", "\u0627\u0644\u0645\u0634\u0627\u0643\u0644 \u0627\u0644\u062A\u064A \u064A\u062D\u0644\u0647\u0627 \u0623\u0648\u0646\u062A\u064A")}
          </h2>
          <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-gold" />
        </div>

        <div className="mt-16 flex flex-col gap-12">
          {problems.map((problem, index) => (
            <div
              key={index}
              ref={problem.ref}
              className={`reveal ${problem.delay} flex flex-col gap-8 rounded-2xl bg-primary-foreground/5 p-6 backdrop-blur-sm lg:flex-row lg:p-8 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="relative flex-shrink-0 overflow-hidden rounded-xl lg:w-96">
                <Image
                  src={problem.image}
                  alt={problem.title}
                  width={400}
                  height={280}
                  className="h-56 w-full object-cover lg:h-full"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <span className="text-lg font-bold">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary-foreground">
                  {problem.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-primary-foreground/60">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  )
}
