"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Images } from "lucide-react"
import Link from "next/link"
import { urlFor } from "@/sanity/image"

interface GalleryImage {
  asset: any
  alt?: string
  caption?: string
  isFeatured?: boolean
}

interface Gallery {
  _id: string
  title: string
  description: string
  date: string
  location?: string
  slug: { current: string }
  images: GalleryImage[]
  categories?: { _id: string; title: string }[]
}

interface EventGalleryPreviewProps {
  gallery: Gallery
  reversed?: boolean
}

export function EventGalleryPreview({ gallery, reversed = false }: EventGalleryPreviewProps) {
  // Main image is the first image in the array
  const mainImage = gallery.images?.[0]
  // Next three images as thumbnails
  const thumbnailImages = gallery.images?.slice(1, 4) || []

  const imageSection = (
    <div className="lg:w-1/2">
      <div className="relative">
        {/* Main Preview Image */}
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg mb-4">
          <Image
            src={
              mainImage?.asset
                ? urlFor(mainImage.asset).width(800).height(450).url()
                : "/placeholder.svg"
            }
            alt={mainImage?.alt || gallery.title}
            fill
            style={{ objectFit: "cover" }}
            className="transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
            <Images className="h-4 w-4" />
            {gallery.images?.length ?? 0}
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-3 gap-2">
          {thumbnailImages.map((image, index) => (
            <div key={index} className="relative aspect-video rounded-md overflow-hidden">
              <Image
                src={
                  image.asset
                    ? urlFor(image.asset).width(300).height(170).url()
                    : "/placeholder.svg"
                }
                alt={image.alt || gallery.title}
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
            {gallery.location && (
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">{gallery.location}</span>
              </div>
            )}
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">{gallery.description}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href={`/gallery/${gallery.slug.current}`} passHref>
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              View Full Gallery
            </Button>
          </Link>
          {/* <Button
            variant="outline"
            size="lg"
            className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
            onClick={() => {
              // TODO: Implement slideshow functionality
              // console.log(`Open slideshow for: ${gallery._id}`)
            }}
          >
            Start Slideshow
          </Button> */}
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
