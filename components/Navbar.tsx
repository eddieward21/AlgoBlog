import React from 'react'
import Link from "next/link"
import Image from 'next/image'
import Login from './Login'
import Search from './Search'


const Navbar = () => {
  return (
    <nav className = "flex flex-col text-white font-bold pl-4 pr-6 py-3 col-span-3 bg-black justify-between items-center h-screen py-10 border-r border-white-100">
      <h1 className = "text-xl">AlgoBlog</h1>
      <Link href = "">Home</Link>

      <Search/>
      <Link href = "">Notifications</Link>
      <Link href = "">Create</Link>
      <Link href = "">Profile</Link>


    </nav>
  )
}

export default Navbar