"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Slideshow } from "@/components/slideshow"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  const slideshowImages = [
    {
      src: "/placeholder.svg?height=400&width=800&text=Club+Event+1",
      alt: "Club Event 1",
      caption: "Our first successful club gathering!",
    },
    {
      src: "/placeholder.svg?height=400&width=800&text=Club+Event+2",
      alt: "Club Event 2",
      caption: "Members collaborating on a new project.",
    },
    {
      src: "/placeholder.svg?height=400&width=800&text=Club+Event+3",
      alt: "Club Event 3",
      caption: "Fun times at our annual social event.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="hero-section"
          className="relative flex flex-col items-center justify-center text-center text-white py-20 min-h-[80vh] px-4"
        >
          <div className="absolute inset-0 bg-black/40 z-0"></div> {/* Semi-transparent overlay */}
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">Welcome to Our Vibrant Club!</h1>
            <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Connecting students through shared passions, fostering growth, and building a strong community. Join us
              for exciting events and memorable experiences!
            </p>
            <Link href="/#about-us-section" passHref>
              <Button size="lg">
                Learn More
              </Button>
            </Link>
          </div>
        </section>

        {/* Highlights Section (with Slideshow) */}
        <section id="highlights-section" className="bg-white dark:bg-gray-800 py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white">
              Club Highlights
            </h2>
            <Slideshow images={slideshowImages} />
          </div>
        </section>

        {/* Info Section */}
        <section id="info-section" className="bg-gray-100 dark:bg-gray-900 py-16 px-4">
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:w-1/2 flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Club+Activity"
                alt="Club Activity"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover w-full max-w-md"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
                Discover Our Community
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Our club is dedicated to creating an inclusive and engaging environment for all members. We host a
                variety of events, workshops, and social gatherings designed to help you connect, learn, and grow.
                Whether you're looking to develop new skills, meet like-minded individuals, or simply have fun, you'll
                find your place here.
              </p>
              <Link href="/#about-us-section" passHref>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Read More About Us
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Placeholder sections for navigation links */}
        <section
          id="about-us-section"
          className="min-h-[50vh] bg-white dark:bg-gray-800 py-16 px-4 flex items-center justify-center"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">About Us Content</h2>
        </section>
        <section
          id="eboard-info-section"
          className="min-h-[50vh] bg-gray-200 dark:bg-gray-700 py-16 px-4 flex items-center justify-center"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Eboard Info Content</h2>
        </section>
      </main>

      <Footer />
    </div>
  )
}
