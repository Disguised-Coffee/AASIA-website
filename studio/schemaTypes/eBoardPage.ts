import { defineArrayMember, defineType } from "sanity";

export const eboardSection = defineType({
    name: "eBoardPage",
    title: "E-Board Page",
    type: "document",
    
    fields: [
        // {
        //     name: "title",
        //     title: "Title",
        //     description: "Unintended namespace",
        //     type: "string",
        //     validation: (Rule) => Rule.required()
        // },
        {
            name: "caption",
            title: "Caption",
            type: "string",
            validation: (Rule) => Rule.required()
        },
        {
            name: "title",
            title: "Title",
            type: "text",
            validation: (Rule) => Rule.required()
        },
        {
            name: "eBoardCards",
            title: "E-Board Cards",
            type: "array",
            of: [defineArrayMember({
                type: "reference",
                to: [{ type: "eboardCardSchema" }],
            })]
        }
    ]
});

export const eBoardCardSchema = defineType({
    name: "eboardCardSchema",
    title: "E-Board Card",
    description: "Schema for an individual E-Board card",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Text",
            type: "string",
            validation: (Rule) => Rule.required()
        },
        {
            name: "pronouns",
            title: "Pronouns",
            type: "string",
        },
        {
            name: "position",
            title: "Position",
            type: "string",
            validation: (Rule) => Rule.required()
        },
        {
            name: "year",
            title: "Year",
            type: "string",
            validation: (Rule) => Rule.required()
        },
        {
            name: "major",
            title: "Major",
            type: "string",
            validation: (Rule) => Rule.required()
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true
            },
            fields: [
                {
                    name: "alt",
                    title: "Alt Text",
                    type: "string",
                    validation: (Rule) => Rule.required()
                }
            ],
        },
    ]
})