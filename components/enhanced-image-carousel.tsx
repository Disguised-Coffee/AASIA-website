"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CarouselImage {
  src: string
  alt: string
  caption?: string
}

interface EnhancedImageCarouselProps {
  images: CarouselImage[]
  autoPlayInterval?: number
}

export function EnhancedImageCarousel({ images, autoPlayInterval = 4000 }: EnhancedImageCarouselProps) {
  const [touchStartX, setTouchStartX] = useState<number | null>(null)
  const [touchEndX, setTouchEndX] = useState<number | null>(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.touches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStartX !== null && touchEndX !== null) {
      const distance = touchStartX - touchEndX
      if (distance > 50) {
        goToNext()
      } else if (distance < -50) {
        goToPrevious()
      }
    }
    setTouchStartX(null)
    setTouchEndX(null)
  }

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [userInteracted, setUserInteracted] = useState(false)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || images.length <= 1 || userInteracted) return

    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, autoPlayInterval)

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [images.length, isAutoPlaying, autoPlayInterval, userInteracted])

  // Pause auto-play on user interaction
  const handleUserInteraction = () => {
    setUserInteracted(true)
    setIsAutoPlaying(false)
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
    }
  }

  const goToPrevious = () => {
    handleUserInteraction()
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    handleUserInteraction()
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const goToSlide = (index: number) => {
    handleUserInteraction()
    setCurrentIndex(index)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
    setUserInteracted(!isAutoPlaying)
  }

  // Get preview images (previous 2 and next 2)
  const getPreviewImages = () => {
    const previews = []
    for (let i = -2; i <= 2; i++) {
      if (i !== 0) {
        const index = (currentIndex + i + images.length) % images.length
        previews.push({ ...images[index], index, offset: i })
      }
    }
    return previews
  }

  if (images.length === 0) {
    return <div className="text-center text-gray-500 py-8">No images to display.</div>
  }

  const currentImage = images[currentIndex]
  const previewImages = getPreviewImages()

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Main Carousel Container */}
      <div className="relative">
        {/* Preview Images Container */}
        <div className="flex items-center justify-center gap-2 md:gap-4 mb-6 overflow-hidden">
          {/* Previous 2 images */}
          {previewImages
            .filter((img) => img.offset < 0)
            .reverse()
            .map((image, idx) => (
              <button
                key={`prev-${idx}`}
                onClick={() => goToSlide(image.index)}
                className={`relative flex-shrink-0 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 ${image.offset === -1
                    ? "w-20 h-16 md:w-32 md:h-24 opacity-70 hover:opacity-90 hidden sm:block"
                    : "w-16 h-12 md:w-24 md:h-18 opacity-40 hover:opacity-60 hidden lg:block"
                  }`}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-opacity duration-300"
                />
              </button>
            ))}

          {/* Main Image */}
          <div className="relative w-full max-w-2xl aspect-video rounded-lg overflow-hidden shadow-xl mx-4"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <Image
              src={currentImage.src || "/placeholder.svg"}
              alt={currentImage.alt}
              fill
              style={{ objectFit: "cover" }}
              className="transition-opacity duration-500"
              priority
            />

            {/* Navigation Arrows */}
            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full hidden sm:flex"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full hidden sm:flex"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Auto-play Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleAutoPlay}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full hidden sm:flex"
              aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
            >
              {isAutoPlaying && !userInteracted ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>

            {/* Caption */}
            {currentImage.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 sm:p-4">
                <p className="text-center text-sm md:text-base font-medium">{currentImage.caption}</p>
              </div>
            )}
          </div>

          {/* Next 2 images */}
          {previewImages
            .filter((img) => img.offset > 0)
            .map((image, idx) => (
              <button
                key={`next-${idx}`}
                onClick={() => goToSlide(image.index)}
                className={`relative flex-shrink-0 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 ${image.offset === 1
                    ? "w-20 h-16 md:w-32 md:h-24 opacity-70 hover:opacity-90 hidden sm:block"
                    : "w-16 h-12 md:w-24 md:h-18 opacity-40 hover:opacity-60 hidden lg:block"
                  }`}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-opacity duration-300"
                />
              </button>
            ))}
        </div>

        {/* Page Selection Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${currentIndex === index ? "bg-blue-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Image Counter and Status */}
        <div className="flex justify-center items-center gap-4 mt-4 text-sm text-gray-600">
          <span>
            {currentIndex + 1} of {images.length}
          </span>
          {!userInteracted && isAutoPlaying && <span className="text-blue-600">Auto-playing</span>}
        </div>
      </div>
    </div>
  )
}
