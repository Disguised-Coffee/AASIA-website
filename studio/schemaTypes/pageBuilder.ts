import { defineType, defineField, defineArrayMember } from 'sanity'

import { DocumentSheetIcon } from '@sanity/icons'

export default defineType({
    name: 'pageBuilder',
    type: 'array',
    of: [
        defineArrayMember({ type: 'hero' }),
        defineArrayMember({ type: 'splitImage' }),
        defineArrayMember({ type: 'faq' }),
        defineArrayMember({ type: 'feature' }),
        defineArrayMember({ type: 'gallerySection' }),
        defineArrayMember({ type: 'videoSection' }),
        // { type: 'gallery' },
        // { type: 'faq' },
        // ...add other blocks here
    ],
})