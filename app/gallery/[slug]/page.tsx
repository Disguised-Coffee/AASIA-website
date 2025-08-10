import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EnhancedImageCarousel } from "@/components/enhanced-image-carousel"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, MapPin, ArrowLeft } from "lucide-react"

// TODO: CMS Integration - This would be replaced with dynamic data fetching
// Example:
// export async function generateStaticParams() {
//   const galleries = await sanityClient.fetch('*[_type == "eventGallery"]')
//   return galleries.map((gallery) => ({ slug: gallery.slug.current }))
// }
//
// export default async function GalleryDetailPage({ params }: { params: { slug: string } }) {
//   const gallery = await sanityClient.fetch(
//     '*[_type == "eventGallery" && slug.current == $slug][0]',
//     { slug: params.slug }
//   )

interface GalleryDetailPageProps {
  params: {
    slug: string
  }
}

export default function GalleryDetailPage({ params }: GalleryDetailPageProps) {
  // TODO: CMS Integration - Replace with actual data fetching
  // This is mock data for demonstration
  const gallery = {
    id: params.slug,
    title: "Annual Gala 2024",
    description:
      "Our most prestigious event celebrating Asian American heritage and community achievements. This year's gala brought together over 300 community members, alumni, and supporters for an evening of cultural celebration, networking, and recognition of outstanding contributions to our community.",
    date: "March 15, 2024",
    location: "UIC Student Center Ballroom",
    images: [
      {
        src: "/placeholder.svg?height=600&width=800&text=Gala+Image+1",
        alt: "Opening ceremony",
        caption: "...",
      },
      {
        src: "/placeholder.svg?height=600&width=800&text=Gala+Image+2",
        alt: "Community dinner",
        caption: "Nothing is here",
      },
      {
        src: "/aasia logo_transparent.png",
        alt: "Awards ceremony",
        caption: "OH MY- ITS BAOBAO!!!!",
      },
      {
        src: "/placeholder.svg?height=600&width=800&text=Gala+Image+4",
        alt: "Cultural performance",
        caption: "...",
      },
      {
        src: "/placeholder.svg?height=600&width=800&text=Gala+Image+5",
        alt: "Networking",
        caption: "something is coming...",
      },
    ],
  }

  return (
    <div className="flex flex-col min-h-screen pt-25">
      {/* Gallery Header */}
      <section className="bg-white py-12 px-4 border-b border-gray-200 pt-40">
        <div className="container mx-auto max-w-4xl">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6 font-medium"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Gallery
          </Link>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{gallery.title}</h1>

          <div className="flex flex-col sm:flex-row gap-4 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>{gallery.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>{gallery.location}</span>
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">{gallery.description}</p>
        </div>
      </section>

      {/* Image Carousel */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* TODO: CMS Integration - Pass dynamic images from CMS */}
          <EnhancedImageCarousel images={gallery.images} />
        </div>
      </section>

      {/* Gallery Actions */}
      <section className="bg-white py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Download All Photos
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
            >
              Share Gallery
            </Button> */}
          </div>
        </div>
      </section>
    </div>
  )
}
