"use client"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContentSection } from "@/components/content-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20 px-4 min-h-[80vh] flex items-center">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    Asian American Students In Alliance
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-600 font-medium">Pan-Asian Student Organization at UIC</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium"
                  >
                    <a href="#membership">Membership Form</a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-medium bg-transparent"
                  >
                    <a href="#forms">Other Important Form</a>
                  </Button>
                </div>
              </div>

              {/* Right Content - Placeholder for Graphics */}
              <div className="flex items-center justify-center">
                <div className="w-full max-w-md aspect-[4/3] border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-white/50 backdrop-blur-sm">
                  <div className="text-center p-8">
                    <div className="text-gray-500 text-lg font-medium mb-2">Place Holder for</div>
                    <div className="text-gray-700 text-xl font-semibold">Insta Graphics</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <ContentSection
          label="AASIA"
          title="About Us"
          description="Asian American Students in Alliance (AASIA) is the oldest Asian American organization at UIC, founded as a Pan-Asian organization in 1987. We aim to increase Asian American awareness and address issues surrounding the Asian American community through our cultural workshops, events, performances, services, and social gatherings. AASIA provides a place where you can learn more about Asian American identity and awareness."
          buttonText="FAQ"
          buttonHref="/faq"
          imageSrc="/aasia logo_transparent.png"
          imageAlt="AASIA Logo"
          backgroundColor="bg-white"
        />

        {/* E-Board Section with Background Photo */}
        <section
          className="relative py-20 px-4 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/eboard-background.png')`,
          }}
        >
          <div className="container mx-auto max-w-4xl text-center text-white">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Meet Our Leadership</h2>
            <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
              Our dedicated executive board works tirelessly to create meaningful experiences, foster community
              connections, and advance Asian American awareness on campus. Get to know the passionate leaders driving
              our mission forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium"
              >
                <Link href="/e-board">Meet Our E-Board</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-medium bg-transparent"
              >
                <Link href="/intern-applications">Join Our Team</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* EVO Section */}
        <ContentSection
          title="EVO: Evolution"
          description="Experience our signature cultural showcase that celebrates Asian American identity, heritage, and artistic expression. EVO brings together diverse voices through powerful performances, storytelling, and creative collaboration, creating a platform for meaningful dialogue about the Asian American experience."
          buttonText="Explore EVO"
          buttonHref="/evo"
          imageSrc="/placeholder.svg?height=500&width=600&text=EVO+Showcase"
          imageAlt="EVO Cultural Showcase"
          imageOnRight={false}
          backgroundColor="bg-gray-50"
        />

        {/* Join Our Community Section */}
        <ContentSection
          title="Join Our Community"
          description="Connect with fellow Asian American students, participate in cultural events, and make lasting friendships. Our community welcomes students from all backgrounds who are interested in learning about and supporting Asian American culture and issues."
          buttonText="Get Involved"
          buttonHref="#membership"
          imageSrc="/placeholder.svg?height=400&width=400&text=Community+Image"
          imageAlt="Community gathering"
          imageOnRight={true}
          backgroundColor="bg-white"
        />
      </main>

      <Footer />
    </div>
  )
}
