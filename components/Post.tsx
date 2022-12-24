import React from 'react'
import Image from 'next/image'
import urlFor from '../utils/urlFor'
import {HandThumbUpIcon, ChatBubbleBottomCenterTextIcon, EllipsisHorizontalIcon} from '@heroicons/react/24/outline'
import Link from 'next/link'

type Props = {
    post: Post
}
const Post = ({post} : Props) => {

  return (
    <div className="text-white relative p-6 rounded-lg shadow-md bg-black border border-white mt-5 mb-5">
              <div className="flex items-center mb-5">
        <Link href = ""><img src = {urlFor(post.author.image).url()} alt="Profile image" className="w-10 h-10 rounded-full object-cover hover:opacity-75 border border-[#fffafb]" /></Link>
        <div className="ml-4 flex flex-col">
            <Link href = ""className = "font-semibold text-sm text-white hover:text-[#7de2d1]">{post.author.name}</Link> 
            <h1 className='text-xs'>{post.categories.map((category) => 
            <span><Link className = "hover:text-[#339989]" href = "">{category.title}</Link> &#8226; </span>
            )}
            </h1>
            </div>
            <div className = "ml-auto hover:cursor-pointer"><EllipsisHorizontalIcon fontWeight={100} height={30} width={30}/></div>

      </div>
    <div className="relative rounded-t-lg overflow-hidden">
      <img src = {urlFor(post.mainImage).url()} alt="Post image" className="w-full h-full object-cover" />
    </div>
    <div className="p-6">

      <div className="mt-2 flex flex-row font-medium text-white text-gray-800 leading-relaxed">
          <h4 className = "text-white text-sm font-bold mr-5">{post.author.name}</h4>
       <h6 className = "text-white text-sm">{post.title}</h6>
      </div>
      <div className="mt-6 flex items-center">
        <div className="mr-6 text-gray-600 text-sm">
          <HandThumbUpIcon/> 123
        </div>
        <div className="text-gray-600 text-sm">
        <ChatBubbleBottomCenterTextIcon/> 456
        </div>
      </div>
    </div>
  </div>
  )
}

export default Post