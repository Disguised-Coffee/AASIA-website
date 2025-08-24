import { defineType, defineField, defineArrayMember } from 'sanity'
import { BlockContentIcon } from "@sanity/icons";


export default defineType({
  name: 'hero',
  type: 'object',
  title: 'Hero Section',
  fields: [
    defineField({
      title: 'Variation',
      name: "variation",
      type: "string",
      options: {
        list: [
          { value: "main", title: "Main (used on home page)" },
          { value: "short", title: "Short" },
        ],
      },
      initialValue: "short",
    }),
    // TODO: Add hidden for "short", as it doesn't need certain fields []
    defineField({ name: 'title', type: 'text', title: 'Title', validation: (Rule) => Rule.required().max(100) }),
    // defineField({ name: 'subtitle', type: 'text', title: 'Subtitle', validation: (Rule) => Rule.required().max(100) }),
    defineField({ name: 'description', type: 'text', title: 'Description', validation: (Rule) => Rule.required().max(500) }),
    defineField({
      name: 'backgroundImage', type: 'image', title: 'Background Image', options: {
        hotspot: true,
      }, fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          validation: rule => rule.custom((value, context) => {
            const parent = context?.parent as { asset?: { _ref?: string } }

            return !value && parent?.asset?._ref ? 'Alt text is required when an image is present' : true
          }),
        })
      ]
    }),
    defineField({ name: 'igPostID', type: 'string', title: 'Instagram post ID' }),

    // buttons.
    defineField({
      name: 'buttons',
      type: 'array',
      title: 'Buttons',
      of: [
        defineArrayMember({ type: 'button' })
      ],
    }),

  ],
  icon: BlockContentIcon,
})