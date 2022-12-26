import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'like',
  title: 'Like',
  type: 'document',
  fields: [
    defineField({
        name: 'from',
        title: 'From',
        type: 'reference',
        to: {type: 'author'},
      }),
      defineField({
        name: 'to',
        title: 'To',
        type: 'reference',
        to: {type: 'author'},
      }),
    
    
  ],
})
