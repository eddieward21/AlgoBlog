'use client'
import {ChevronDownIcon, ChevronUpIcon} from '@heroicons/react/24/solid'
import { groq } from 'next-sanity'
import { createClient } from "next-sanity";
import { useState } from 'react';
import Post from './Post'
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'

type Props = {
  posts: Post[];
}

function Posts({posts}: Props) {
  const [search, setSearch] = useState('');
  console.log(search)

  return (
  <div className = "w-10/12">
    <div className = "text-white w-full h-8 flex flex-row items-center bg-gray-800 mt-5 rounded px-2">
    <MagnifyingGlassIcon height={20} width={20}/>
    <input type="text" onChange={(e) => setSearch(e.target.value)} className = "px-2 outline-0 w-full bg-gray-800 text-white" placeholder='Search Posts' />
    </div>
    <div className = "mt-5 text-white w-full h-8 flex flex-row justify-between align-center">
      <div className = "flex flex-row rounded items-center	justify-center pl-2 cursor-pointer bg-gray-800"><p>Lists</p> <ChevronDownIcon height={10} width={20}/></div>
      <div className = "flex flex-row rounded items-center	justify-center pl-2 cursor-pointer bg-gray-800"><p>Difficulty</p> <ChevronDownIcon height={10} width={20}/></div>
      <div className = "flex flex-row rounded items-center	justify-center pl-2 cursor-pointer bg-gray-800"><p>Categories</p> <ChevronDownIcon height={10} width={20}/></div>
      <div className = "flex flex-row rounded items-center	justify-center pl-2 cursor-pointer bg-gray-800"><p>Favorites</p> <ChevronDownIcon height={10} width={20}/></div>

    </div>
    {posts.filter((post) => {
      return search.toLowerCase() === "" ? post : (post.title.toLowerCase().includes(search)) 
    })
    .map(post => 
    <Post post = {post}/>
      )}
  </div>
  )
}
export default Posts