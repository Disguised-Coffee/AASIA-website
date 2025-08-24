"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface GalleryNavigationProps {
  categories: string[]
  counts?: Record<string, number>
  onFilterChange?: (category: string) => void
}

export function GalleryNavigation({ categories, counts = {}, onFilterChange }: GalleryNavigationProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all")

  // "All Events" is always present
  const navigationItems = [
    { id: "all", label: "All Events" },
    { id: "Featured Events", label: "Featured Events" },
    ...categories
      .filter((cat) => cat !== "Featured Events")
      .map((cat) => ({ id: cat, label: cat })),
  ]

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId)
    if (onFilterChange) onFilterChange(filterId)
  }

  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-4">
      {navigationItems.map((item) => (
        <Button
          key={item.id}
          variant={activeFilter === item.id ? "default" : "outline"}
          onClick={() => handleFilterChange(item.id)}
          className={`
            px-4 py-2 text-sm font-medium transition-all duration-200
            ${activeFilter === item.id
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : "border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
            }
          `}
        >
          {item.label}
          <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-white/20">
            {counts[item.id] ?? 0}
          </span>
        </Button>
      ))}
    </div>
  )
}
