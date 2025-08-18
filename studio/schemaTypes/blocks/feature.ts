import { defineArrayMember, defineField, defineType } from "sanity";
import { BlockContentIcon } from "@sanity/icons";

export default defineType({
  name: "splitImage",
  type: "object",
  title: "Split Image Section",
  fields: [
    defineField({
      name: "orientation",
      title: "Text/UI orientation",
      description: "Point of reference is from desktop view. See documentation for more details.",
      type: "string",
      options: {
        list: [
          { title: "Bottom", value: "bottom" },
          { title: "Left", value: "left" },
          { title: "Right", value: "right" },
        ],
      },

    }),
    defineField({
      name: "title",
      type: "string",
    }),
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
    defineField({
      name: "text",
      type: "blockContent",
    }),
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