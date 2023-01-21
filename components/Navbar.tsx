'use client'

import React, { useEffect, useState } from 'react'
import Link from "next/link"
import Image from 'next/image'
import Login from './Login'
import Search from './Search'
import { HeartIcon, PlusCircleIcon, UserCircleIcon, HomeIcon, XMarkIcon } from '@heroicons/react/24/outline'
import {PlusIcon } from '@heroicons/react/24/solid'
import Modal from './Modal'
import addPost from './Post'
import {SubmitHandler, useForm} from 'react-hook-form'
import client from '../utils/client'


interface IFormInput {
  _id: string
  title: string
  body: string
  hint: string
  approach: string
  solution: string
  category: string
}
type Props = {
  categories: Category[]
}

const Navbar = ({categories}: Props) => {
  /*
  const deleteRes =  fetch('api/posts/deletePost')
  .then(() => console.log("success"))
  .catch((error) => console.log(error))
  */

  const { register, handleSubmit, formState:{errors} } = useForm<IFormInput>();

  
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }
  }, [showModal]);

  const showPostModal = () => {
    setShowModal(!showModal)      
    console.log(showModal)
  }
  const hidePostModal = () => {
    setShowModal(false)      
    console.log(showModal)
  }
  const onSubmit:SubmitHandler<IFormInput> = async(data) => {
    //create a fetch method takes in two parameters: the api route and data
    //pass in JSON.stringify body
    //method : "POST"
    setShowModal(false);
    const res = await fetch('api/posts/addPost', {
      method: "POST",
      body: JSON.stringify(data)
    }).then(() => console.log("success!", data))
    .catch((error) => console.log(error))
    console.log("Modal Closed?")
  }

  
  return (
    <nav className = "flex flex-col h-screen text-white font-bold py-3 col-span-3 bg-black pl-5 w-full pr-10 py-10 border-r-2 sticky top-0 border-r border-gray-500">
      {showModal && (
        <div className="fixed inset-0 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#xA0;
          <div className="z-50 inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
            <div className='w-full text-black flex flex-row'><p className='ml-auto'><XMarkIcon onClick={hidePostModal} className = "cursor-pointer hover:text-gray" height={20} width={20}/></p></div>
            <div>
              <div className = "">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-black">
                <PlusIcon className='' height={30} width={30}/>
                </div>
                <div className="mt-3 text-center sm:mt-5">
                  <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                    Add New Problem
                  </h3>
                  <form onSubmit={handleSubmit(onSubmit)} className="mt-2">
                    <input {...register("title", {required:true})} type="text" placeholder="Problem Name" className="w-full px-3 py-2 rounded-md text-gray-700 bg-gray-200 placeholder-gray-500 focus:outline-none focus:bg-white focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out mb-2" />
                    <input {...register("body", {required:true})} type="text" placeholder="Description" className="w-full px-3 py-2 rounded-md text-gray-700 bg-gray-200 placeholder-gray-500 focus:outline-none focus:bg-white focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out mb-2" />
                    <select {...register("category", {required:true})} name="" placeholder='Category' id="" className="w-full px-3 py-2 rounded-md text-gray-700 bg-gray-200 placeholder-gray-500 focus:outline-none focus:bg-white focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out mb-2">
                      {categories.map((category) =>
                      <option value={category._id}>{category.title}</option>
                      )}
                    </select>
                    <input {...register("hint", {required:true})} type="text" placeholder="Hint" className="w-full px-3 py-2 rounded-md text-gray-700 bg-gray-200 placeholder-gray-500 focus:outline-none focus:bg-white focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out mb-2" />
                    <input {...register("approach", {required:true})} type="text" placeholder="Approach" className="w-full px-3 py-2 rounded-md text-gray-700 bg-gray-200 placeholder-gray-500 focus:outline-none focus:bg-white focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out mb-2" />
                    <textarea {...register("solution", {required:true})}  placeholder="Solution" className="w-full px-3 py-2 rounded-md text-gray-700 bg-gray-200 placeholder-gray-500 focus:outline-none focus:bg-white focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out mb-2" />


                    {errors.title && (
                    <p className = "text-red-800 text-sm mb-2">*Please enter a title*</p>
                    )}
                 <button type = "submit" className='w-full py-2 bg-green-400'>Post</button>

                  </form>
                </div>
              </div>
              </div>
              </div>
              </div>
              </div>      
              )}
      <div className="w-full position:fixed left-0 top-0">
      <h1 className = "text-xl ml-5">AlgoBlog</h1>
      <Link className = " mt-5 flex flex-row items-center hover:bg-white hover:text-black px-5 h-10 rounded-full hover:shadow-lg"href = ""><HomeIcon className = "mr-5"height={25} width={25}/> Home</Link>

      <Search/>
      <Link className = " mt-5 flex flex-row items-center hover:bg-white hover:text-black px-5 h-10 rounded-full hover:shadow-lg"href = ""><HeartIcon className = "mr-5"height={25} width={25}/> Notifications</Link>
      <div className = "cursor-pointer mt-5 flex flex-row items-center hover:bg-white hover:text-black px-5 h-10 rounded-full hover:shadow-lg" onClick={showPostModal}><PlusCircleIcon className = "mr-5"height={25} width={25}/> Create</div>
      <Link className = " mt-5 flex flex-row items-center hover:bg-white hover:text-black px-5 h-10 rounded-full hover:shadow-lg"href = ""><UserCircleIcon className = "mr-5"height={25} width={25}/> Profile</Link>


      </div>

    </nav>
  )
}

export default Navbar