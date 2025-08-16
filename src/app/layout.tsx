import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"

// Using Space Grotesk as Mozilla-like alternative for headlines
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-headline",
})

// Using Inter as Mozilla-like alternative for body text
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap", 
  variable: "--font-text",
})

export const metadata: Metadata = {
  title: "MedAI Newsletter - AI-Powered Medical Insights",
  description: "Stay ahead with AI-curated medical newsletters tailored for healthcare professionals",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
