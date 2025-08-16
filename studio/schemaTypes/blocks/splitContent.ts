import { defineField, defineType } from "sanity";
import { BlockContentIcon } from "@sanity/icons";

export default defineType({
  name: "splitImage",
  type: "object",
  title: "Split Image Section",
  fields: [
    defineField({
      name: "orientation",
      type: "string",
      options: {
        list: [
          { value: "imageLeft", title: "Image Left" },
          { value: "imageRight", title: "Image Right" },
        ],
      },
    }),
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "caption",
      type: "string",
    }),
    defineField({
      name: "image",
      type: "image",
    }),
    defineField({
      name: "alt",
      type: "string",
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
    prepare({title, media}) {
      return {
        title: title,
        subtitle: "Split Image",
        media: media ?? BlockContentIcon,
      };
    },
  },
});