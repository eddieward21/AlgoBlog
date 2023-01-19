import React from 'react'
import { useRouter } from 'next/navigation'
import { groq } from 'next-sanity'
import client from '../../../utils/client'
import Image from 'next/image'
import urlFor from '../../../utils/urlFor'
import author from '../../../schemas/author'

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
      <div className="bg-gray-100 p-6 rounded-lg flex flex-col items-center justify-center ">
  <Image src={urlFor(profile.image).url()} width={100}height={50} alt="User Profile Picture" className=" object-cover w-32 h-32 rounded-full mx-auto mb-4"/>
  <h1 className="text-2xl text-center font-medium">{profile.name}</h1>
  <div className="text-center text-gray-600 mb-4">@{profile.name}</div>
  <div className="mb-4 flex flex-col items-center justify-center">
    <p className="text-lg font-medium mr-2">Bio:   </p>
    <span className="text-gray-600 text-center">{JSON.stringify(profile.bio)}</span>
  </div>
  <div className="flex items-center justify-center">
    <div className="text-center mr-4">
    <div className="text-2xl font-medium">50</div>

      <div className="text-lg font-medium">Post</div>
    </div>
    <div className="text-center">
    <div className="text-2xl font-medium">200</div>

      <div className="text-lg font-medium">Followers</div>
    </div>
  </div>
  <p className='mt-3'>  {profile._createdAt}
</p>
</div>
</div>

  )
}

export default Page