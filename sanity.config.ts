import {defineConfig, StudioLogo, StudioNavbar} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { myTheme } from './themes';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET


export default defineConfig({
  name: 'algoblog',
  title: 'algoblog',
  projectId:"4whsb59p",
  dataset: "production",

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
  studio: {

  },

  theme: myTheme
})
