import { defineField, defineType } from "sanity";
import { ControlsIcon } from "@sanity/icons";

export const siteSettingsType = defineType({
  name: "siteSettings",
  description: "Settings for the site layout, including header, footer, and other global elements.",
  title: "Site Settings",
  type: "document",
  groups: [
    {
      name: "header",
      title: "Header",
    },
    {
      name: "footer",
      title: "Footer",
    },
  ],
  icon: ControlsIcon,
  fields: [
    // Header
    defineField({
      name: "headerLogo",
      title: "Header Logo",
      description: "Logo displayed in the header. Can have more than 1 image present.",
      type: "array",
      of: [{ type: "image", fields: [{ name: "alt", type: "string", title: "Alt text", validation: (Rule) => Rule.required() }] }],
      group: "header",
    }),
    defineField({
      name: "headerLinks",
      title: "Header Navigation Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", type: "string", title: "Label" },
            { name: "href", type: "string", title: "URL" },
          ],
        },
      ],
      group: "header",
    }),
    defineField({
        name: "galleryDropdown",
        title: "Gallery Dropdown",
        type: "array",
        of: [
            {
                type: "object",
                fields: [
                    { name: "label", type: "string", title: "Label" },
                    { name: "href", type: "string", title: "URL" },
                ],
            },
        ],
        group: "header",
    }),
    // defineField({
    //   name: "headerAnnouncement",
    //   title: "Header Announcement",
    //   type: "string",
    //   description: "Optional announcement text displayed in the header.",
    //   group: "header",
    // }),
    // Footer
    defineField({
      name: "footerLogo",
      title: "Footer Logo",
      type: "image",
      group: "footer",
    }),
    defineField({
      name: "footerLinks",
      title: "Footer Navigation Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", type: "string", title: "Label" },
            { name: "href", type: "string", title: "URL" },
          ],
        },
      ],
      group: "footer",
    }),
    defineField({
      name: "socialLinks",
      title: "Social Media Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "platform", type: "string", title: "Platform" },
            { name: "url", type: "string", title: "URL" },
            { name: "icon", type: "string", title: "Icon Name (optional)" },
          ],
        },
      ],
      group: "footer",
    }),
    // Add more fields as needed (e.g., copyright, announcement bar, etc.)
  ],
  preview: {
    prepare() {
      return {
        title: "Site Settings",
      };
    },
  },
});