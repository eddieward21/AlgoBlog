'use client'

import React, { useState } from 'react'
import Link from "next/link"
import Image from 'next/image'
import Login from './Login'
import Search from './Search'
import { HeartIcon, PlusCircleIcon, UserCircleIcon, HomeIcon, XMarkIcon } from '@heroicons/react/24/outline'
import {PlusIcon } from '@heroicons/react/24/solid'
import Modal from './Modal'
import addPost from './Post'


const Navbar = () => {
  
  const [showModal, setShowModal] = useState(false)

  const showPostModal = () => {
    setShowModal(!showModal)      
    console.log(showModal)
  }
  const hidePostModal = () => {
    setShowModal(false)      
    console.log(showModal)
  }

  const [title, setTitle] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

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
            <form className = "">
              <div className = "">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-black">
                <PlusIcon className='' height={30} width={30}/>
                </div>
                <div className="mt-3 text-center sm:mt-5">
                  <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                    Add New Problem
                  </h3>
                  <div className="mt-2">
                    <input type="text" placeholder="Title" className="w-full px-3 py-2 rounded-md text-gray-700 bg-gray-200 placeholder-gray-500 focus:outline-none focus:bg-white focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out" />
                    <input type="text" placeholder="Description" className="mt-3 w-full px-3 py-2 rounded-md text-gray-700 bg-gray-200 placeholder-gray-500 focus:outline-none focus:bg-white focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out" />
                    <input type="text" placeholder="Category" className="mt-3 w-full px-3 py-2 rounded-md text-gray-700 bg-gray-200 placeholder-gray-500 focus:outline-none focus:bg-white focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out" />
                    <input type="text" placeholder="Hint" className="mt-3 w-full px-3 py-2 rounded-md text-gray-700 bg-gray-200 placeholder-gray-500 focus:outline-none focus:bg-white focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out" />
                    <button className = "flex justify-center items-center text-black my-3"><PlusCircleIcon className='' height={20} width={20}/>Add Hint</button>
                    <button onClick={addPost} className='w-full py-2 bg-green-100'>Post</button>
                  </div>
                </div>
              </div>
              </form>
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