import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EboardMemberCard } from "@/components/eboard-member-card"
import { EnhancedImageCarousel } from "@/components/enhanced-image-carousel"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// JSON data for eboard members
const eboardMembers = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "President",
    year: "Senior",
    major: "Computer Science",
    bio: "Leading AASIA with passion for community building and cultural awareness.",
    image: "/placeholder.svg?height=300&width=300&text=Sarah+Chen",
    email: "president@aasia.uic.edu",
  },
  {
    id: 2,
    name: "Michael Kim",
    title: "Vice President",
    year: "Junior",
    major: "Business Administration",
    bio: "Supporting organizational growth and member engagement initiatives.",
    image: "/placeholder.svg?height=300&width=300&text=Michael+Kim",
    email: "vp@aasia.uic.edu",
  },
  {
    id: 3,
    name: "Jessica Wang",
    title: "Secretary",
    year: "Sophomore",
    major: "Psychology",
    bio: "Maintaining organizational records and facilitating communication.",
    image: "/placeholder.svg?height=300&width=300&text=Jessica+Wang",
    email: "secretary@aasia.uic.edu",
  },
  {
    id: 4,
    name: "David Nguyen",
    title: "Treasurer",
    year: "Junior",
    major: "Accounting",
    bio: "Managing finances and ensuring fiscal responsibility for all events.",
    image: "/placeholder.svg?height=300&width=300&text=David+Nguyen",
    email: "treasurer@aasia.uic.edu",
  },
  {
    id: 5,
    name: "Amy Liu",
    title: "Events Coordinator",
    year: "Senior",
    major: "Marketing",
    bio: "Planning and executing memorable events that bring our community together.",
    image: "/placeholder.svg?height=300&width=300&text=Amy+Liu",
    email: "events@aasia.uic.edu",
  },
  {
    id: 6,
    name: "Ryan Park",
    title: "Public Relations",
    year: "Junior",
    major: "Communications",
    bio: "Building relationships and promoting AASIA's mission across campus.",
    image: "/placeholder.svg?height=300&width=300&text=Ryan+Park",
    email: "pr@aasia.uic.edu",
  },
  {
    id: 7,
    name: "Priya Patel",
    title: "Cultural Chair",
    year: "Sophomore",
    major: "International Studies",
    bio: "Celebrating and educating about diverse Asian cultures and traditions.",
    image: "/placeholder.svg?height=300&width=300&text=Priya+Patel",
    email: "cultural@aasia.uic.edu",
  },
  {
    id: 8,
    name: "Kevin Tanaka",
    title: "Community Service Chair",
    year: "Senior",
    major: "Social Work",
    bio: "Organizing volunteer opportunities and community outreach programs.",
    image: "/placeholder.svg?height=300&width=300&text=Kevin+Tanaka",
    email: "service@aasia.uic.edu",
  },
]

const carouselImages = [
  {
    src: "/placeholder.svg?height=400&width=600&text=Eboard+Meeting+1",
    alt: "Executive board meeting",
    caption: "Monthly executive board planning session",
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

export default function EboardPage() {
  return (
    <div className="flex-1 flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-16 pt-40 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Meet Our Executive Board</h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Dedicated leaders working to strengthen our community and advance Asian American awareness at UIC
          </p>
        </div>
      </section>

      {/* Eboard Members Section */}
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Our Leadership Team</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {eboardMembers.map((member) => (
              <EboardMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Carousel Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Executive Board in Action
          </h2>
          {/* <EnhancedImageCarousel images={carouselImages} /> */}
        </div>
      </section>

      {/* Intern Application Section */}
      <section className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-4">WANT TO JOIN OUR TEAM?</p>
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
      </section>
    </div>
  )
}
