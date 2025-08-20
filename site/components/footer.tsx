'use client'

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Footer({ siteSettings }: { siteSettings: any }) {
  const footerLinks = siteSettings.footerLinks || []
  const socialLinks = siteSettings.socialLinks || []
  const footerLogo = siteSettings.footerLogo

  return (
    <footer className="relative bg-accent text-white py-8 px-4 pb-[7rem]">
      <div className="container mx-auto flex flex-col items-center space-y-6">
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-4 md:gap-8">
          {footerLinks.map((ele: any, index: number) => (
            <Link href={ele.href} passHref key={index}>
              <Button variant="link" className="text-white hover:text-gray-300">
                {ele.label}
              </Button>
            </Link>
          ))}
        </nav>

        {/* Social Media Links */}
        <div className="flex space-x-6">
          {socialLinks.map((social: any, idx: number) => {
            switch (social.platform) {
              case 'instagram':
                return (
                  <a href={social.url} aria-label={social.platform} key={idx} className="text-white hover:text-gray-300 transition-colors">
                    <Image src={"icons/instagram.svg"} width={24} height={24} alt={social.platform} className="h-6 w-6" />
                  </a>
                ); // Skip Instagram for now
              case 'discord':
                return (
                  <a href={social.url} aria-label={social.platform} key={idx} className="text-white hover:text-gray-300 transition-colors">
                    <Image src={'/icons/discord.svg'} width={24} height={24} alt={social.platform} className="h-6 w-6" />
                  </a>
                ); // Skip Instagram for now
              case 'groupme':
                return (
                  <a href={social.url} aria-label={social.platform} key={idx} className="text-white hover:text-gray-300 transition-colors">
                    <Image src={"icons/groupme.svg"} width={24} height={24} alt={social.platform} className="h-6 w-6" />
                  </a>
                ); // Skip Instagram for now
              default:
                return null; // Skip any other platforms not handled
            }
          })}
        </div>

        {/* Copyright (if wanted) */}
        {/* <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Club Name. All rights reserved.</p> */}
      </div>

      {/* Transparent Gradient Logo */}
      <div className="absolute bottom-4 right-4 select-none pointer-events-none" onContextMenu={(e) => e.preventDefault()}>
        {footerLogo && (
          <Image
            src={footerLogo.asset?.url || footerLogo.asset || "/aasia logo_white outline.png"}
            alt={footerLogo.alt || "Club Logo Gradient"}
            width={80}
            height={80}
            className="opacity-50"
          />
        )}
      </div>
    </footer>
  )
}
