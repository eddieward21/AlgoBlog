'use client'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import urlFor from '../utils/urlFor'
import {HandThumbUpIcon, ChatBubbleBottomCenterIcon, BookmarkIcon,EllipsisHorizontalIcon} from '@heroicons/react/24/outline'
import {ChevronDownIcon, ChevronUpIcon} from '@heroicons/react/24/solid'
import Link from 'next/link'
import client from '../utils/client'
import { groq } from 'next-sanity'
import Modal from './Modal'

type Props = {
    post: Post
    body: string
}


 function Post({post} : Props) {



  const [showPopup, setShowPopup] = useState(false)
  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }
  }, [showPopup]);
  const [showHint, setShowHint] = useState(true)
  const [showApproach, setShowApproach] = useState(true)
  const [showSolution, setShowSolution] = useState(true)

  function popupShow() {
    setShowPopup(!showPopup)
    console.log(showPopup)
  }

  function hintShow() {
    setShowHint(!showHint)
    console.log(showHint)
  }
  function approachShow() {
    setShowApproach(!showApproach)
  }
  function solutionShow() {
    setShowSolution(!showSolution)
  }

  return (
      <div className="text-white py-6 rounded-lg bg-black mt-5 mb-5 border border-gray-500">
      <div className=" px-3 flex items-center mb-5">
<Link href = {`/profiles/${post.author.slug.current}`}><img src = {urlFor(post.author.image).url()} alt="Profile image" className="w-10 h-10 rounded-full object-cover hover:opacity-75 border border-[#fffafb]" /></Link>
<div className="ml-4 flex flex-col">
    <Link href = {`/profiles/${post.author.slug.current}`} className = "font-semibold text-sm text-white hover:text-[#7de2d1]">{post.author.name}</Link> 
    <h1 className='text-xs'>{post.categories.map((category) => 
    <span><Link className = "hover:text-[#339989]" href = {`/categories/${category.title}`}>{category.title}</Link> &#8226; </span>
    )}
    </h1>
    </div>
    <div onClick = {popupShow} className = "ml-auto hover:cursor-pointer"><EllipsisHorizontalIcon fontWeight={100} height={30} width={30}/></div>
      {showPopup && (
        <div className="fixed top-0 bg-gray-200 bg-opacity-90 left-0 h-full w-full flex items-center justify-center">
          <div className="flex flex-col bg-white shadow-lg w-96">
          <button className="text-black border-b font-bold border-gray-500 py-2 px-4 w-full ">Edit</button>
            <button className="text-black border-b border-gray-500 font-bold py-2 px-4 w-full ">Delete</button>
            <button className="text-red-500 font-bold py-2 px-4 w-full float-right" onClick={popupShow}>Close</button>

          </div>
        </div>
      )}
</div>

<div className="px-3 w-full">

<div className="flex flex-row font-medium text-white text-gray-800 leading-relaxed w-full">
      <div className='w-full'> 
<h6 className = "text-white text-xl font-bold capitalize">{post.title}</h6>
<h6 className = "text-gray-400 text-md">{post.body}</h6>

<div className = "text-white my-2 text-sm">
{
        (showHint)
          ?
          <div onClick = {hintShow}className='w-full bg-gray-900 cursor-pointer rounded px-3 py-2'>
          <div className = " flex flex-row items-center justify-between">
          <div className = "font-bold"> Show Hint</div>
           <div><ChevronDownIcon className='font-bold' height={17} width={30} /> </div>
          </div> 
          </div>
          : 
          <div onClick = {hintShow}className='w-full bg-gray-900 cursor-pointer rounded px-3 py-2'>
          <div className = " flex flex-row items-center justify-between">
          <div className = "font-bold"> Hide Hint</div>
           <div><ChevronUpIcon className='font-bold' height={17} width={30} /> </div>
          </div> 
                    <p className = "text-sm mt-3">{post.hint}</p>
          </div>


      }
</div>
<div className = "text-white my-3 text-sm">
{
        (showApproach)
          ?
          <div onClick = {approachShow}className='w-full bg-gray-900 cursor-pointer rounded px-3 py-2'>
          <div className = " flex flex-row items-center justify-between">
          <div className = "font-bold"> Show Approach</div>
           <div><ChevronDownIcon className='font-bold' height={17} width={30} /> </div>
          </div> 
          </div>
          : 
          <div onClick = {approachShow}className='w-full bg-gray-900 cursor-pointer rounded px-3 py-2'>
          <div className = " flex flex-row items-center justify-between">
          <div className = "font-bold"> Hide Approach</div>
           <div><ChevronUpIcon className='font-bold' height={17} width={30} /> </div>
          </div> 
                    <p className = "text-sm mt-3">{post.approach}</p>
          </div>


      }
</div>
<div className = "text-white my-2 text-sm">
{
        (showSolution)
          ?
          <div onClick = {solutionShow}className='w-full bg-gray-900 cursor-pointer rounded px-3 py-2'>
          <div className = " flex flex-row items-center justify-between">
          <div className = "font-bold">Show Solution</div>
           <div><ChevronDownIcon className='font-bold' height={17} width={30} /> </div>
          </div> 
          </div>
          : 
          <div onClick = {solutionShow}className='w-full bg-gray-900 cursor-pointer rounded px-3 py-2'>
          <div className = " flex flex-row items-center justify-between">
          <div className = "font-bold"> Hide Solution</div>
           <div><ChevronUpIcon className='font-bold' height={17} width={30} /> </div>
          </div> 
                    <p className = "text-sm mt-3">{post.solution}</p>
          </div>


      }
</div>

</div>


</div>
<div className="flex flex-row w-full h-10 mt-2 flex items-center">


<div className="mr-6 text-white-600 text-sm">
  <HandThumbUpIcon height={30} width={30}/>  
</div>
<Link href={`/posts/${encodeURIComponent(post.slug.current)}`}  className="text-white-600 text-sm">
<ChatBubbleBottomCenterIcon className = "hover:text-gray"height={30} width={30}/> 
</Link>

<div className="ml-auto text-white-600 text-sm">
<BookmarkIcon height={30} width={30}/> 
</div>
</div>
<div className = "mt-5 flex flex-row text-sm font-bold">112 Likes</div>
<p className = "mt-2 text-xs text-gray-400 uppercase">{moment(post._createdAt).fromNow()}</p>


</div>
</div>
  )
}

export default Post