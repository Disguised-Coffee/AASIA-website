import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Images } from "lucide-react"
import Link from "next/link"

interface GalleryImage {
  src: string
  alt: string
  caption?: string
}

interface GalleryPreviewProps {
  title: string
  description: string
  images: GalleryImage[]
  galleryLink: string
  backgroundColor?: string
}

export function GalleryPreview({
  title,
  description,
  images,
  galleryLink,
  backgroundColor = "bg-white",
}: GalleryPreviewProps) {
  const displayImages = images.slice(0, 6) // Show first 6 images

  return (
    <section className={`py-16 px-4 ${backgroundColor}`}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">{description}</p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {displayImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-300 group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-center p-2 text-sm font-medium">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Stats and CTA */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-gray-600 mb-6">
            <Images className="h-5 w-5" />
            <span className="text-sm">Showing 6 of {images.length}+ photos</span>
          </div>

          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            <Link href={galleryLink} className="inline-flex items-center gap-2">
              View Full Gallery
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
