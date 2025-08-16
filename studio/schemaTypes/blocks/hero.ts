import { defineType, defineField } from 'sanity'
import { BlockContentIcon } from "@sanity/icons";


export default defineType({
  name: 'hero',
  type: 'object',
  title: 'Hero Section',
  fields: [
    defineField({ name: 'variation', type: 'string', title: 'Variation' }),
    defineField({ name: 'title', type: 'string', title: 'Title' }),
    defineField({ name: 'subtitle', type: 'string', title: 'Subtitle' }),
    defineField({ name: 'backgroundImage', type: 'image', title: 'Background Image' }),
  ],
  icon: BlockContentIcon,
})