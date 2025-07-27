interface VideoSectionProps {
  title: string
  description: string
  videoUrl: string
  backgroundColor?: string
}

export function VideoSection({ title, description, videoUrl, backgroundColor = "bg-gray-50" }: VideoSectionProps) {
  return (
    <section className={`py-16 px-4 ${backgroundColor}`}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>
        </div>

        <div className="relative w-full max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl bg-gray-900">
            <iframe
              src={videoUrl}
              title={title}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
