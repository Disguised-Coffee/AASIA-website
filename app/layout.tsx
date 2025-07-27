import type React from "react"
import type { Metadata } from "next"
import { Reddit_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "next-themes"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

const redditSans = Reddit_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AASIA at UIC",
  description: "AASIA - Asian American Student Association at UIC",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={redditSans.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
