'use client'

import React, { useState } from 'react'
import Link from "next/link"
import Image from 'next/image'
import Login from './Login'
import Search from './Search'
import { HeartIcon, PlusCircleIcon, UserCircleIcon, HomeIcon } from '@heroicons/react/24/outline'
import Modal from './Modal'
import addPost from './Post'


const Navbar = () => {
  const [showModal, setShowModal] = useState(false)

  const showPostModal = () => {
    setShowModal(!showModal)
    console.log(showModal)
  }
  return (
    <nav className = "flex flex-col h-screen text-white font-bold py-3 col-span-3 bg-black pl-5 w-full pr-10 py-10 border-r-2 sticky top-0 border-r border-gray-500">
      {showModal && (
        <div className = "fixed top-0 left-0 h-screen w-screen bg-white opacity-100 z-50"></div>
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