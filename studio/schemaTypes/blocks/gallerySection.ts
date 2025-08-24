import { defineField, defineType, defineArrayMember } from 'sanity'
import {TagIcon} from '@sanity/icons'

export default defineType({
  name: 'gallerySection',
  title: 'Gallery',
  icon: TagIcon,
  type: 'object',
  fields: [
    defineField({
      name: 'variation',
      type: 'string',
      options: {
        list: [
          { title: 'Grid', value: 'grid' },
          { title: 'Slideshow', value: 'slideshow' },
          { title: 'Masonry [EXPERIMENTAL]', value: 'masonry' },
          { title: 'Carousel [EXPERIMENTAL]', value: 'carousel' },
        ],
      },
    }),
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name:'buttonSection',
      type: 'array',
      of: [
        defineArrayMember({ type: 'button' })
      ],
    }),
    defineField({
      name: 'galleryRef',
      type: 'reference',
      to: [{ type: 'gallery' }],
    })
  ],
})