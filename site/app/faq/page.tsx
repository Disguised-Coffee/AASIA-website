import { client } from "@/sanity/client"
import { FAQSection } from "@/components/faq-section"
import { ContentSection } from "@/components/content-section"
import { ImageCarousel } from "@/components/image-carousel"

const query = `
  *[_type == "faqPage"][0]{
    ...
  }
`

export default async function FAQPage() {
  const data = await client.fetch(query)

  console.log(await data)

  // Fallback for About section and carousel images (can be moved to Sanity too)
  const aboutSection = {
    label: "AASIA",
    title: "About Us",
    description:
      "Asian American Students in Alliance (AASIA) is the oldest Asian American organization at UIC, founded as a Pan-Asian organization in 1987. We aim to increase Asian American awareness and address issues surrounding the Asian American community through our cultural workshops, events, performances, services, and social gatherings. AASIA provides a place where you can learn more about Asian American identity and awareness.",
    imageSrc: "/aasia logo_transparent.png",
    imageAlt: "AASIA Logo",
    backgroundColor: "bg-white",
  }

  const carouselImages = [
    {
      src: "/placeholder.svg?height=400&width=600&text=AASIA+Event+1",
      alt: "AASIA community event",
      caption: "Annual community gathering",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=AASIA+Event+2",
      alt: "Cultural celebration",
      caption: "Cultural heritage celebration",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=AASIA+Event+3",
      alt: "Volunteer activity",
      caption: "Community service project",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=AASIA+Event+4",
      alt: "EVO performance",
      caption: "EVO cultural showcase",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=AASIA+Event+5",
      alt: "Social gathering",
      caption: "Member social event",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=AASIA+Event+6",
      alt: "Workshop session",
      caption: "Educational workshop",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=AASIA+Event+7",
      alt: "Group photo",
      caption: "AASIA family photo",
    },
  ]

  return (
    <div className="flex-1 pt-20 flex-col min-h-screen">
      {/* About Section */}
      <ContentSection {...aboutSection} />

      {/* FAQ Section */}
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h1>
          <div className="space-y-12">
            {data?.faqSections?.map((section: any, idx: number) => (
              <FAQSection
                key={idx}
                title={section.title}
                faqs={section.faqSection.map((faq: any) => ({
                  question: faq.question,
                  answer: faq.answer // fallback for blockContent
                }))}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Our Community in Action</h2>
          <ImageCarousel images={carouselImages} />
        </div>
      </section>
    </div>
  )
}
