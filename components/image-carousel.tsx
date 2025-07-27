"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CarouselImage {
  src: string
  alt: string
  caption?: string
}

interface ImageCarouselProps {
  images: CarouselImage[]
  autoPlay?: boolean
  autoPlayInterval?: number
}

export function ImageCarousel({ images, autoPlay = true, autoPlayInterval = 5000 }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, autoPlayInterval)

    return () => clearInterval(timer)
  }, [images.length, autoPlay, autoPlayInterval])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  if (images.length === 0) {
    return <div className="text-center text-gray-500 py-8">No images to display.</div>
  }

  const currentImage = images[currentIndex]

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Main Image Display */}
      <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg bg-gray-100">
        <Image
          src={currentImage.src || "/placeholder.svg"}
          alt={currentImage.alt}
          fill
          style={{ objectFit: "cover" }}
          className="transition-opacity duration-500"
          priority={currentIndex === 0}
        />

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </>
        )}

        {/* Caption */}
        {currentImage.caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
            <p className="text-center text-sm md:text-base font-medium">{currentImage.caption}</p>
          </div>
        )}
      </div>

      {/* Thumbnail Navigation */}
      {images.length > 1 && (
        <div className="flex justify-center mt-6 space-x-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                currentIndex === index
                  ? "border-blue-600 ring-2 ring-blue-200"
                  : "border-gray-300 hover:border-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                style={{ objectFit: "cover" }}
                className="transition-opacity duration-200"
              />
            </button>
          ))}
        </div>
      )}

      {/* Dot Indicators */}
      {images.length > 1 && (
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                currentIndex === index ? "bg-blue-600" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Image Counter */}
      <div className="text-center mt-4 text-sm text-gray-600">
        {currentIndex + 1} of {images.length}
      </div>
    </div>
  )
}
