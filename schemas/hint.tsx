import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'hint',
  title: 'Hint',
  type: 'document',
  fields: [
    defineField({
      name: 'hint1',
      title: 'Hint1',
      type: 'string',
    }),
    defineField({
        name: 'hint2',
        title: 'Hint',
        type: 'string',
      }),
      defineField({
        name: 'hint3',
        title: 'Hint3',
        type: 'string',
      }),
      defineField({
        name: 'post',
        title: 'Post',
        type: 'reference',
        to: {type: 'post'},
      }),
  ],
})
