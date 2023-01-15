'use client'

import { groq } from 'next-sanity'
import { createClient } from "next-sanity";
import { useState } from 'react';
import Post from './Post'
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'

type Props = {
  posts: Post[];
}

function Posts({posts}: Props) {
  const [filteredPosts, setFilteredPosts] = useState([]);


  return (
  <div className = "w-10/12">
    <div className = "text-black w-full h-8 flex flex-row items-center bg-white mt-5 rounded">
    <MagnifyingGlassIcon height={20} width={20}/>
    <input type="text" className = "px-2 outline-0" placeholder='Search Posts' />
    </div>
    {posts.map(post => 
    <Post post = {post}/>
      )}
  </div>
  )
}
export default Posts