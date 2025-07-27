"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EventGalleryPreview } from "@/components/event-gallery-preview"
import { GalleryNavigation } from "@/components/gallery-navigation"
import Image from "next/image"

// TODO: CMS Integration - Replace with dynamic data fetching from Sanity CMS
// Example: const eventGalleries = await sanityClient.fetch('*[_type == "eventGallery"]')
const eventGalleries = [
  {
    id: "annual-gala-2024",
    title: "Annual Gala 2024",
    description: "Our most prestigious event celebrating Asian American heritage and community achievements.",
    date: "March 15, 2024",
    location: "UIC Student Center Ballroom",
    previewImages: [
      {
        src: "/placeholder.svg?height=400&width=600&text=Gala+Main+Event",
        alt: "Annual Gala main event",
        caption: "Opening ceremony with traditional performances",
      },
      {
        src: "/placeholder.svg?height=400&width=600&text=Gala+Dinner",
        alt: "Gala dinner",
        caption: "Community dinner and networking",
      },
      {
        src: "/placeholder.svg?height=400&width=600&text=Gala+Awards",
        alt: "Awards ceremony",
        caption: "Recognizing outstanding community members",
      },
      {
        src: "/placeholder.svg?height=400&width=600&text=Gala+Performance",
        alt: "Cultural performance",
        caption: "Traditional dance performances",
      },
      {
        src: "/placeholder.svg?height=400&width=600&text=Gala+Group",
        alt: "Group photo",
        caption: "AASIA family celebration",
      },
      {
        src: "/placeholder.svg?height=400&width=600&text=Gala+Networking",
        alt: "Networking session",
        caption: "Building lasting connections",
      },
    ],
    totalImages: 45,
    featured: true,
  },
  {
    id: "cultural-night-2024",
    title: "Cultural Night 2024",
    description: "A vibrant showcase of diverse Asian cultures through food, music, and performances.",
    date: "February 8, 2024",
    location: "UIC Forum",
    previewImages: [
      {
        src: "/placeholder.svg?height=400&width=600&text=Cultural+Stage",
        alt: "Cultural Night stage",
        caption: "Main stage with cultural performances",
      },
      {
        src: "/placeholder.svg?height=400&width=600&text=Cultural+Food",
        alt: "Traditional food",
        caption: "Authentic Asian cuisine showcase",
      },
      {
        src: "/placeholder.svg?height=400&width=600&text=Cultural+Dance",
        alt: "Traditional dance",
        caption: "Traditional dance performances",
      },
      {
        src: "/placeholder.svg?height=400&width=600&text=Cultural+Music",
        alt: "Musical performance",
        caption: "Live musical performances",
      },
      {
        src: "/placeholder.svg?height=400&width=600&text=Cultural+Art",
        alt: "Art exhibition",
        caption: "Asian art and calligraphy display",
      },
      {
        src: "/placeholder.svg?height=400&width=600&text=Cultural+Community",
        alt: "Community gathering",
        caption: "Community members enjoying the event",
      },
    ],
    totalImages: 32,
    featured: true,
  },
  {
    id: "community-service-2024",
    title: "Community Service Projects",
    description: "Our ongoing commitment to giving back to the Chicago community through various service initiatives.",
    date: "Ongoing 2024",
    location: "Various Chicago Locations",
    previewImages: [
      {
        src: "/placeholder.svg?height=400&width=600&text=Service+Cleanup",
        alt: "Community cleanup",
        caption: "Neighborhood cleanup initiative",
      },
      {
        src: "/placeholder.svg?height=400&width=600&text=Service+Food",
        alt: "Food drive",
        caption: "Food drive for local families",
      },
      {
        src: "/placeholder.svg?height=400&width=600&text=Service+Tutoring",
        alt: "Tutoring program",
        caption: "Free tutoring for local students",
      },
      {
        src: "/placeholder.svg?height=400&width=600&text=Service+Elderly",
        alt: "Senior center visit",
        caption: "Visiting local senior centers",
      },
    ],
    totalImages: 28,
    featured: false,
  },
  {
    id: "evo-showcase-2024",
    title: "EVO Cultural Showcase",
    description: "Evolution - our signature cultural showcase highlighting Asian American experiences and talents.",
    date: "April 20, 2024",
    location: "UIC Theatre",
    previewImages: [
      {
        src: "/placeholder.svg?height=400&width=600&text=EVO+Performance",
        alt: "EVO performance",
        caption: "Powerful storytelling through performance",
      },
      {
        src: "/placeholder.svg?height=400&width=600&text=EVO+Backstage",
        alt: "Backstage preparation",
        caption: "Behind the scenes preparation",
      },
      {
        src: "/placeholder.svg?height=400&width=600&text=EVO+Audience",
        alt: "Engaged audience",
        caption: "Audience engagement and participation",
      },
      {
        src: "/placeholder.svg?height=400&width=600&text=EVO+Cast",
        alt: "Cast and crew",
        caption: "Talented cast and crew members",
      },
    ],
    totalImages: 38,
    featured: false,
  },
]

export default function GalleryPage() {
  // TODO: CMS Integration - Implement dynamic filtering and sorting
  // Example: const [selectedCategory, setSelectedCategory] = useState('all')
  // const filteredGalleries = eventGalleries.filter(gallery =>
  //   selectedCategory === 'all' || gallery.category === selectedCategory
  // )

  const featuredGalleries = eventGalleries.filter((gallery) => gallery.featured)
  const allGalleries = eventGalleries

  return (
    <div className="flex-1 pt-20 flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Event Gallery</h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Explore memorable moments from our community events, cultural celebrations, and service projects
          </p>
        </div>
      </section>

      {/* Gallery Navigation */}
      <section className="bg-white py-8 px-4 border-b border-gray-200">
        <div className="container mx-auto max-w-6xl">
          {/* TODO: CMS Integration - Dynamic navigation based on gallery categories */}
          {/* Example: categories.map(category => <NavigationButton key={category.id} />) */}
          <GalleryNavigation galleries={allGalleries} />
        </div>
      </section>

      {/* Featured Event Galleries */}
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">Featured Events</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Highlights from our most significant community events and celebrations
          </p>

          <div className="space-y-16">
            {/* TODO: CMS Integration - Map through featured galleries from CMS */}
            {/* Example: featuredGalleries.map((gallery, index) => ( */}
            {featuredGalleries.map((gallery, index) => (
              <EventGalleryPreview key={gallery.id} gallery={gallery} reversed={index % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      {/* All Event Galleries Grid */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">All Event Galleries</h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Browse through all our event galleries and relive the memories
          </p>

          {/* TODO: CMS Integration - Implement pagination for large gallery collections */}
          {/* Example: <Pagination currentPage={currentPage} totalPages={totalPages} /> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {allGalleries.map((gallery) => (
              <div
                key={gallery.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative aspect-video">
                  <Image
                    src={gallery.previewImages[0]?.src || "/placeholder.svg"}
                    alt={gallery.previewImages[0]?.alt || gallery.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {gallery.totalImages} photos
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{gallery.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    {gallery.date} • {gallery.location}
                  </p>
                  <p className="text-gray-700 mb-4 line-clamp-2">{gallery.description}</p>

                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200">
                    View Full Gallery
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
