"use client"
import { Video } from "./VideoComp"

interface VideoSectionProps {
  title: string
  description: string
  videoPlaceholder: string
  backgroundColor?: string
}


export function VideoSection({
  title,
  description,
  videoPlaceholder,
  backgroundColor = "bg-gray-50",
}: VideoSectionProps) {


  return (
    <section className={`py-16 px-4 ${backgroundColor}`} id="video-section">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Video Placeholder */}
          <Video title={"EVO 2024 Highlights"} description={" Duration: 8:45 | Featuring performances from 15+ talented students"} videoPlaceholder={videoPlaceholder} YTVideoID={"bHQqvYy5KYo"} />

          {/* Video Description */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 max-w-2xl mx-auto">
              This video captures the essence of EVO 2024, showcasing the incredible talent and powerful stories shared
              by our community members. From traditional performances to contemporary interpretations of Asian American
              experiences, witness the evolution of our cultural expression.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}