import { defineType, defineField, defineArrayMember } from 'sanity'
import { BlockContentIcon } from "@sanity/icons";


export default defineType({
    name: 'faq',
    type: 'object',
    title: 'FAQ section',
    fields: [
        defineField({ name: 'title', type: 'string', title: 'Title', validation: (Rule) => Rule.required().max(100) }),
        defineField({
            name: 'faqBlock',
            type: 'object',
            title: 'FAQ Block',
            fields: [
                defineField({
                    name: 'question',
                    type: 'text',
                    title: 'Question',
                }),
                defineField({
                    name: 'answer',
                    type: 'blockContent',
                    title: 'Answer',
                })
            ]
        }),
        // buttons.
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
})