"use client"
import { Footer } from "@/components/footer"
import { ContentSection } from "@/components/content-section"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
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

        {/* Additional sections can be easily added using the ContentSection component */}
        <ContentSection
          title="Join Our Community"
          description="Connect with fellow Asian American students, participate in cultural events, and make lasting friendships. Our community welcomes students from all backgrounds who are interested in learning about and supporting Asian American culture and issues."
          buttonText="Get Involved"
          buttonHref="#membership"
          imageSrc="/placeholder.svg?height=400&width=400&text=Community+Image"
          imageAlt="Community gathering"
          imageOnRight={false}
          backgroundColor="bg-gray-50"
        />
      </main>

      <Footer />
    </div>
  )
}
