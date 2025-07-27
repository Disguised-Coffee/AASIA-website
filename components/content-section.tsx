import Image from "next/image"
import { Button } from "@/components/ui/button"
import type { ReactNode } from "react"

interface ContentSectionProps {
  label?: string
  title: string
  description: string
  buttonText?: string
  buttonHref?: string
  imageSrc: string
  imageAlt: string
  imageOnRight?: boolean
  backgroundColor?: string
  children?: ReactNode
}

export function ContentSection({
  label,
  title,
  description,
  buttonText,
  buttonHref,
  imageSrc,
  imageAlt,
  imageOnRight = true,
  backgroundColor = "bg-white",
  children,
}: ContentSectionProps) {
  const textContent = (
    <div className="flex flex-col justify-center space-y-6">
      {label && <div className="text-sm font-semibold text-blue-600 uppercase tracking-wide">{label}</div>}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">{title}</h2>
      <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
      {buttonText && buttonHref && (
        <div>
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-base font-medium">
            <a href={buttonHref}>{buttonText}</a>
          </Button>
        </div>
      )}
      {children}
    </div>
  )

  const imageContent = (
    <div className="flex items-center justify-center">
      <div className="relative w-full max-w-md aspect-square">
        <Image src={imageSrc || "/placeholder.svg"} alt={imageAlt} fill className="object-contain" />
      </div>
    </div>
  )

  return (
    <section className={`py-16 px-4 ${backgroundColor}`}>
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {imageOnRight ? (
            <>
              {textContent}
              {imageContent}
            </>
          ) : (
            <>
              {imageContent}
              {textContent}
            </>
          )}
        </div>
      </div>
    </section>
  )
}
