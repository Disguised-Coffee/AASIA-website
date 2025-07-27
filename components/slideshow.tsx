"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface SlideshowProps {
  images: { src: string; alt: string; caption?: string }[]
  interval?: number // in milliseconds
}

export function Slideshow({ images, interval = 3000 }: SlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return // No need for slideshow if 0 or 1 image

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [images.length, interval])

  if (images.length === 0) {
    return <div className="text-center text-muted-foreground py-8">No images to display.</div>
  }

  const currentImage = images[currentIndex]

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-lg shadow-lg aspect-video">
      <Image
        src={currentImage.src || "/placeholder.svg"}
        alt={currentImage.alt}
        fill
        style={{ objectFit: "cover" }}
        className="transition-opacity duration-1000 ease-in-out"
        priority={currentIndex === 0} // Prioritize loading the first image
      />
      {currentImage.caption && (
        <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 text-center">
          <p className="text-sm md:text-base">{currentImage.caption}</p>
        </div>
      )}
      {images.length > 1 && (
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
      )}
    </div>
  )
}
