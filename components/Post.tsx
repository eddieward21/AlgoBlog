
import React from 'react'
import Image from 'next/image'
import urlFor from '../utils/urlFor'
import {HandThumbUpIcon, ChatBubbleBottomCenterTextIcon, BookmarkIcon,EllipsisHorizontalIcon} from '@heroicons/react/24/outline'
import Link from 'next/link'
import client from '../utils/client'
import { groq } from 'next-sanity'
import Modal from './Modal'


type Props = {
    post: Post
    body: Block[]
}
async function Post({post} : Props) {
  
  const query = groq`*[_type=='category'] {
    ...,
  }
  `
const categories = await client.fetch(query)

async function addPost() {
  const mutations = [{
    createOrReplace: {
      _type: '"POST',
      title: 'Something',
      categories: {
        _type: "reference",
        _ref: "abc123"      
      },
      author: {
        _ref: "someID"
      }   
      },
  }]
  fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`, {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${process.env.TOKEN}`
    },
    body: JSON.stringify({mutations})
  })
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.error(error))
}

  return (
    <div className="z-0 text-white relative py-6 rounded-lg bg-black mt-5 mb-5 border border-gray-500">
              <div className=" px-3 flex items-center mb-5">
        <Link href = {`/profiles/${post.author.slug.current}`}><img src = {urlFor(post.author.image).url()} alt="Profile image" className="w-10 h-10 rounded-full object-cover hover:opacity-75 border border-[#fffafb]" /></Link>
        <div className="ml-4 flex flex-col">
            <Link href = {`/profiles/${post.author.slug.current}`} className = "font-semibold text-sm text-white hover:text-[#7de2d1]">{post.author.name}</Link> 
            <h1 className='text-xs'>{post.categories.map((category) => 
            <span><Link className = "hover:text-[#339989]" href = {`/categories/${category.title}`}>{category.title}</Link> &#8226; </span>
            )}
            </h1>
            </div>
            <div className = "ml-auto hover:cursor-pointer"><EllipsisHorizontalIcon fontWeight={100} height={30} width={30}/></div>

      </div>
    <div className="relative rounded-t-lg overflow-hidden">
      <img src = {urlFor(post.mainImage).url()} alt="Post image" className="w-full h-full object-cover" />
    </div>
    <div className="px-3 ">
    <div className="flex flex-row w-full h-10 mt-2 flex items-center">

    <div className="mr-6 text-white-600 text-sm">
          <HandThumbUpIcon height={30} width={30}/>  
        </div>
        <Link href={`/posts/${encodeURIComponent(post.slug.current)}`}  className="text-white-600 text-sm">
        <ChatBubbleBottomCenterTextIcon className = "hover:text-gray"height={30} width={30}/> 
        </Link>

        <div className="ml-auto text-white-600 text-sm">
        <BookmarkIcon height={30} width={30}/> 
        </div>
      </div>
      <div className = "mt-5 flex flex-row text-sm font-bold">112 Likes</div>

      <div className="mt-5 flex flex-row font-medium text-white text-gray-800 leading-relaxed">
          <h4 className = "text-white text-sm font-bold mr-5">{post.author.slug.current}</h4>
       <h6 className = "text-white text-sm">{post.title}</h6>
       <h6 className = "text-white text-sm">{post.description}</h6>



      </div>

    </div>
  </div>
  )
}

export default Post