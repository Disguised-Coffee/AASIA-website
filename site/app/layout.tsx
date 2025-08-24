import type React from "react"
import type { Metadata } from "next"
import { Reddit_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "next-themes"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { client } from "@/sanity/client"

const redditSans = Reddit_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AASIA at UIC",
  description: "AASIA - Asian American Student Association at UIC",
  generator: "v0.dev/pain",
  icons: {
    icon: "/favicon.ico",
  },
}

const defaultSiteSettings = {
  headerLogo: [
    { asset: { url: "/aasia logo_transparent.png" }, alt: "AASIA Logo" },
    { asset: { url: "/aasia logo_just-lettering.png" }, alt: "AASIA Lettering" }
  ],
  headerLinks: [
    { label: "FAQ", href: "/faq" },
    { label: "E-Board", href: "/e-board" },
    { label: "EVO", href: "/evo" },
  ],
  galleryDropdown: [
    { label: "Gallery", href: "/gallery" },
  ],
  footerLogo: { asset: { url: "/aasia logo_white outline.png" }, alt: "AASIA Logo" },
  footerLinks: [
    { label: "Home", href: "/" },
    { label: "FAQ", href: "/faq" },
    { label: "E-Board", href: "/e-board" },
    { label: "EVO", href: "/evo" },
    { label: "Gallery", href: "/gallery" }
  ],
  socialLinks: [
    { platform: "GroupMe", url: "#", icon: "/icons/groupme.svg" },
    { platform: "Instagram", url: "#", icon: "/icons/instagram.svg" },
    { platform: "Discord", url: "#", icon: "/icons/discord.svg" }
  ]
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // appends missing settings.
  const fetchedSettings = await client.fetch(`*[_type == "siteSettings"][0]`) || {};
  const siteSettings = { ...defaultSiteSettings, ...fetchedSettings };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={redditSans.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header siteSettings={siteSettings} />
          <main className="flex-1">
            {children}
          </main>
          <Footer siteSettings={siteSettings} />
        </ThemeProvider>
      </body>
    </html>
  )
}
