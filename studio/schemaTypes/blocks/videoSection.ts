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
      name: 'videoPlayer',
      type: 'reference',
      to: [{ type: 'videoPlayerSection' }],
    }),
  ],
})

export const videoPlayerSection = defineType({
  name: 'videoPlayerSection',
  title: 'Video Player Section',
  description: 'A simple block for embedding a video player with a caption.',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'videoID',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'caption',
      type: 'string',
    }),
  ],
})
