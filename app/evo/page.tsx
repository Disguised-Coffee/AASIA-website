import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContentSection } from "@/components/content-section"
import { VideoSection } from "@/components/video-section"
import { EVOGallery } from "@/components/evo-gallery"

export default function EVOPage() {
  const evoGalleryImages = [
    {
      src: "/placeholder.svg?height=400&width=600&text=EVO+Performance+1",
      alt: "EVO opening performance",
      caption: "Opening act featuring traditional storytelling",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=EVO+Performance+2",
      alt: "Cultural dance performance",
      caption: "Contemporary fusion dance piece",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=EVO+Performance+3",
      alt: "Musical performance",
      caption: "Live musical performance by student artists",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=EVO+Performance+4",
      alt: "Spoken word performance",
      caption: "Powerful spoken word about identity",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=EVO+Performance+5",
      alt: "Group performance",
      caption: "Collaborative performance piece",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=EVO+Performance+6",
      alt: "Behind the scenes",
      caption: "Backstage preparation and rehearsals",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=EVO+Performance+7",
      alt: "Audience engagement",
      caption: "Audience participation and engagement",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=EVO+Performance+8",
      alt: "Final bow",
      caption: "Cast and crew taking their final bow",
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

        {/* About EVO Content Section */}
        <ContentSection
          title="What is EVO?"
          description="EVO (Evolution) is AASIA's annual cultural showcase that brings together the diverse voices and talents of the Asian American community at UIC. Through powerful performances, storytelling, and artistic expression, EVO explores themes of identity, heritage, and the evolving Asian American experience. This signature event serves as both a celebration of our rich cultural diversity and a platform for meaningful dialogue about the challenges and triumphs that shape our community."
          buttonText="Learn More About Our Mission"
          buttonHref="/about"
          imageSrc="/placeholder.svg?height=500&width=600&text=EVO+Showcase+Image"
          imageAlt="EVO Cultural Showcase"
          imageOnRight={true}
          backgroundColor="bg-white"
        />

        {/* Video Section */}
        <VideoSection
          title="EVO 2024 Highlights"
          description="Experience the magic of our most recent EVO showcase through this highlight reel featuring memorable performances, behind-the-scenes moments, and the powerful stories that made EVO 2024 unforgettable."
          videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder video URL
          backgroundColor="bg-gray-50"
        />

        {/* EVO Gallery Section */}
        <section className="bg-white py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">EVO Through the Years</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore memorable moments from our EVO showcases, featuring talented performers, creative
                collaborations, and the powerful stories that define our community
              </p>
            </div>
            <EVOGallery images={evoGalleryImages} />
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Be Part of EVO 2025</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you're a performer, writer, artist, or simply want to support our showcase, there are many ways to
              get involved in making EVO 2025 our best yet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors duration-200">
                Audition for EVO 2025
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-medium text-lg transition-colors duration-200 bg-transparent">
                Volunteer with Us
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
