"use client"

import { useState } from "react"
import { useLang } from "./language-context"
import { MessageCircle, X, Send } from "lucide-react"
import Image from "next/image"

interface Message {
  from: "user" | "bot"
  text: string
}

const smartQuestions = {
  en: [
    { q: "How to order?", a: "You can order ONTI through our official website, WhatsApp, or find us at major supermarkets and grocery stores across Egypt." },
    { q: "Is it safe?", a: "Absolutely! ONTI contains 0% harsh chemicals and is dermatologically tested. It's safe for your skin and your family's health." },
    { q: "Who is it for?", a: "ONTI is designed for every Egyptian household. Whether you're a busy parent, a professional chef, or anyone who values clean dishes and healthy hands." },
    { q: "Delivery details?", a: "We offer fast delivery across all Egyptian governorates. Orders placed before 2 PM are shipped same day. Free delivery on orders above 200 EGP." },
  ],
  ar: [
    { q: "\u0643\u064A\u0641 \u0623\u0637\u0644\u0628\u061F", a: "\u064A\u0645\u0643\u0646\u0643 \u0637\u0644\u0628 \u0623\u0648\u0646\u062A\u064A \u0645\u0646 \u062E\u0644\u0627\u0644 \u0645\u0648\u0642\u0639\u0646\u0627 \u0627\u0644\u0631\u0633\u0645\u064A \u0623\u0648 \u0648\u0627\u062A\u0633\u0627\u0628 \u0623\u0648 \u0641\u064A \u0627\u0644\u0633\u0648\u0628\u0631 \u0645\u0627\u0631\u0643\u062A \u0648\u0627\u0644\u0645\u062D\u0644\u0627\u062A \u0641\u064A \u062C\u0645\u064A\u0639 \u0623\u0646\u062D\u0627\u0621 \u0645\u0635\u0631." },
    { q: "\u0647\u0644 \u0627\u0644\u0645\u0646\u062A\u062C \u0622\u0645\u0646\u061F", a: "\u0628\u0627\u0644\u062A\u0623\u0643\u064A\u062F! \u0623\u0648\u0646\u062A\u064A \u064A\u062D\u062A\u0648\u064A \u0639\u0644\u0649 0% \u0645\u0648\u0627\u062F \u0643\u064A\u0645\u064A\u0627\u0626\u064A\u0629 \u0636\u0627\u0631\u0629 \u0648\u0645\u062E\u062A\u0628\u0631 \u0637\u0628\u064A\u064B\u0627. \u0625\u0646\u0647 \u0622\u0645\u0646 \u0644\u0628\u0634\u0631\u062A\u0643 \u0648\u0635\u062D\u0629 \u0639\u0627\u0626\u0644\u062A\u0643." },
    { q: "\u0644\u0645\u0646 \u064A\u0646\u0627\u0633\u0628\u061F", a: "\u0623\u0648\u0646\u062A\u064A \u0645\u0635\u0645\u0645 \u0644\u0643\u0644 \u0645\u0646\u0632\u0644 \u0645\u0635\u0631\u064A. \u0633\u0648\u0627\u0621 \u0643\u0646\u062A \u0623\u0645\u064B\u0627 \u0645\u0634\u063A\u0648\u0644\u0629 \u0623\u0648 \u0637\u0627\u0647\u064A\u064B\u0627 \u0645\u062D\u062A\u0631\u0641\u064B\u0627 \u0623\u0648 \u0623\u064A \u0634\u062E\u0635 \u064A\u0642\u062F\u0631 \u0627\u0644\u0646\u0638\u0627\u0641\u0629 \u0648\u0635\u062D\u0629 \u0627\u0644\u064A\u062F\u064A\u0646." },
    { q: "\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u062A\u0648\u0635\u064A\u0644\u061F", a: "\u0646\u0642\u062F\u0645 \u062A\u0648\u0635\u064A\u0644 \u0633\u0631\u064A\u0639 \u0644\u062C\u0645\u064A\u0639 \u0627\u0644\u0645\u062D\u0627\u0641\u0638\u0627\u062A \u0627\u0644\u0645\u0635\u0631\u064A\u0629. \u0627\u0644\u0637\u0644\u0628\u0627\u062A \u0642\u0628\u0644 \u0627\u0644\u0633\u0627\u0639\u0629 2 \u0638\u0647\u0631\u064B\u0627 \u062A\u064F\u0634\u062D\u0646 \u0641\u064A \u0646\u0641\u0633 \u0627\u0644\u064A\u0648\u0645. \u062A\u0648\u0635\u064A\u0644 \u0645\u062C\u0627\u0646\u064A \u0644\u0644\u0637\u0644\u0628\u0627\u062A \u0641\u0648\u0642 200 \u062C\u0646\u064A\u0647." },
  ],
}

export function SmartChat() {
  const { lang, t } = useLang()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "bot",
      text: lang === "en"
        ? "Hi there! I'm ONTI's assistant. How can I help you today?"
        : "\u0645\u0631\u062D\u0628\u064B\u0627! \u0623\u0646\u0627 \u0645\u0633\u0627\u0639\u062F \u0623\u0648\u0646\u062A\u064A. \u0643\u064A\u0641 \u064A\u0645\u0643\u0646\u0646\u064A \u0645\u0633\u0627\u0639\u062F\u062A\u0643 \u0627\u0644\u064A\u0648\u0645\u061F",
    },
  ])

  const questions = lang === "en" ? smartQuestions.en : smartQuestions.ar

  const handleQuestion = (q: string, a: string) => {
    setMessages((prev) => [
      ...prev,
      { from: "user", text: q },
      { from: "bot", text: a },
    ])
  }

  return (
    <>
      {/* FAB */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-lg shadow-primary/30 text-primary-foreground transition-all hover:scale-110 hover:shadow-primary/50"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 flex h-[480px] w-[360px] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
          {/* Header */}
          <div className="flex items-center gap-3 bg-primary p-4">
            <Image
              src="/images/onti-icon.png"
              alt="ONTI"
              width={32}
              height={32}
              className="h-8 w-8 brightness-0 invert"
            />
            <div>
              <p className="text-sm font-bold text-primary-foreground">
                {t("ONTI Assistant", "\u0645\u0633\u0627\u0639\u062F \u0623\u0648\u0646\u062A\u064A")}
              </p>
              <p className="text-xs text-primary-foreground/60">
                {t("Online", "\u0645\u062A\u0635\u0644")}
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="flex flex-col gap-3">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      msg.from === "user"
                        ? "rounded-br-md bg-primary text-primary-foreground"
                        : "rounded-bl-md bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick questions */}
          <div className="border-t border-border p-3">
            <p className="mb-2 text-xs font-medium text-muted-foreground">
              {t("Quick questions:", "\u0623\u0633\u0626\u0644\u0629 \u0633\u0631\u064A\u0639\u0629:")}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {questions.map((item, i) => (
                <button
                  key={i}
                  onClick={() => handleQuestion(item.q, item.a)}
                  className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-all hover:border-gold hover:text-gold"
                >
                  {item.q}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
