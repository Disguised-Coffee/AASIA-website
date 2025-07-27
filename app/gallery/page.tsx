import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function GalleryPage() {
  const galleryImages = [
    { src: "/placeholder.svg?height=300&width=400&text=Gallery+Image+1", alt: "Club event group photo" },
    { src: "/placeholder.svg?height=400&width=300&text=Gallery+Image+2", alt: "Workshop in progress" },
    { src: "/placeholder.svg?height=350&width=500&text=Gallery+Image+3", alt: "Members presenting projects" },
    { src: "/placeholder.svg?height=250&width=300&text=Gallery+Image+4", alt: "Social gathering" },
    { src: "/placeholder.svg?height=300&width=350&text=Gallery+Image+5", alt: "Outdoor club activity" },
    { src: "/placeholder.svg?height=450&width=600&text=Gallery+Image+6", alt: "Annual gala dinner" },
    { src: "/placeholder.svg?height=200&width=250&text=Gallery+Image+7", alt: "Team building exercise" },
    { src: "/placeholder.svg?height=300&width=400&text=Gallery+Image+8", alt: "Guest speaker session" },
    { src: "/placeholder.svg?height=350&width=450&text=Gallery+Image+9", alt: "Volunteering event" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 pt-20">
        {" "}
        {/* pt-20 to account for fixed header */}
        {/* Featured Event Section */}
        <section className="bg-white dark:bg-gray-800 py-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800 dark:text-white">
              Featured Event: Annual Gala
            </h1>
            <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-lg overflow-hidden shadow-xl mb-6">
              <Image
                src="/placeholder.svg?height=600&width=1000&text=Featured+Event"
                alt="Featured Event: Annual Gala"
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Relive the magic of our Annual Gala, a night of celebration, networking, and unforgettable memories. This
              year's event brought together members, alumni, and special guests for an evening of camaraderie and
              inspiration.
            </p>
          </div>
        </section>
        {/* Image Gallery Section */}
        <section className="bg-gray-100 dark:bg-gray-900 py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white">
              Our Club in Action
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-fr">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className={`relative overflow-hidden rounded-lg shadow-md group
                    ${index % 5 === 0 ? "col-span-2 row-span-2" : ""} 
                    ${index % 7 === 0 ? "col-span-2" : ""}
                    `}
                  style={{ minHeight: "200px" }} // Ensure a minimum height for smaller images
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-center p-2 text-sm">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
