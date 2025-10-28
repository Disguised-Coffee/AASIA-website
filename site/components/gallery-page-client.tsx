"use client"

import { useState, useMemo } from "react"
import { EventGalleryPreview } from "@/components/event-gallery-preview"
import { GalleryNavigation } from "@/components/gallery-navigation"
import Image from "next/image"
import { urlFor } from "@/sanity/image"

type Gallery = {
    _id: string
    title: string
    description: string
    date: string
    location?: string
    slug: { current: string }
    images: {
        asset: any
        alt?: string
        caption?: string
        isFeatured?: boolean
    }[]
    categories?: { _id: string; title: string }[]
    featured?: boolean
}

type Category = {
    _id: string
    title: string
    description?: string
}

interface GalleryPageClientProps {
    galleries: Gallery[]
    categories: Category[]
}

export default function GalleryPageClient({ galleries, categories }: GalleryPageClientProps) {
    const [activeCategory, setActiveCategory] = useState<string>("all")

    // Prepare category titles for navigation
    const categoryTitles = categories.map((cat) => cat.title)

    // Filter galleries by selected category
    const filteredGalleries = useMemo(() => {
        if (activeCategory === "all") return galleries
        return galleries.filter((gallery) =>
            Array.isArray(gallery.categories)
                ? gallery.categories.some((cat) => cat.title === activeCategory)
                : false
        )
    }, [activeCategory, galleries])

    // Compute gallery counts per category
    const galleryCounts: Record<string, number> = {
        all: galleries.length,
        "Featured Events": galleries.filter(g =>
            Boolean(g.featured) || (Array.isArray(g.images) && g.images.some(img => Boolean(img?.isFeatured)))
        ).length,
    };

    categories.forEach(cat => {
        galleryCounts[cat.title] = galleries.filter(gallery =>
            Array.isArray(gallery.categories) &&
            gallery.categories.some((c) => c?.title === cat.title)
        ).length;
    });


    return (
        <div className="flex-1 pt-20 flex-col min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-16 px-4">
                <div className="container mx-auto max-w-6xl text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Event Gallery</h1>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                        Explore memorable moments from our community events, cultural celebrations, and service projects
                    </p>
                </div>
            </section>

            {/* Gallery Navigation */}
            <section className="bg-white py-8 px-4 border-b border-gray-200">
                <div className="container mx-auto max-w-6xl">
                    <GalleryNavigation
                        categories={categoryTitles}
                        counts={galleryCounts}
                        onFilterChange={setActiveCategory}
                    />
                </div>
            </section>

            {/* Filtered Event Galleries */}
            <section className="bg-white py-16 px-4">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
                        {activeCategory === "all" ? "All Events" : activeCategory}
                    </h2>
                    <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                        {activeCategory === "all"
                            ? "Browse all our event galleries and relive the memories"
                            // if there's a description, show it, else have a default
                            : (categoryDescriptions[activeCategory]
                                ? categoryDescriptions[activeCategory]
                                : `Events in the "${activeCategory}" category`)}
                    </p>

                    <div className="space-y-16">
                        {filteredGalleries.length === 0 && (
                            <p className="text-center text-gray-500">No events found in this category.</p>
                        )}
                        {filteredGalleries.map((gallery, index) => (
                            <EventGalleryPreview key={gallery._id} gallery={gallery} reversed={index % 2 === 1} />
                        ))}
                    </div>
                </div>
            </section>

            {/* All Event Galleries Grid */}
            <section className="bg-gray-50 py-16 px-4">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">All Event Galleries</h2>
                    <p className="text-lg text-gray-600 text-center mb-12">
                        Browse through all our event galleries and relive the memories
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {galleries.map((gallery) => (
                            <div
                                key={gallery._id}
                                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="relative aspect-video">
                                    <Image
                                        src={
                                            gallery.images?.[0]?.asset
                                                ? urlFor(gallery.images[0].asset).width(600).height(400).url()
                                                : "/placeholder.svg"
                                        }
                                        alt={gallery.images?.[0]?.alt || gallery.title}
                                        fill
                                        style={{ objectFit: "cover" }}
                                        className="transition-transform duration-300 hover:scale-105"
                                    />
                                    <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                                        {gallery.images?.length ?? 0} photos
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{gallery.title}</h3>
                                    <p className="text-gray-600 text-sm mb-2">
                                        {gallery.date} {gallery.location && `• ${gallery.location}`}
                                    </p>
                                    <p className="text-gray-700 mb-4 line-clamp-2">{gallery.description}</p>

                                    <a
                                        href={`/gallery/${gallery.slug.current}`}
                                        className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium text-center transition-colors duration-200"
                                    >
                                        View Full Gallery
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}