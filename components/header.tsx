"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MenuIcon } from "lucide-react"

export function Header() {
  const [isTransparent, setIsTransparent] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // Adjust threshold as needed
        setIsTransparent(false)
      } else {
        setIsTransparent(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = (
    <>
      <Link href="/#about-us-section" passHref>
        <Button variant="ghost" className="text-white hover:bg-white/20">
          About Us
        </Button>
      </Link>
      <Link href="/#eboard-info-section" passHref>
        <Button variant="ghost" className="text-white hover:bg-white/20">
          Eboard Info
        </Button>
      </Link>
      <Link href="/gallery" passHref>
        <Button variant="ghost" className="text-white hover:bg-white/20">
          Gallery
        </Button>
      </Link>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="text-white hover:bg-white/20">
            Forms
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-black text-white border-gray-700">
          <DropdownMenuItem className="hover:bg-gray-700 cursor-pointer">Membership Form</DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-gray-700 cursor-pointer">Event Registration</DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-gray-700 cursor-pointer">Contact Form</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 p-4 transition-colors duration-300 ease-in-out
        ${isTransparent ? "bg-black/50" : "bg-black"}
        flex justify-between items-center`}
    >
      <div className="flex items-center">
        <Link href="/" passHref>
          <Image src="/placeholder.svg?height=40&width=40" alt="Club Logo" width={40} height={40} className="mr-2" />
        </Link>
        <span className="text-white text-xl font-bold">Club Name</span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-4">{navLinks}</nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 bg-black/90 flex flex-col items-end p-4 space-y-2">
          {navLinks}
        </nav>
      )}
    </header>
  )
}
