import { defineField, defineType } from "sanity";
import {HomeIcon} from "@sanity/icons";

export default defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  description: "The main landing page of the site. The 'Slug' form can be ignored",
  icon: HomeIcon,
  fields: [
    // reference to the page document
    defineField({
      name: "page",
      title: "Page",
      type: "reference",
      to: [{ type: "page" }],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Home Page",
      };
    },
  },
});
