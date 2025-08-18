"use client"

import { ContentSection } from "@/components/content-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

import { useState, useEffect } from "react";
import { EnhancedImageCarousel } from "@/components/enhanced-image-carousel"
import { ArrowRight, Images } from "lucide-react"


// 
// import type { Metadata } from 'next'
 
// export const metadata: Metadata = {
//   title: 'About',
// }
 


// [] TODO, QUERY IMAGES here.
const carouselImages = [
  {
    src: "/aasia logo_transparent.png",
    alt: "Executive board meeting",
    caption: "this is baobao.",
  },
  {
    src: "/placeholder.svg?height=400&width=600&text=Eboard+Meeting+2",
    alt: "Team building activity",
    caption: "Executive board team building retreat",
  },
  {
    src: "/placeholder.svg?height=400&width=600&text=Eboard+Meeting+3",
    alt: "Event planning",
    caption: "Planning our signature events",
  },
  {
    src: "/placeholder.svg?height=400&width=600&text=Eboard+Meeting+4",
    alt: "Community outreach",
    caption: "Organizing community service projects",
  },
  {
    src: "/placeholder.svg?height=400&width=600&text=Eboard+Meeting+5",
    alt: "Leadership workshop",
    caption: "Leadership development workshop",
  },
  {
    src: "/placeholder.svg?height=400&width=600&text=Eboard+Meeting+6",
    alt: "Annual gala planning",
    caption: "Preparing for our annual gala",
  },
  {
    src: "/placeholder.svg?height=400&width=600&text=Eboard+Meeting+7",
    alt: "New member orientation",
    caption: "Welcoming new executive members",
  },
]


function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "../sanity/client";
// import Link from "next/link";


const POSTS_QUERY = `*[
  _type == "hero"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const options = { next: { revalidate: 30 } };


export default async function HomePage() {
  const isMobile = useIsMobile();

  // const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {});

  return (
    <div className="flex-1 flex-col min-h-screen">
      {/* Hero Section */}
      {/* bg-gradient-to-t from-bg-AASIA from-10% to-white-400 to-99% */}
      <section className="relative py-20 px-4 min-h-[80vh] flex items-center pt-40 sm:pt-32 justify-center">
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src="/aasia_banner_logo_official.png"
            alt="AASIA Banner"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0  bg-gradient-to-b from-white/40 to-foreground/90 "></div>
        </div>
        <div className="relative px-4  inset-0 z-10">
          <div className="container mx-auto max-w-6xl z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    Asian American Students In Alliance
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-900 font-medium">Pan-Asian Student Organization at UIC</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium"
                  >
                    <a href="#membership">Membership Form</a>
                  </Button>
                  {/* <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-medium bg-transparent"
                  >
                    <a href="#forms">Other Important Form</a>
                  </Button> */}
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
        </div>
      </section>

      {/* About Section */}
      <ContentSection
        label="AASIA"
        title="About Us"
        description="Asian American Students in Alliance (AASIA) is the oldest Asian American organization at UIC, founded as a Pan-Asian organization in 1987. We aim to increase Asian American awareness and address issues surrounding the Asian American community through our cultural workshops, events, performances, services, and social gatherings. AASIA provides a place where you can learn more about Asian American identity and awareness."
        buttonText="FAQ"
        buttonHref="/faq"
        imageSrc={!isMobile ? "/aasia_circle_logo.png" : "/aasia_banner_logo_official.png"}
        imageAlt="AASIA Logo"
        backgroundColor="bg-white"
      />

      {/* E-Board Section */}
      <section className="relative bg-gray-50 py-16 px-4 overflow-hidden min-h-[80vh]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="aasia_banner_logo_official.png"
            alt="E-Board background"
            fill
            style={{ objectFit: "cover" }}
            className="opacity-25 grayscale"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-r from-gray-50/90 to-gray-50/70"></div> */}
        </div>

        <div className="mx-auto max-w-6xl z-10 absolute inset-x-0 bottom-0 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="p-6">
                {/* <div className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Leadership</div> */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  Meet the Executive Board
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Learn more about the members planning and
                  organizing AASIA’s events!
                </p>
              </div>


            </div>
            <div className="flex flex-col sm:flex-row gap-4 p-6 justify-center">
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

            {/* Image/Visual Element */}
            {/* <div className="flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square">
                <Image
                  src="/placeholder.svg?height=400&width=400&text=E-Board+Team+Photo"
                  alt="Executive Board Team"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* EVO Section */}
      <section className="relative bg-gray-50 py-16 px-4 overflow-hidden min-h-[80vh]">
        {/* Background Image */}
        <div className="absolute inset-0 z-10">
          <Image
            src="aasia_banner_logo_official.png"
            alt="E-Board background"
            fill
            style={{ objectFit: "cover" }}
            className="opacity-25 grayscale"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-r from-gray-50/90 to-gray-50/70"></div> */}
        </div>
        <div className="absolute mx-auto max-w-6xl z-40 inset-x-0 bottom-10 lg:top-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-20 px-6 lg:p-16">
            {/* Image */}
            <div className="flex items-center justify-center lg:order-1">

            </div>

            {/* Content */}
            <div className="space-y-6 lg:order-2 px-2">
              <div>
                {/* <div className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
                  Cultural Showcase
                </div> */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                  EVO: Evolution
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Are you interested in dancing? Do you want to learn about new dance styles from all over Asia? Are you a beginner or advanced performer? Feel free to join Evolution (or EVO)! We are a no-audition dance group dedicated to spreading Asian culture all over UIC!
                </p>
              </div>
              <div className="justify-center flex">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
                  <Link href="/evo">Discover EVO</Link>
                </Button>
              </div>

            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Executive Board in Action
          </h2>
          {/* <EnhancedImageCarousel images={carouselImages} /> */}
        </div>
        <div className="text-center py-6">
          {/* <div className="flex items-center justify-center gap-2 text-gray-600 mb-6">
            <Images className="h-5 w-5" />
            <span className="text-sm">Showing 6 of {images.length}+ photos</span>
          </div> */}

          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            <Link href={"/gallery"} className="inline-flex items-center gap-2">
              View Gallery
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>


      {/* Join Our Community Section */}
      {/* <ContentSection
          title="Join Our Community"
          description="Connect with fellow Asian American students, participate in cultural events, and make lasting friendships. Our community welcomes students from all backgrounds who are interested in learning about and supporting Asian American culture and issues."
          buttonText="Get Involved"
          buttonHref="#membership"
          imageSrc="/placeholder.svg?height=400&width=400&text=Community+Image"
          imageAlt="Community gathering"
          imageOnRight={false}
          backgroundColor="bg-gray-50"
        /> */}
      {/* [] ADD GALLERY SECTION */}
    </div>
  )
}
