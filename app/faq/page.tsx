import { Footer } from "@/components/footer"
import { ContentSection } from "@/components/content-section"
import { FAQSection } from "@/components/faq-section"
import { ImageCarousel } from "@/components/image-carousel"

export default function FAQPage() {
  const generalFAQs = [
    {
      question: "What do you do at GBMs? Socials?",
      answer:
        "At our General Body Meetings (GBMs), we discuss upcoming events, share important announcements, and engage in community building activities. Our socials include cultural celebrations, game nights, movie screenings, and networking events that help members connect and build lasting friendships.",
    },
    {
      question: "What 'big' events do you host?",
      answer:
        "AASIA hosts several major events throughout the year including our Annual Gala, Asian American Heritage Month celebrations, cultural workshops, community service projects, and collaborative events with other student organizations. We also participate in campus-wide events and host educational panels on Asian American issues.",
    },
    {
      question: "What makes AASIA different from other student orgs on campus?",
      answer:
        "AASIA is unique as the oldest Asian American organization at UIC, founded in 1987. We focus specifically on Pan-Asian unity, bringing together students from all Asian backgrounds. Our emphasis on both cultural celebration and social justice advocacy sets us apart, along with our strong alumni network and long-standing campus presence.",
    },
    {
      question: "Do you guys volunteer?",
      answer:
        "Yes! Community service is a core part of AASIA's mission. We regularly organize volunteer opportunities including community clean-ups, food drives, tutoring programs, and partnerships with local Asian American community organizations. We believe in giving back to both the campus and broader Chicago community.",
    },
    {
      question: "How can I connect with other members?",
      answer:
        "You can connect with AASIA members through our regular GBMs, social events, GroupMe chat, Instagram, and Discord server. We also have study groups, informal hangouts, and mentorship programs that help new members integrate into our community.",
    },
    {
      question: "What is EVO?",
      answer:
        "EVO (Evolution) is AASIA's annual cultural showcase that celebrates Asian American heritage through performances, art, and storytelling. It's one of our signature events that highlights the diverse talents within our community and educates the campus about Asian American experiences.",
    },
  ]

  const membershipFAQs = [
    {
      question: "Is there a membership fee?",
      answer:
        "No, AASIA membership is completely free! We believe in making our organization accessible to all students regardless of their financial situation. All of our events and activities are open to members at no cost.",
    },
    {
      question: "Am I still a member if I can't attend GBMs?",
      answer:
        "We understand that students have busy schedules. While we encourage attendance at GBMs to stay connected with the community, you remain a member regardless of attendance. We share meeting notes and updates through our digital channels.",
    },
    {
      question: "Is the organization only for Asians/Asian Americans?",
      answer:
        "While AASIA focuses on Asian American issues and culture, we welcome all students who are interested in learning about and supporting our community. Our organization is inclusive and values diverse perspectives and allyship.",
    },
    {
      question: "I want to be more than a general member. Are there any opportunities?",
      answer:
        "Yes! We offer various leadership opportunities including executive board positions, committee chairs, event coordinators, and mentorship roles. We also have special interest groups and project teams that allow members to take on more responsibility and develop leadership skills.",
    },
  ]

  const informationFAQs = [
    {
      question: "Where can I get updates about AASIA?",
      answer:
        "Stay updated through our Instagram (@aasia_uic), GroupMe chat, Discord server, and email newsletters. We also post announcements during GBMs and on campus bulletin boards. Follow our social media for the most current information about events and activities.",
    },
    {
      question: "Who can I contact if I have a question?",
      answer:
        "You can reach out to our executive board through our official email, Instagram DMs, or approach any board member at our events. We also have designated office hours where board members are available to answer questions and provide support to members.",
    },
  ]

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
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 pt-20">
        {/* About Section */}
        <ContentSection
          label="AASIA"
          title="About Us"
          description="Asian American Students in Alliance (AASIA) is the oldest Asian American organization at UIC, founded as a Pan-Asian organization in 1987. We aim to increase Asian American awareness and address issues surrounding the Asian American community through our cultural workshops, events, performances, services, and social gatherings. AASIA provides a place where you can learn more about Asian American identity and awareness."
          imageSrc="/aasia logo_transparent.png"
          imageAlt="AASIA Logo"
          backgroundColor="bg-white"
        />

        {/* FAQ Section */}
        <section className="bg-white py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
              Frequently Asked Questions
            </h1>

            <div className="space-y-12">
              <FAQSection title="General" faqs={generalFAQs} />
              <FAQSection title="Membership" faqs={membershipFAQs} />
              <FAQSection title="Information" faqs={informationFAQs} />
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
      </main>

      <Footer />
    </div>
  )
}
