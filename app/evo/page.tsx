import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContentSection } from "@/components/content-section"
import { VideoSection } from "@/components/video-section"
import { GalleryPreview } from "@/components/gallery-preview"

export default function EVOPage() {
  const galleryImages = [
    {
      src: "/placeholder.svg?height=300&width=400&text=EVO+Performance+1",
      alt: "EVO cultural performance",
      caption: "Opening act featuring traditional dance",
    },
    {
      src: "/placeholder.svg?height=300&width=400&text=EVO+Performance+2",
      alt: "EVO storytelling segment",
      caption: "Powerful storytelling through spoken word",
    },
    {
      src: "/placeholder.svg?height=300&width=400&text=EVO+Performance+3",
      alt: "EVO musical performance",
      caption: "Live musical performances",
    },
    {
      src: "/placeholder.svg?height=300&width=400&text=EVO+Performance+4",
      alt: "EVO cast and crew",
      caption: "Talented cast and crew members",
    },
    {
      src: "/placeholder.svg?height=300&width=400&text=EVO+Performance+5",
      alt: "EVO audience engagement",
      caption: "Engaging with the audience",
    },
    {
      src: "/placeholder.svg?height=300&width=400&text=EVO+Performance+6",
      alt: "EVO finale",
      caption: "Grand finale celebration",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">EVO: Evolution</h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Our signature cultural showcase celebrating Asian American experiences, identity, and artistic expression
            </p>
          </div>
        </section>

        {/* Content Section with Image */}
        <ContentSection
          title="What is EVO?"
          description="EVO (Evolution) is AASIA's premier annual cultural showcase that brings together the diverse voices and experiences of the Asian American community. Through powerful performances, storytelling, music, and dance, EVO creates a platform for students to explore and express their cultural identity while educating the broader campus community about Asian American experiences. This transformative event showcases the evolution of Asian American culture and the ongoing journey of identity, belonging, and community building."
          buttonText="Learn More About EVO"
          buttonHref="#video-section"
          imageSrc="/placeholder.svg?height=500&width=600&text=EVO+Showcase+Image"
          imageAlt="EVO Cultural Showcase"
          backgroundColor="bg-white"
        />

        {/* Video Section */}
        <VideoSection
          title="Experience EVO 2024"
          description="Watch highlights from our most recent EVO showcase, featuring incredible performances and powerful storytelling that celebrates the Asian American experience."
          videoPlaceholder="/placeholder.svg?height=400&width=700&text=EVO+2024+Video+Highlights"
          backgroundColor="bg-gray-50"
        />

        {/* Gallery Section */}
        <GalleryPreview
          title="EVO Gallery"
          description="Explore memorable moments from our EVO showcases throughout the years"
          images={galleryImages}
          galleryLink="/gallery/evo-showcase-2024"
          backgroundColor="bg-white"
        />

        {/* Call to Action Section */}
        <section className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Be Part of EVO 2025</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Interested in participating in our next EVO showcase? Whether you're a performer, storyteller, musician,
              or want to help behind the scenes, we'd love to have you join our creative team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors duration-200">
                Get Involved
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-medium text-lg transition-colors duration-200 bg-transparent">
                Contact EVO Team
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
