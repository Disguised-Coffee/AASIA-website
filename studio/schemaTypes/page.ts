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
      name: "content",
      type: "pageBuilder",
    }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' } }),
  ],
})