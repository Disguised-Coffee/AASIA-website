"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface SlideshowProps {
  images: string[]
  interval?: number // in milliseconds
}

export function Slideshow({ images, interval = 3000 }: SlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [images.length, interval])

  if (images.length === 0) {
    return <div className="text-center text-muted-foreground">No images to display.</div>
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-lg aspect-video">
      <Image
        src={images[currentIndex] || "/placeholder.svg"}
        alt={`Slideshow image ${currentIndex + 1}`}
        fill
        style={{ objectFit: "cover" }}
        className="transition-opacity duration-1000 ease-in-out"
        priority={currentIndex === 0} // Prioritize loading the first image
      />
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full transition-colors duration-300 ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
