import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'

import { PROJECT_ID } from './env'

export default defineConfig({
  name: 'default',
  title: 'try-creating-aasia-site-INSANITY',

  projectId: PROJECT_ID,
  dataset: 'production',

  plugins: [structureTool({ structure }), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
