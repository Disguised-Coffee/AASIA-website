'use client'

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Footer() {

  const footerbtns = [
    { name: "Home", link: "/" },
    { name: "FAQ", link: "/faq" },
    { name: "E-Board", link: "/e-board" },
    { name: "EVO", link: "/evo" },
    { name: "Gallery", link: "/gallery" },
  ];

  return (
    <footer className="relative bg-accent text-white py-8 px-4 pb-[7rem]">
      <div className="container mx-auto flex flex-col items-center space-y-6">
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-4 md:gap-8">
          {
            footerbtns.map((ele, index) => (
              <Link href={ele.link} passHref key={index}>
                <Button variant="link" className="text-white hover:text-gray-300">
                  {ele.name}
                </Button>
              </Link>
            ))
          }
        </nav>

        {/* Social Media Links */}
        <div className="flex space-x-6">
          <a href="#" aria-label="YouTube" className="text-white hover:text-gray-300 transition-colors">
            <Image src="/icons/groupme.svg" width={24} height={24} alt="YouTube" className="h-6 w-6" />
          </a>
          <a href="#" aria-label="Facebook" className="text-white hover:text-gray-300 transition-colors">
            <Image src="/icons/instagram.svg" width={24} height={24} alt="YouTube" className="h-6 w-6" />
          </a>
          <a href="#" aria-label="Twitter" className="text-white hover:text-gray-300 transition-colors">
            <Image src="/icons/discord.svg" width={24} height={24} alt="YouTube" className="h-6 w-6" />
          </a>
        </div>

        {/* Copyright (if wanted) */}
        {/* <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Club Name. All rights reserved.</p> */}
      </div>

      {/* Transparent Gradient Logo */}
      <div className="absolute bottom-4 right-4 select-none pointer-events-none" onContextMenu={(e) => e.preventDefault()}>
        <Image
          src="/aasia logo_white outline.png"
          alt="Club Logo Gradient"
          width={80}
          height={80}
          className="opacity-50" // Adjust opacity for gradient effect
        />
      </div>
    </footer>
  )
}
