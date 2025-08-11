"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MenuIcon } from "lucide-react"
import { useState, useEffect } from "react"
import SimpleDropdown from "./ui/dropdown"
import { useRef } from "react"

export function Header() {
  const [isTransparent, setIsTransparent] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const contentRef = useRef<HTMLDivElement>(null)
  
    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (
          contentRef.current &&
          !contentRef.current.contains(event.target as Node)
        ) {
          if (typeof document !== "undefined") {
            document.dispatchEvent(new CustomEvent("dropdown-close"))

            
            setIsMenuOpen(false)

            // check if click was in menu,
            // if (contentRef.current && !contentRef.current.contains(event.target as Node)) {

            console.log("value of isMenuOpen:", isMenuOpen)
          }
        }
      }
      if (isMenuOpen) {
        document.addEventListener("mousedown", handleClickOutside)
      }
      return () => {
        document.removeEventListener("mousedown", handleClickOutside)
      }
    }, [isMenuOpen, contentRef])



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
  ]

  const galleryLinks = [
    { name: "Main Gallery", link: "/gallery" },
    // { name: "Events", link: "/events" },
    // { name: "Contact", link: "/contact" },
  ]

  const navLinks = (
    <>
      {navBarBtns.map((ele, index) => (
        <Link href={ele.link} passHref key={index} onClick={() => setIsMenuOpen(false)}>
          <Button variant="ghost" className="hover:bg-white/20 md:text-gray-700 md:hover:text-gray-900 hover:text-white text-lg">
            {ele.name}
          </Button>
        </Link>
      ))}
      <SimpleDropdown>
        {galleryLinks.map((ele, index) => (
          <Link href={ele.link} passHref key={index}>
            <Button
              onClick={() => setIsMenuOpen(false)}
              variant="ghost"
              className="w-full justify-start relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm transition-colors hover:bg-gray-100"
            >
              {ele.name}
            </Button>
          </Link>
        ))}
        <div>
          <Button
            variant="ghost"
            className="text-xs text-muted-foreground w-full justify-start relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm transition-colors hover:bg-gray-100"
          >
            More photos soon!
          </Button>
        </div>

        {/* <Link href="/contact" passHref>
          <Button variant="ghost" className="w-full justify-start relative flex select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 pl-8">Contact</Button>
        </Link> */}
      </SimpleDropdown>
    </>
  )

  return (
    // NICE COLOR:
    // "bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100"
    <header
      ref={contentRef}  
      className={`fixed top-0 left-0 right-0 z-50 p-2 transition-colors duration-300 ease-in-out bg-primary flex justify-between items-center`}
    >
      <Link href="/" passHref className="flex items-center ml-4 bg-transparent hover:bg-white/10 rounded-xl px-2">
        <Image src="/aasia logo_transparent.png" alt="Club Logo" width={40} height={40} className="mr-6 w-[10vh] select-none pointer-events-none" />
        <Image src="/aasia logo_just-lettering.png" alt="Club Logo" width={40} height={40} className="mr-2 w-[16vh] select-none pointer-events-none" />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-4">{navLinks}</nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(true)} className="text-black hover:bg-white/20">
          <MenuIcon className="h-20 w-20" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav  className="md:hidden text-white absolute top-full left-0 right-0 bg-black/90 flex flex-col items-end p-4 space-y-2">
          {navLinks}
        </nav>
      )}
    </header>
  )
}
