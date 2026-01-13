import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mohamed Marzook E.S | Computer Science Student | Aspiring Cloud Engineer",
  description:
    "Portfolio of Mohamed Marzook E.S - A Computer Science student passionate about building digital experiences that merge creativity with technical excellence.",
  keywords: ["Computer Science Student", "Aspiring Cloud Engineer", "Web Developer", "Portfolio", "React", "Next.js"],
  authors: [{ name: "Mohamed Marzook E.S" }],
  openGraph: {
    title: "Mohamed Marzook E.S | Computer Science Student | Aspiring Cloud Engineer",
    description: "Portfolio showcasing web development, creative coding, and digital experiences.",
    type: "website",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#00ffaa",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
