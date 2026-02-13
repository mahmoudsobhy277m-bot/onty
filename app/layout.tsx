import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Onty",
  description:
    "ONTI delivers powerful cleaning with a gentle touch. Modern Egyptian premium dishwashing liquid with natural ingredients.",
    verification: {
      google: "WSiCQEdfaYvvhNhQEL1zdlL7rKdlVb-povxZeSBPdQM",
    }
}

export const viewport: Viewport = {
  themeColor: "#1a3a6b",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
