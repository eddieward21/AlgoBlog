'use client'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import urlFor from '../utils/urlFor'
import {HandThumbUpIcon, XMarkIcon ,ChatBubbleBottomCenterIcon, BookmarkIcon,EllipsisHorizontalIcon} from '@heroicons/react/24/outline'
import {ChevronDownIcon, ChevronUpIcon} from '@heroicons/react/24/solid'
import Link from 'next/link'
import client from '../utils/client'
import { groq } from 'next-sanity'
import Modal from './Modal'
import {SubmitHandler, useForm} from 'react-hook-form'

type Props = {
    post: Post
}
interface IFormInput {
  _id: string
  title: string
  body: string
  hint: string
  approach: string
  solution: string
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

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  function deleteModalShow() {
    setShowDeleteModal(!false);
  }

  const [showEditModal, setShowEditModal] = useState(false)
  function editModalShow() {
    setShowEditModal(!false);
  }
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
  const { register, handleSubmit, formState:{errors} } = useForm<IFormInput>();

  const onSubmit:SubmitHandler<IFormInput> = async(data) => {
    //create a fetch method takes in two parameters: the api route and data
    //pass in JSON.stringify body
    //method : "POST"
    setShowEditModal(false);
    const res = await fetch('api/posts/editPost', {
      method: "POST",
      body: JSON.stringify(data)
    }).then(() => console.log("success!", data))
    .catch((error) => console.log(error))
    console.log("Modal Closed?")
  }
  const user = typeof window !== 'undefined' ? localStorage.getItem('user') : null



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
    {user && 
    <div onClick = {popupShow} className = "ml-auto hover:cursor-pointer"><EllipsisHorizontalIcon fontWeight={100} height={30} width={30}/></div>
 }
      {showPopup && (
        <div className="fixed top-0 bg-gray-500 bg-opacity-90 left-0 h-full w-full flex items-center justify-center">
          <div className="flex flex-col bg-white shadow-lg w-1/3 rounded">
          <button onClick = {editModalShow} className="border-b font-bold border-gray-500 px-4 w-full text-green-700 py-4">Edit</button>
            {showEditModal && (
                  <div className="fixed top-0 bg-transparent left-0 h-full w-full flex items-center justify-center">
                <div className="flex flex-col bg-white shadow-lg w-1/3 h-4/6 py-2 rounded">

            <form action="" onSubmit={handleSubmit(onSubmit)} className = "flex flex-col w-full px-2 h-full justify-between	">
              <div className = "text-black py-2 flex w-full"><button className = "mr-auto" onClick = {editModalShow}>Cancel</button><button onClick= {editModalShow} className = "text-black font-bold cursor-pointer ml-auto">Done</button></div>
              <h1 className = "text-xl mb-2 font-bold text-center text-black">Edit Post</h1>
              <input className = "text-black" type="text" defaultValue = {post._id} {...register("_id", {required:true})}/>
              <input {...register("title", {required:true})} className= "px-2 py-1 text-black mb-2 border border-gray-500 rounded" defaultValue = {post.title}  type="text" />
              <input  {...register("body", {required:true})} className= "px-2 py-1 text-black mb-2 border border-gray-500 rounded" defaultValue= {post.body} placeholder={post.body} type="text" />
              <input  {...register("hint", {required:true})} className= "px-2 py-1 text-black mb-2 border border-gray-500 rounded" defaultValue = {post.hint} placeholder={post.hint} type="text" />
              <input  {...register("approach", {required:true})} className= "px-2 py-1 text-black mb-2 border border-gray-500 rounded" defaultValue = {post.approach} placeholder={post.approach} type="text" />
              <textarea  {...register("solution", {required:true})} className = "px-2 py-1 text-black mb-2 border border-gray-500 rounded" cols={3} rows={4} defaultValue = {post.solution} placeholder={post.solution} />
              {errors && (
                <span className = "my-2 text-center text-red-500">ERRROR</span>
              )}
              <button type = "submit" className = "rounded bg-green-400 text-white w-full py-2">Confirm</button>

            </form>
            </div>
            </div>
            )}
            <button className="border-b border-gray-500 font-bold px-4 w-full text-red-600 py-4" onClick={deleteModalShow}>Delete</button>
            {showDeleteModal && (
                  <div className="fixed top-0 bg-transparent left-0 h-full w-full flex items-center justify-center">
                <div className="flex flex-col bg-white shadow-lg w-1/3 rounded">
            <form action="" className = "flex flex-col w-full h-full">
                <div className = "flex flex-col items-center text-black h-full w-full">
                  <h1 className = "mb-2 mt-5 text-xl font-bold ">Delete Post?</h1>
                  <p className = "mb-5">Are you sure you want to delete this post?</p>
                  <div className = "font-bold text-red-500 w-full py-3 border-t border-b border-gray-500 border-t border-gray-500 flex items-center justify-center cursor-pointer" onClick={
                    async(data) => {
                    setShowEditModal(false);
                    setShowDeleteModal(false);
                    const res = await fetch('api/posts/deletePost', {
                    method: "POST",
                    body: JSON.stringify(post._id)
                  }).then(() => console.log("success!", data))
                  .catch((error) => console.log(error))}}>
                    Delete</div>
                  <button className = "w-full py-3 border-b border-gray-500 border-gray-500 flex items-center justify-center" onClick = {deleteModalShow}>Cancel</button>
                </div>
            </form>
            </div>
            </div>
            )}
            <button className="text-gray-700 font-bold py-4 px-4 w-full float-right" onClick={popupShow}>Close</button>

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