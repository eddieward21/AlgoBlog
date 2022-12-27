import React from 'react'
import { useRouter } from 'next/navigation'
import { groq } from 'next-sanity'
import client from '../../../utils/client'

type Props = {
  params: {
    slug: string;
  },
  friend: Author
}
async function Page({params: {slug}}: Props){
  const query = groq`
    *[_type=='author' && slug.current == $slug][0] {
      friends[]->,
  ...,

}`
  const profile = await client.fetch(query, {slug: slug})
  console.log(slug)
  console.log(profile)

  return (
    <div>
      <h1>profile name</h1>
      <h1>{slug}</h1>
      {profile.name}
      {profile._createdAt}
      

       </div>
  )
}

export default Page