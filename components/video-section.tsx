import { Play } from "lucide-react"
import Image from "next/image"

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
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl bg-gray-900">
            <Image
              src={videoPlaceholder || "/placeholder.svg"}
              alt="Video thumbnail"
              fill
              style={{ objectFit: "cover" }}
              className="opacity-80"
            />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white/90 hover:bg-white text-gray-900 rounded-full p-6 transition-all duration-300 hover:scale-110 shadow-lg">
                <Play className="h-12 w-12 ml-1" fill="currentColor" />
              </button>
            </div>

            {/* Video Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-white text-xl font-semibold mb-2">EVO 2024 Highlights</h3>
              <p className="text-gray-200 text-sm">
                Duration: 8:45 | Featuring performances from 15+ talented students
              </p>
            </div>
          </div>

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
