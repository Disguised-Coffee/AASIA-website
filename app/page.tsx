"use client"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContentSection } from "@/components/content-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

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

        {/* E-Board Section */}
        <section className="relative bg-gray-50 py-16 px-4 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=600&width=1200&text=E-Board+Background+Photo"
              alt="E-Board background"
              fill
              style={{ objectFit: "cover" }}
              className="opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-50/90 to-gray-50/70"></div>
          </div>

          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-6">
                <div>
                  <div className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Leadership</div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                    Meet Our Executive Board
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Our dedicated executive board members work tirelessly to strengthen our community, organize
                    meaningful events, and advance Asian American awareness on campus. From seasoned leaders to
                    passionate newcomers, our team brings diverse perspectives and unwavering commitment to AASIA's
                    mission.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
                    <Link href="/e-board">Meet the Team</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 bg-transparent"
                  >
                    <Link href="/intern-applications">Join Our Team</Link>
                  </Button>
                </div>
              </div>

              {/* Image/Visual Element */}
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-md aspect-square">
                  <Image
                    src="/placeholder.svg?height=400&width=400&text=E-Board+Team+Photo"
                    alt="Executive Board Team"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EVO Section */}
        <section className="bg-white py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="flex items-center justify-center lg:order-1">
                <div className="relative w-full max-w-md aspect-video">
                  <Image
                    src="/placeholder.svg?height=300&width=500&text=EVO+Showcase+Preview"
                    alt="EVO Cultural Showcase"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-lg shadow-xl"
                  />
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 rounded-full p-4 shadow-lg">
                      <div className="w-0 h-0 border-l-[20px] border-l-blue-600 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6 lg:order-2">
                <div>
                  <div className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
                    Cultural Showcase
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                    EVO: Evolution
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Experience our signature annual cultural showcase that celebrates Asian American identity through
                    powerful performances, storytelling, and artistic expression. EVO brings together diverse voices to
                    share experiences, challenge perspectives, and showcase the evolution of our community.
                  </p>
                </div>

                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
                  <Link href="/evo">Discover EVO</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Join Our Community Section */}
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
