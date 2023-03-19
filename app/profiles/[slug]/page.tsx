import React, {useEffect, useState} from 'react'
import { useRouter } from 'next/navigation'
import { groq } from 'next-sanity'
import client from '../../../utils/client'
import Image from 'next/image'
import urlFor from '../../../utils/urlFor'
import author from '../../../schemas/author'
import Navbar from '../../../components/Navbar'
import Link from 'next/link'
import { ArrowLeftCircleIcon } from '@heroicons/react/24/solid'
import moment from 'moment'

type Props = {
  params: {
    slug: string;
  },
  friend: Author
}
async function Page({params: {slug}}: Props){
  //const [user, setUser] = useState([])
  const query = groq`
    *[_type=='author' && slug.current == $slug][0] {
      friends[]->,
  ...,

}`
  const profile = await client.fetch(query, {slug: slug})
  console.log(slug)
  console.log(profile)

  const q = groq`*[_type=='category'] {

    ...,
  }
  `
//const categories = await client.fetch(q)

  const user = typeof window !== 'undefined' ? localStorage.getItem('user') : null


  return (


<div className="bg-black min-h-screen w-full">
<Link href = "/" className = "text-white flex items-center"><ArrowLeftCircleIcon className = "text-white" height={40} width={40}/>Back</Link>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="py-12">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image className="h-12 w-12 rounded-full"width={20} height = {20} src="https://via.placeholder.com/150" alt=""></Image>
            <div className="ml-4">
              <h1 className="text-3xl font-bold text-white">{profile.name}</h1>
              <p className="text-gray-500">{profile.email}</p>
            </div>
          </div>
          {user ? 
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">Follow</button>
          :
          <Link href = "/auth/login" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">Follow</Link>
          }
        </div>
        <div className="mt-8">
          <div className="flex items-center">
            <span className="text-gray-500 mr-2">Joined:</span>
            <span className="text-white">{moment(profile._createdAt).fromNow()}</span>
          </div>
          <div className="flex items-center mt-4">
            <span className="text-gray-500 mr-2">Location:</span>
            <span className="text-white">New York City</span>
          </div>
          <div className="flex items-center mt-4">
            <span className="text-gray-500 mr-2">Website:</span>
            <a href="#" className="text-blue-500 hover:underline">johndoe.com</a>
          </div>
          <div className="flex items-center mt-4">
            <span className="text-gray-500 mr-2">Bio:</span>
            <p className="text-white">{JSON.stringify(profile.bio)}</p>
          </div>
        </div>
        <div className="mt-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-white">Posts</h2>
            <a href="#" className="text-blue-500 hover:underline">See all</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <Image className="w-full h-48 object-cover" width={20} height = {20} src="https://via.placeholder.com/500x300" alt="">
                </Image>
              <div className="p-4">
                <h3 className="font-bold text-white text-xl mb-2">Post Title</h3>
                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae urna quis mauris consectetur placerat eu euismod neque.</p>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <Image className="w-full h-48 object-cover" width={20} height = {20} src="https://via.placeholder.com/500x300" alt=""></Image>
              <div className="p-4">
                <h3 className="font-bold text-white text-xl mb-2">Post Title</h3>
                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae urna</p>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>



                


  )
}

export default Page