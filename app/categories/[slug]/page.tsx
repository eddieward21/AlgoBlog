import { groq } from 'next-sanity'
import React from 'react'
import client from '../../../utils/client'
import Image from 'next/image'
import urlFor from '../../../utils/urlFor'
import Link from 'next/link'

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
  *[_type == "post"] {
    ...,
  }
`
const posts = await client.fetch(postsQuery, {slug})
const category = await client.fetch(query, {slug})

console.log(slug)
console.log(JSON.stringify(posts))

const categoryPosts = posts.filter((post:any) => 
  post.categories.toLowerCase().includes(slug.toLowerCase()
  )
)

  return (
<div className = "h-screen w-screen bg-black text-white"> 
<div className="container mx-auto py-8">
  <h1 className="text-3xl font-bold mb-4"><Link className = "text-xs font-light mr-8 px-2 py-1 rounded-full bg-white text-black" href = "/">Back</Link>{category.title} Problems</h1>
  <div className="grid sm:grid-cols-3 grid-cols-1 gap-4">

  {posts.map((post:any) => 
    <div className="bg-gray-900 shadow rounded-lg p-6">
      
      
      <h2 className="text-lg font-medium mb-2">{post.title}</h2>
      <p className="text-gray-100">{post.body}</p>
      <p className="text-white font-medium mt-2">{post.difficulty}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">View</button>
    </div>
    )}


  </div>
  </div>
  </div>
  )
}

export default Page