import { ChevronDown, ChevronRight } from "lucide-react"
import { useRef } from "react"
import { useState, useEffect } from "react"
import { Button } from "./button"
import Link from "next/link"

/*
    IDEA: Create a dropdown menu component that can be used in the header.

    Ensure this component doesn't expand the parent container when opened.
*/
function DropdownMenu({ children }: { children: React.ReactNode }) {
  return <div className="relative inline-block">{children}</div>
}

import React from "react"

// NOTE: Chevron needs animation []
const DropdownMenuTrigger = React.forwardRef<HTMLButtonElement, { children: React.ReactNode, onClick: () => void }>(
  ({ children, onClick }, ref) => (
    <button
      type="button"
      className="flex items-center px-4 py-2 text-lg bg-transparent hover:bg-white/20 rounded"
      onClick={onClick}
      ref={ref}
    >
      {children}
      <ChevronDown className="ml-2 h-4 w-4" />
    </button>
  )
)
DropdownMenuTrigger.displayName = "DropdownMenuTrigger"

const DropdownMenuContent = ({ open, children, anchorRef }: { open: boolean, children: React.ReactNode, anchorRef: React.RefObject<HTMLButtonElement | null> }) => {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        contentRef.current &&
        !contentRef.current.contains(event.target as Node) &&
        anchorRef.current &&
        !anchorRef.current.contains(event.target as Node)
      ) {
        if (typeof document !== "undefined") {
          document.dispatchEvent(new CustomEvent("dropdown-close"))
        }
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [open, anchorRef])

  if (!open) return null
  return (
    <div
      ref={contentRef}
      className="absolute mt-2 right-0 bg-white rounded shadow-lg z-10 min-w-[160px] z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground "
    >
      {children}
    </div>
  )
}

// Usage in navLinks:
function SimpleDropdown({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    function closeDropdown() {
      setOpen(false)
    }
    document.addEventListener("dropdown-close", closeDropdown)
    return () => {
      document.removeEventListener("dropdown-close", closeDropdown)
    }
  }, [])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger onClick={() => setOpen((prev) => !prev)} ref={triggerRef}>
        Gallery
      </DropdownMenuTrigger>
      <DropdownMenuContent open={open} anchorRef={triggerRef}>
        {children}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

// Place <SimpleDropdown /> in your navLinks.
export default SimpleDropdown;