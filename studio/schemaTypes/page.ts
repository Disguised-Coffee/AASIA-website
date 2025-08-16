import { defineType, defineField, defineArrayMember } from 'sanity'
import hero from './blocks/hero'
import splitImageType from './blocks/splitContent'
// import other blocks...

export default defineType({
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Page Title' }),
    defineField({
      name: 'sections',
      type: 'array',
      title: 'Page Sections',
      of: [
        defineArrayMember({ type: 'hero' }),
        defineArrayMember({ type: 'splitImage' }),
        // { type: 'gallery' },
        // { type: 'faq' },
        // ...add other blocks here
      ],
    }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' } }),
  ],
})