import { defineField, defineType, defineArrayMember } from 'sanity'
import {ImagesIcon} from '@sanity/icons'

export const Gallery = defineType({
  name: 'gallery',
  title: 'Gallery',
  icon: ImagesIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      description: 'is also the ID',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'date',
      type: 'date',
      description: 'The date the event took place, usually.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      type: 'string',
      description: 'The location of the event. [Optional]',
      // validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt', type: 'string', title: 'Alt text',
              validation: rule => rule.custom((value, context) => {
                const parent = context?.parent as { asset?: { _ref?: string } }

                return !value && parent?.asset?._ref ? 'Alt text is required when an image is present' : true
              }),
            },
            {
              name: 'caption', type: 'string', title: 'Caption',
              validation: rule => rule.custom((value, context) => {
                const parent = context?.parent as { asset?: { _ref?: string } }

                return !value && parent?.asset?._ref ? 'Caption is required when an image is present' : true
              }),
            },
            {
              name: 'isFeatured', type: 'boolean', title: 'Featured', description: 'Likely to appear first in previews'
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: { type: 'category' } })],
    }),
  ],
})


export const categoryType = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  // icon: TagIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Display Title',
      description: 'The title displayed for the category on gallery page',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
  ],
})
