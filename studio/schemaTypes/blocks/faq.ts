import { defineType, defineField, defineArrayMember } from 'sanity'
import { BlockContentIcon } from "@sanity/icons";


export default defineType({
    name: 'faq',
    type: 'object',
    title: 'FAQ section',
    fields: [
        defineField({ name: 'title', type: 'string', title: 'Title', validation: (Rule) => Rule.required().max(100) }),
        defineField({
            name: 'faqSection',
            type: 'array',
            title: 'FAQ Block',
            of: [defineArrayMember({
                type: 'object',
                fields: [
                    defineField({ name: 'question', type: 'text', title: 'Question' }),
                    defineField({ name: 'answer', type: 'blockContent', title: 'Answer' }),
                ]
            }),]
        }),
    ],
    icon: BlockContentIcon,
})