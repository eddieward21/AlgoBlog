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
  const [filteredPosts, setFilteredPosts] = useState('');
  console.log(filteredPosts)

  return (
  <div className = "w-10/12">
    <div className = "text-black w-full h-8 flex flex-row items-center bg-slate-200 mt-5 rounded px-2">
    <MagnifyingGlassIcon height={20} width={20}/>
    <input type="text" onChange={(e) => setFilteredPosts(e.target.value)} className = "px-2 outline-0 w-full bg-slate-200" placeholder='Search Posts' />
    </div>
    {posts.filter((item) => {
      return filteredPosts.toLowerCase() === "" ? item : item.title.toLowerCase().includes(filteredPosts)
    })
    .map(post => 
    <Post post = {post}/>
      )}
  </div>
  )
}
export default Posts