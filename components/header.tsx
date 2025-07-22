"use client"


import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MenuIcon } from "lucide-react"
import { link } from "fs"
import { useState, useRef, useEffect } from "react"
import SimpleDropdown from "./ui/dropdown"

export function Header() {
  const [isTransparent, setIsTransparent] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // FEATURE [] header effect
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

  // btw, Next handles links by looking from main path.
  const navBarBtns = [
    { name: "FAQ", link: "/faq" },
    { name: "E-Board", link: "/e-board" },
    { name: "EVO", link: "/evo" },
  ];



  const navLinks = (
    <>
      {
        navBarBtns.map((ele, index) => (
          <Link href={ele.link} passHref key={index}>
            <Button variant="ghost" className="hover:bg-white/20 text-lg">
              {ele.name}
            </Button>
          </Link>
        ))
      }
      <SimpleDropdown/>
    </>
  )

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 p-2 transition-colors duration-300 ease-in-out bg-primary
        ${isTransparent ? "bg-primary" : "bg-primary"} 
        flex justify-between items-center`}
    >
      <Link href="/" passHref className="flex items-center ml-10">
        <Image src="/aasia logo_transparent.png" alt="Club Logo" width={40} height={40} className="mr-6 w-[10vh]" />
        <Image src="/aasia logo_just-lettering.png" alt="Club Logo" width={40} height={40} className="mr-2 w-[16vh]" />
      </Link>

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
        <nav className="md:hidden text-white absolute top-full left-0 right-0 bg-black/90 flex flex-col items-end p-4 space-y-2">
          {navLinks}
        </nav>
      )}
    </header>
  )
}
