import { EnhancedImageCarousel } from "@/components/enhanced-image-carousel"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, MapPin, ArrowLeft } from "lucide-react"
import { client } from "@/sanity/client"

interface GalleryDetailPageProps {
  params: {
    slug: string
  }
}

// GROQ query to fetch a single gallery by slug, including all relevant fields
const query = `
  *[_type == "gallery" && slug.current == $slug][0]{
    title,
    description,
    date,
    location,
    images[]{
      asset->{
        _id,
        url
      },
      alt,
      caption,
      isFeatured
    },
    categories[]->{
      _id,
      title
    }
  }
`

export default async function GalleryDetailPage({ params }: GalleryDetailPageProps) {
  const data = await client.fetch(query, { slug: params.slug })

  if (!data) {
    return (
      <div className="flex flex-col min-h-screen pt-40">
        <section className="container mx-auto max-w-4xl text-center py-24 text-black">
          <h1 className="text-3xl font-bold mb-4">Gallery Not Found</h1>
          <p className="mb-8">Sorry, we couldn't find the gallery you're looking for.</p>
          <Button
            variant="outline"
          >
            <Link href="/gallery" className="text-blue-600 hover:underline">
              Back to Gallery
            </Link>
          </Button>
        </section>
        {/* Image - fixed at bottom with proper spacing */}
        <div className="flex justify-center absolute bottom-0 left-0 right-0">
          <div className="w-48 h-30 md:w-64 md:h-30 max-h-md relative">
            <img src="/crying.png" alt="Not Found" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    )
  }

  // Prepare images for the carousel
  const images = (data.images || []).map((img: any) => ({
    src: img.asset?.url || "/placeholder.svg",
    alt: img.alt || data.title,
    caption: img.caption || "",
    isFeatured: img.isFeatured,
  }))

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

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{data.title}</h1>

          <div className="flex flex-col sm:flex-row gap-4 text-gray-600 mb-6">
            {data.date && (
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{data.date}</span>
              </div>
            )}
            {data.location && (
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>{data.location}</span>
              </div>
            )}
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">{data.description}</p>
        </div>
      </section>

      {/* Image Carousel */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <EnhancedImageCarousel images={images} />
        </div>
      </section>

      {/* Gallery Actions */}
      <section className="bg-white py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Add action buttons here if needed */}
          </div>
        </div>
      </section>
    </div>
  )
}
