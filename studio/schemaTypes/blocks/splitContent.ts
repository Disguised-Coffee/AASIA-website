import { defineField, defineType } from "sanity";
import { BlockContentIcon } from "@sanity/icons";

export default defineType({
  name: "splitImage",
  type: "object",
  title: "Split Image Section",
  fields: [
    defineField({
      name: "orientation",
      title: "Image on Right",
      type: "boolean",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "label",
      type: "string",
    }),
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "image",
      type: "image",
      options: {
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
        }),
        defineField({
          name: 'altImage',
          type: "image",
          title: "Alternative Image (for mobile version)",
          validation: rule => rule.custom((value, context) => {
            const parent = context?.parent as { asset?: { _ref?: string } }

            return !value && parent?.asset?._ref ? 'Alt text is required when an image is present' : true
          }),
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            }),]
        }),
      ]
    }),
    defineField({
      name: "text",
      type: "blockContent",
    }),
  ],
  icon: BlockContentIcon,
  preview: {
    select: {
      title: "title",
      media: "image",
    },
    prepare({ title, media }) {
      return {
        title: title,
        subtitle: "Split Image",
        media: media ?? BlockContentIcon,
      };
    },
  },
});