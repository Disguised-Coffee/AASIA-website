import { defineArrayMember, defineField, defineType } from "sanity";

export const evoPage = defineType({
    name: "evoPage",
    title: "EVO Page",
    type: "document",

    fields: [
        defineField({ name: 'title', type: 'string', title: 'Page Title' }),
    defineField({
      name: "content",
      type: "pageBuilder",
    }),
    ]
});
