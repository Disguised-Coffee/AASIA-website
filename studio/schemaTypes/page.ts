import { defineType, defineField, defineArrayMember } from 'sanity'

import {DocumentSheetIcon} from '@sanity/icons'

export default defineType({
  name: 'page',
  type: 'document',
  title: 'Page',
  icon: DocumentSheetIcon,
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Page Title' }),
    defineField({
      name: 'sections',
      type: 'array',
      title: 'Page Sections',
      of: [
        defineArrayMember({ type: 'hero' }),
        defineArrayMember({ type: 'splitImage' }),
        defineArrayMember({ type: 'faq' }),
        defineArrayMember({ type: 'feature' }),
        defineArrayMember({ type: 'gallerySection' }),
        defineArrayMember({ type: 'videoSection' }),
        // { type: 'gallery' },
        // { type: 'faq' },
        // ...add other blocks here
      ],
    }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' } }),
  ],
})