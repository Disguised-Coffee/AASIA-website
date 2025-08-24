import { defineField, defineType } from 'sanity'
import { DocumentVideoIcon} from '@sanity/icons'

export const videoSection = defineType({
  name: 'videoSection',
  title: 'Video Section',
  icon: DocumentVideoIcon,
  type: 'document',
  groups: [
    { name: 'content', title: 'Section Content' },
    { name: 'videoContent', title: 'Video Content' }
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'description',
      type: 'blockContent',
      group: 'content',
    }),
    defineField({
      name: 'youtubeVideoID',
      type: 'string',
      group: 'videoContent',
      description: 'The YouTube video ID for the event highlights.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'videoTitle',
      type: 'string',
      group: 'videoContent',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'caption',
      type: 'string',
    }),
  ],
})