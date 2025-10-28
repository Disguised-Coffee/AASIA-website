import { defineField, defineType } from "sanity";
import { HomeIcon } from "@sanity/icons";

export default defineType({
  name: "faqPage",
  title: "FAQ Page",
  type: "document",
  description: "The FAQ page of the site.",
  icon: HomeIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required().max(100),
    }),

    // array of faq blocks
    defineField({
      name: "faqSections",
      type: "array",
      title: "FAQ Sections",
      of: [{ type: "faq" }],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "FAQ Page",
      };
    },
  },
});
