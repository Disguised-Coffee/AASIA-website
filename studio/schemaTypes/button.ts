import { defineType, defineField } from 'sanity'


// replace with actual variations
const variations = [
  { value: 'default', title: 'Default' },
  { value: 'secondary', title: 'Secondary' },
  { value: 'outline', title: 'Outline' },
  { value: 'ghost', title: 'Ghost' },
  { value: 'link', title: 'Link' },
]

export default defineType({
  name: 'button',
  type: 'object',
  title: 'Button',
  fields: [
    defineField({ name: 'text', type: 'string', title: 'Text' }),
    defineField({ name: 'link', type: 'url', title: 'Link', validation: (Rule) => Rule.uri({ allowRelative: true }) }),
    defineField({ name: 'variant', type: 'string', title: 'Variant', options: { list: variations } }),
  ],
})
