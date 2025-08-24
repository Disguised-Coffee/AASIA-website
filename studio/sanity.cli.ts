import {defineCliConfig} from 'sanity/cli'
import { PROJECT_ID, DATASET } from './env'

export default defineCliConfig({
  api: {
    projectId: PROJECT_ID,
    dataset: DATASET
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})
