'use client'
import React from 'react'
import { useEffect, useState } from "react";
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeftCircleIcon } from '@heroicons/react/24/solid';
import moment from 'moment'

const page = () => {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
      const storedData = typeof window !== 'undefined' ? localStorage.getItem('user') : null

      //const storedData = localStorage.getItem('user');
  
      if (storedData) {
        setUser(JSON.parse(storedData)[0]);
      } else {
        logoutUser();
      }
    }, []);
    const logoutUser = () =>{
        localStorage.clear()
        window.location.href = '/auth/login';
    }

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
              <h1 className="text-3xl font-bold text-white">{user && user.name}</h1>
              <p className="text-gray-500">{user && user.email}</p>
            </div>
          </div>
          <Link href = "" className="bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded-lg">Edit</Link>
          <button onClick={logoutUser} className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-lg">Logout</button>
        </div>
        <div className="mt-8">
          <div className="flex items-center">
            <span className="text-gray-500 mr-2">Joined:</span>
            <span className="text-white">{user && moment(user._createdAt).fromNow()}</span>
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
            <p className="text-white">{user && JSON.stringify(user.bio)}</p>
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

export default page