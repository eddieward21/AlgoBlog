import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    defineField({
      name: 'body',
      title: 'Body',
      type: 'string',
    }),
    defineField({
        name: 'author',
        title: 'Author',
        type: 'reference',
        to: {type: 'author'},
      }),

  ],
})
