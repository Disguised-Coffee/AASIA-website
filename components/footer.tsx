import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-black text-white py-8 px-4">
      <div className="container mx-auto flex flex-col items-center space-y-6">
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-4 md:gap-8">
          <Link href="/#about-us-section" passHref>
            <Button variant="link" className="text-white hover:text-gray-300">
              About Us
            </Button>
          </Link>
          <Link href="/#eboard-info-section" passHref>
            <Button variant="link" className="text-white hover:text-gray-300">
              Eboard Info
            </Button>
          </Link>
          <Link href="/gallery" passHref>
            <Button variant="link" className="text-white hover:text-gray-300">
              Gallery
            </Button>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="link" className="text-white hover:text-gray-300">
                Forms
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="bg-black text-white border-gray-700">
              <DropdownMenuItem className="hover:bg-gray-700 cursor-pointer">Membership Form</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-700 cursor-pointer">Event Registration</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-700 cursor-pointer">Contact Form</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Social Media Links */}
        <div className="flex space-x-6">
          <a href="#" aria-label="YouTube" className="text-white hover:text-gray-300 transition-colors">
            <Youtube className="h-6 w-6" />
          </a>
          <a href="#" aria-label="Facebook" className="text-white hover:text-gray-300 transition-colors">
            <Facebook className="h-6 w-6" />
          </a>
          <a href="#" aria-label="Twitter" className="text-white hover:text-gray-300 transition-colors">
            <Twitter className="h-6 w-6" />
          </a>
          <a href="#" aria-label="Instagram" className="text-white hover:text-gray-300 transition-colors">
            <Instagram className="h-6 w-6" />
          </a>
          <a href="#" aria-label="LinkedIn" className="text-white hover:text-gray-300 transition-colors">
            <Linkedin className="h-6 w-6" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Club Name. All rights reserved.</p>
      </div>

      {/* Transparent Gradient Logo */}
      <div className="absolute bottom-4 right-4">
        <Image
          src="/placeholder.svg?height=80&width=80"
          alt="Club Logo Gradient"
          width={80}
          height={80}
          className="opacity-50" // Adjust opacity for gradient effect
        />
      </div>
    </footer>
  )
}
