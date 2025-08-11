"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface EventGallery {
  id: string
  title: string
  description: string
  date: string
  location: string
  previewImages: any[]
  totalImages: number
  featured: boolean
}

interface GalleryNavigationProps {
  galleries: EventGallery[]
}

export function GalleryNavigation({ galleries }: GalleryNavigationProps) {
  const [activeFilter, setActiveFilter] = useState("all")

  // TODO: CMS Integration - Generate categories dynamically from CMS data
  // Example: const categories = await sanityClient.fetch('*[_type == "galleryCategory"]')
  const navigationItems = [
    { id: "all", label: "All Events", count: galleries.length },
    { id: "featured", label: "Featured", count: galleries.filter((g) => g.featured).length },
    {
      id: "cultural",
      label: "Cultural Events",
      count: galleries.filter(
        (g) =>
          g.title.toLowerCase().includes("cultural") ||
          g.title.toLowerCase().includes("gala") ||
          g.title.toLowerCase().includes("evo"),
      ).length,
    },
    {
      id: "service",
      label: "Community Service",
      count: galleries.filter((g) => g.title.toLowerCase().includes("service")).length,
    },
  ]

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId)
    // TODO: CMS Integration - Implement filtering logic with CMS queries
    // Example: const filteredGalleries = await sanityClient.fetch(
    //   '*[_type == "eventGallery" && category->slug.current == $category]',
    //   { category: filterId }
    // )
    console.log(`Filter changed to: ${filterId}`)
  }

  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-4">
      {/* TODO: CMS Integration - Map through dynamic categories */}
      {navigationItems.map((item) => (
        <Button
          key={item.id}
          variant={activeFilter === item.id ? "default" : "outline"}
          onClick={() => handleFilterChange(item.id)}
          className={`
            px-4 py-2 text-sm font-medium transition-all duration-200
            ${
              activeFilter === item.id
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
            }
          `}
        >
          {item.label}
          <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-white/20">{item.count}</span>
        </Button>
      ))}
    </div>
  )
}
