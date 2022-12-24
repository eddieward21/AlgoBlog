import React from 'react'
import Link from "next/link"
import Image from 'next/image'
import Login from './Login'
import Search from './Search'
import { HeartIcon, PlusCircleIcon, UserCircleIcon, HomeIcon } from '@heroicons/react/24/outline'


const Navbar = () => {
  return (
    <nav className = "flex flex-col text-white font-bold py-3 col-span-3 bg-black pl-5 w-full pr-10 h-screen py-10 border-r border-white-100 h-screen sticky top-0">
      <div className="w-full h-full position:fixed left-0 top-0">
      <h1 className = "text-xl ml-5">AlgoBlog</h1>
      <Link className = " mt-5 flex flex-row items-center hover:bg-white hover:text-black px-5 h-10 rounded-full hover:shadow-lg"href = ""><HomeIcon className = "mr-5"height={25} width={25}/> Home</Link>

      <Search/>
      <Link className = " mt-5 flex flex-row items-center hover:bg-white hover:text-black px-5 h-10 rounded-full hover:shadow-lg"href = ""><HeartIcon className = "mr-5"height={25} width={25}/> Notifications</Link>
      <Link className = " mt-5 flex flex-row items-center hover:bg-white hover:text-black px-5 h-10 rounded-full hover:shadow-lg"href = ""><PlusCircleIcon className = "mr-5"height={25} width={25}/> Create</Link>
      <Link className = " mt-5 flex flex-row items-center hover:bg-white hover:text-black px-5 h-10 rounded-full hover:shadow-lg"href = ""><UserCircleIcon className = "mr-5"height={25} width={25}/> Profile</Link>


      </div>

    </nav>
  )
}

export default Navbar