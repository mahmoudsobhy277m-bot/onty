"use client"

import { useState } from "react"
import { useLang } from "./language-context"
import { useReveal } from "@/hooks/use-reveal"
import { Star } from "lucide-react"

const existingReviews = [
  {
    name: { en: "Sarah M.", ar: "\u0633\u0627\u0631\u0629 \u0645." },
    rating: 5,
    text: {
      en: "Finally a dish soap that doesn't dry my hands! ONTI is amazing -- tough on grease but so gentle. I'm never going back to my old brand.",
      ar: "\u0623\u062E\u064A\u0631\u064B\u0627 \u0633\u0627\u0626\u0644 \u063A\u0633\u064A\u0644 \u0623\u0637\u0628\u0627\u0642 \u0644\u0627 \u064A\u062C\u0641\u0641 \u064A\u062F\u064A\u0651! \u0623\u0648\u0646\u062A\u064A \u0631\u0627\u0626\u0639 -- \u0642\u0648\u064A \u0639\u0644\u0649 \u0627\u0644\u062F\u0647\u0648\u0646 \u0648\u0644\u0643\u0646\u0647 \u0644\u0637\u064A\u0641 \u062C\u062F\u064B\u0627. \u0644\u0646 \u0623\u0639\u0648\u062F \u0623\u0628\u062F\u064B\u0627 \u0644\u0639\u0644\u0627\u0645\u062A\u064A \u0627\u0644\u0642\u062F\u064A\u0645\u0629."
    },
  },
  {
    name: { en: "Ahmed K.", ar: "\u0623\u062D\u0645\u062F \u0643." },
    rating: 5,
    text: {
      en: "The concentrated formula is incredible. One bottle lasts me twice as long as other brands. Plus the lemon scent is so refreshing!",
      ar: "\u0627\u0644\u062A\u0631\u0643\u064A\u0628\u0629 \u0627\u0644\u0645\u0631\u0643\u0632\u0629 \u0631\u0627\u0626\u0639\u0629. \u0639\u0628\u0648\u0629 \u0648\u0627\u062D\u062F\u0629 \u062A\u062F\u0648\u0645 \u0645\u0639\u064A \u0636\u0639\u0641 \u0627\u0644\u0639\u0644\u0627\u0645\u0627\u062A \u0627\u0644\u0623\u062E\u0631\u0649. \u0628\u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u0631\u0627\u0626\u062D\u0629 \u0627\u0644\u0644\u064A\u0645\u0648\u0646 \u0627\u0644\u0645\u0646\u0639\u0634\u0629!"
    },
  },
  {
    name: { en: "Fatma R.", ar: "\u0641\u0627\u0637\u0645\u0629 \u0631." },
    rating: 4,
    text: {
      en: "Excellent quality for an Egyptian product. I'm proud to support a local brand that delivers such high standards. Highly recommended!",
      ar: "\u062C\u0648\u062F\u0629 \u0645\u0645\u062A\u0627\u0632\u0629 \u0644\u0645\u0646\u062A\u062C \u0645\u0635\u0631\u064A. \u0623\u0646\u0627 \u0641\u062E\u0648\u0631\u0629 \u0628\u062F\u0639\u0645 \u0639\u0644\u0627\u0645\u0629 \u0645\u062D\u0644\u064A\u0629 \u062A\u0642\u062F\u0645 \u0645\u0639\u0627\u064A\u064A\u0631 \u0639\u0627\u0644\u064A\u0629. \u0623\u0646\u0635\u062D \u0628\u0647 \u0628\u0634\u062F\u0629!"
    },
  },
]

function StarRating({
  rating,
  interactive = false,
  onRate,
}: {
  rating: number
  interactive?: boolean
  onRate?: (r: number) => void
}) {
  const [hover, setHover] = useState(0)

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type={interactive ? "button" : undefined}
          disabled={!interactive}
          onClick={() => onRate?.(star)}
          onMouseEnter={() => interactive && setHover(star)}
          onMouseLeave={() => interactive && setHover(0)}
          className={`${interactive ? "cursor-pointer" : "cursor-default"} transition-transform ${interactive ? "hover:scale-110" : ""}`}
          aria-label={`${star} star${star > 1 ? "s" : ""}`}
        >
          <Star
            className={`h-5 w-5 ${
              star <= (hover || rating)
                ? "fill-gold text-gold"
                : "fill-transparent text-border"
            } transition-colors`}
          />
        </button>
      ))}
    </div>
  )
}

export function ReviewsSection() {
  const { lang, t } = useLang()
  const ref = useReveal()
  const [userRating, setUserRating] = useState(0)
  const [userComment, setUserComment] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (userRating > 0 && userComment.trim()) {
      setSubmitted(true)
    }
  }

  return (
    <section id="reviews" className="relative py-24">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-xs font-semibold tracking-widest text-gold uppercase">
            {t("Testimonials", "\u0634\u0647\u0627\u062F\u0627\u062A")}
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
            {t("What Our Customers Say", "\u0645\u0627\u0630\u0627 \u064A\u0642\u0648\u0644 \u0639\u0645\u0644\u0627\u0624\u0646\u0627")}
          </h2>
          <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-gold" />
        </div>

        {/* Reviews grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {existingReviews.map((review, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-border bg-card p-6 transition-all hover:border-gold/20 hover:shadow-md"
            >
              <div className="absolute -top-3 left-6 flex h-6 items-center rounded-full bg-gold/10 px-3">
                <span className="text-xs font-semibold text-gold">
                  {t("Verified Buyer", "\u0645\u0634\u062A\u0631\u064A \u0645\u0648\u062B\u0642")}
                </span>
              </div>

              <div className="mt-2">
                <StarRating rating={review.rating} />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {lang === "en" ? review.text.en : review.text.ar}
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {(lang === "en" ? review.name.en : review.name.ar).charAt(0)}
                </div>
                <span className="text-sm font-semibold text-foreground">
                  {lang === "en" ? review.name.en : review.name.ar}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Review form */}
        <div className="mx-auto mt-16 max-w-xl">
          <div className="rounded-2xl border border-border bg-card p-8">
            <h3 className="text-lg font-bold text-foreground">
              {t("Share Your Experience", "\u0634\u0627\u0631\u0643 \u062A\u062C\u0631\u0628\u062A\u0643")}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {t(
                "We value your honest feedback to help us improve.",
                "\u0646\u0642\u062F\u0631 \u0645\u0644\u0627\u062D\u0638\u0627\u062A\u0643 \u0627\u0644\u0635\u0627\u062F\u0642\u0629 \u0644\u0645\u0633\u0627\u0639\u062F\u062A\u0646\u0627 \u0639\u0644\u0649 \u0627\u0644\u062A\u062D\u0633\u064A\u0646."
              )}
            </p>

            {submitted ? (
              <div className="mt-6 rounded-xl bg-primary/5 p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <Star className="h-6 w-6 fill-gold" />
                </div>
                <p className="mt-3 font-semibold text-foreground">
                  {t("Thank you for your review!", "\u0634\u0643\u0631\u064B\u0627 \u0644\u0645\u0631\u0627\u062C\u0639\u062A\u0643!")}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t(
                    "Your feedback helps us improve ONTI for everyone.",
                    "\u0645\u0644\u0627\u062D\u0638\u0627\u062A\u0643 \u062A\u0633\u0627\u0639\u062F\u0646\u0627 \u0641\u064A \u062A\u062D\u0633\u064A\u0646 \u0623\u0648\u0646\u062A\u064A \u0644\u0644\u062C\u0645\u064A\u0639."
                  )}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
                <div>
                  <label className="text-sm font-medium text-foreground">
                    {t("Your Rating", "\u062A\u0642\u064A\u064A\u0645\u0643")}
                  </label>
                  <div className="mt-2">
                    <StarRating rating={userRating} interactive onRate={setUserRating} />
                  </div>
                </div>
                <div>
                  <label htmlFor="review-comment" className="text-sm font-medium text-foreground">
                    {t("Your Comment", "\u062A\u0639\u0644\u064A\u0642\u0643")}
                  </label>
                  <textarea
                    id="review-comment"
                    rows={4}
                    value={userComment}
                    onChange={(e) => setUserComment(e.target.value)}
                    placeholder={t(
                      "Tell us about your experience with ONTI...",
                      "\u0623\u062E\u0628\u0631\u0646\u0627 \u0639\u0646 \u062A\u062C\u0631\u0628\u062A\u0643 \u0645\u0639 \u0623\u0648\u0646\u062A\u064A..."
                    )}
                    className="mt-2 w-full resize-none rounded-xl border border-border bg-background p-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>
                <button
                  type="submit"
                  disabled={userRating === 0 || !userComment.trim()}
                  className="self-end rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {t("Submit Review", "\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629")}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
