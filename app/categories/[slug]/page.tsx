import { groq } from 'next-sanity'
import React from 'react'
import client from '../../../utils/client'

type Props = {
  params: {
    slug: string
  }
}
async function Page({params: {slug}}: Props) {
  const query = groq`
  *[_type=='category' && title == $slug][0] {
    ...,

}`

const postsQuery = groq`
  *[_type == "post" ] {
    ...,
  }
`
const posts = await client.fetch(postsQuery, {slug})
const category = await client.fetch(query, {slug: slug})
console.log(slug)
console.log(JSON.stringify(posts))

  return (
    <div>
      category {slug}
      <h1>{category.description}</h1>

      <hr />
      <h1>Posts for this category(currently not working): </h1>
      {posts.map((post:any) => 
      <h1>{post.title}</h1>
      )}

    </div>
  )
}

export default Page