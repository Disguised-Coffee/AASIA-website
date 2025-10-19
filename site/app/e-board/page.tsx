import { client } from "@/sanity/client"
import { EboardMemberCard } from "@/components/eboard-member-card"
import { EnhancedImageCarousel } from "@/components/enhanced-image-carousel"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { PageBuilder } from "@/components/page-sections"
import { urlFor } from "@/sanity/image"

const query = `
  *[_type == "eBoardPage"][0]{
    title,
    caption,
    eBoardCards[]->{
      ...
    },
    content
  }
`

export default async function EboardPage() {
  const data = await client.fetch(query)

  console.log(data);

  data.eBoardCards?.forEach((member: any) => {
    console.log(member.image);
  })

  return (
    <div className="flex-1 flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-16 pt-40 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {data.title || "Meet Our Executive Board"}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            {data.caption ||
              "Dedicated leaders working to strengthen our community and advance Asian American awareness at UIC"}
          </p>
        </div>
      </section>

      {/* Eboard Members Section */}
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Leadership Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {data.eBoardCards?.map((member: any) => (
              <EboardMemberCard
                key={member._id}
                member={{
                  id: member._id,
                  name: member.name,
                  title: member.position,
                  year: member.year,
                  major: member.major,
                  image: (member.image ? urlFor(member.image).url() : "/placeholder.svg"),
                  alt: member.image?.alt || member.name,
                  pronouns: member.pronouns,
                  bio: member.bio,
                  email: member.email,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Page Builder Section (dynamic content) */}
      {data.content && (
        <section>
          <PageBuilder sections={data.content.sections} />
        </section>
      )}

      {/* Intern Application Section */}
      {/* <section className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-4">
            WANT TO JOIN OUR TEAM?
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Apply to Join AASIA's Executive Board
          </h2>
          <Button
            asChild
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium"
          >
            <Link href="/intern-applications">Intern Applications</Link>
          </Button>
        </div>
      </section> */}
    </div>
  )
}
