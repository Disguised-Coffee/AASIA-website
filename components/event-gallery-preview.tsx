"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Images } from "lucide-react"
import Link from "next/link"

interface GalleryImage {
  src: string
  alt: string
  caption?: string
}

interface EventGallery {
  id: string
  title: string
  description: string
  date: string
  location: string
  previewImages: GalleryImage[]
  totalImages: number
  featured: boolean
}

interface EventGalleryPreviewProps {
  gallery: EventGallery
  reversed?: boolean
}

export function EventGalleryPreview({ gallery, reversed = false }: EventGalleryPreviewProps) {
  // TODO: CMS Integration - Handle dynamic image loading and optimization
  // Example: const optimizedImages = await sanityClient.fetch('*[_type == "image" && gallery._ref == $galleryId]', { galleryId: gallery.id })

  const mainImage = gallery.previewImages[0]
  const thumbnailImages = gallery.previewImages.slice(1, 4)

  const imageSection = (
    <div className="lg:w-1/2">
      <div className="relative">
        {/* Main Preview Image */}
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg mb-4">
          <Image
            src={mainImage?.src || "/placeholder.svg"}
            alt={mainImage?.alt || gallery.title}
            fill
            style={{ objectFit: "cover" }}
            className="transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
            <Images className="h-4 w-4" />
            {gallery.totalImages}
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-3 gap-2">
          {thumbnailImages.map((image, index) => (
            <div key={index} className="relative aspect-video rounded-md overflow-hidden">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                style={{ objectFit: "cover" }}
                className="transition-opacity duration-300 hover:opacity-80"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const contentSection = (
    <div className="lg:w-1/2 flex flex-col justify-center">
      <div className="space-y-6">
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{gallery.title}</h3>

          <div className="flex flex-col sm:flex-row gap-4 text-gray-600 mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span className="text-sm">{gallery.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">{gallery.location}</span>
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">{gallery.description}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href={`/gallery/${gallery.id}`} passHref>
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => {
                // TODO: CMS Integration - Navigate to dynamic gallery page
                // Example: router.push(`/gallery/${gallery.slug}`)
                console.log(`Navigate to gallery: ${gallery.id}`)
              }}
            >
              View Full Gallery
            </Button>
          </Link>
          <Button
            variant="outline"
            size="lg"
            className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
            onClick={() => {
              // TODO: CMS Integration - Implement slideshow functionality
              // Example: openSlideshow(gallery.images)
              console.log(`Open slideshow for: ${gallery.id}`)
            }}
          >
            Start Slideshow
          </Button>
        </div>
      </div>
    </div>
  )

  return (
    <div className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-center ${reversed ? "lg:flex-row-reverse" : ""}`}>
      {imageSection}
      {contentSection}
    </div>
  )
}
