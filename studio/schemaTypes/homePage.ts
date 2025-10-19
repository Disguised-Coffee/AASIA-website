import { defineField, defineType } from "sanity";
import { HomeIcon } from "@sanity/icons";

export default defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  description: "The main landing page of the site. The 'Slug' form can be ignored",
  icon: HomeIcon,
  fields: [
    // we can't make variations :C
    defineField({ name: 'title', type: 'string', title: 'Page Title' }),
    defineField({
      name: "content",
      type: "pageBuilder",
    }),
  ],
  // preview: {
  //   prepare() {
  //     return {
  //       title: "Home Page",
  //     };
  //   },
  // },
});
