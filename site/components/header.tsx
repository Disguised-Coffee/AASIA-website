"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MenuIcon } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import SimpleDropdown from "./ui/dropdown"
import { urlFor } from "@/sanity/image"

export function Header({ siteSettings }: { siteSettings: any }) {
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsTransparent(false)
      } else {
        setIsTransparent(true)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const headerLinks = siteSettings.headerLinks || []

  const galleryLinks = siteSettings.galleryDropdown || []

  const headerLogo = siteSettings.headerLogo || []

  const navLinks = (
    <>
      {headerLinks.map((ele : any, index : number) => (
        <Link href={ele.href} passHref key={index} onClick={() => setIsMenuOpen(false)}>
          <Button variant="ghost" className="hover:bg-white/20 md:text-gray-700 md:hover:text-gray-900 hover:text-white text-lg">
            {ele.label}
          </Button>
        </Link>
      ))}
      <SimpleDropdown>
        {galleryLinks.map((ele:any, index:number) => (
          <Link href={ele.href} passHref key={index}>
            <Button
              onClick={() => setIsMenuOpen(false)}
              variant="ghost"
              className="w-full justify-start relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm transition-colors hover:bg-gray-100"
            >
              {ele.label}
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
    <header
      ref={contentRef}
      className={`fixed top-0 left-0 right-0 z-50 p-2 transition-colors duration-300 ease-in-out bg-primary flex justify-between items-center`}
    >
      <Link href="/" passHref className="flex items-center ml-4 bg-transparent hover:bg-white/10 rounded-xl px-2">
        {headerLogo.map((logo: any, idx: number) => (
          <Image
            key={idx}
            src={logo.asset?.url || urlFor(logo.asset).url() || "/aasia logo_transparent.png"}
            alt={logo.alt || "Club Logo"}
            width={40}
            height={40}
            className={`mr-2 ${idx === 0 ? "w-[10vh]" : "w-[16vh]"} select-none pointer-events-none`}
          />
        ))}
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-4">
        {navLinks}
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(true)} className="text-black hover:bg-white/20">
          <MenuIcon className="h-20 w-20" />
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
