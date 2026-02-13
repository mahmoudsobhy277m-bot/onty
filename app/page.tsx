"use client"

import { LanguageProvider } from "@/components/language-context"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { ProblemsSection } from "@/components/problems-section"
import { BenefitsSection } from "@/components/benefits-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { ReviewsSection } from "@/components/reviews-section"
import { SmartChat } from "@/components/smart-chat"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ProblemsSection />
        <BenefitsSection />
        <WhyChooseSection />
        <ReviewsSection />
      </main>
      <Footer />
      <SmartChat />
    </LanguageProvider>
  )
}
