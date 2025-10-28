import { client } from '@/sanity/client'
import { urlFor } from "@/sanity/image"
import GalleryPageClient from "@/components/gallery-page-client"

// TypeScript type for gallery
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

// GROQ query to fetch galleries and their categories
const galleryQuery = `
  *[_type == "gallery"]{
    _id,
    title,
    description,
    date,
    location,
    slug,
    images[]{
      asset->{
        url
      },
      alt,
      caption,
      isFeatured
    },
    categories[]->{
      _id,
      title
    }
  }
`

// GROQ query to fetch all categories
const categoryQuery = `
  *[_type == "category"]{
    _id,
    title,
    description
  }
`

export default async function GalleryPage() {
  const galleries: Gallery[] = await client.fetch(galleryQuery)
  const categories: { _id: string; title: string; description?: string }[] =
    await client.fetch(categoryQuery)

  return (
    <GalleryPageClient galleries={galleries ?? []} categories={categories ?? []} />
  )
}
