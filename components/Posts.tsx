'use client'
import {ChevronDownIcon, ChevronUpIcon} from '@heroicons/react/24/solid'
import { groq } from 'next-sanity'
import { createClient } from "next-sanity";
import { useState } from 'react';
import Post from './Post'
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'
import client from '../utils/client'

type Props = {
  posts: Post[];
  categories: Author[];
}

function Posts({posts , categories}: Props) {



  
  const [search, setSearch] = useState('');
  const [catDD, setCatDD]= useState(false);
  const [diffDD, setDiffDD]= useState(false);

  const [difficulty, setDifficulty] = useState("");

  const handleDivClick = (event:any) => {
    setDifficulty(event.target.textContent);
  };

  console.log(search)

  function showcatDD() {
    setCatDD(!catDD);
  }
  function showDiffDD() {
    setDiffDD(!diffDD);
  }


  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(search.toLowerCase()) 
    && post.difficulty.toLowerCase().includes(difficulty.toLowerCase())
  );

  return (
  <div className = "w-10/12">
    <div className = "text-white w-full h-8 flex flex-row items-center bg-gray-800 mt-5 rounded px-2">
    <MagnifyingGlassIcon height={20} width={20}/>
    <input type="text" onChange={(e) => setSearch(e.target.value)} className = "px-2 outline-0 w-full bg-gray-800 text-white" placeholder='Search Posts' />
    </div>
    <div className = "mt-5 text-white w-full h-8 flex flex-row justify-between align-center text-sm font-bold">
      <div className = "flex flex-row rounded items-center	justify-center pl-2 cursor-pointer bg-gray-800"><p>Lists</p> <ChevronDownIcon height={10} width={20}/></div>
      <div onClick={showDiffDD} className = "relative flex flex-row rounded items-center	justify-center pl-2 cursor-pointer bg-gray-800"><p>Difficulty</p> <ChevronDownIcon height={10} width={20}/>
      {diffDD && 
          <div className = "text-white text-sm rounded bg-gray-800 shadow-md flex flex-col absolute left-0 bottom-0 mt-4 w-32 transform translate-y-full">
                  <div onClick={handleDivClick} className = "text-xs py-2 pl-4 hover:bg-gray-700 rounded">Easy</div>
                  <div onClick={handleDivClick} className = "text-xs py-2 pl-4 hover:bg-gray-700 rounded">Medium</div>
                  <div onClick={handleDivClick} className = "text-xs py-2 pl-4 hover:bg-gray-700 rounded">Hard</div>

          </div>
      }
      </div>

      <div onClick={showcatDD} className = "mb-2 relative flex flex-row rounded items-center justify-center pl-2 cursor-pointer bg-gray-800 h-full"><p>Categories</p> <ChevronDownIcon height={10} width={20}/>
      {catDD && 
          <div className = "text-white text-sm rounded bg-gray-800 shadow-md flex flex-col absolute left-0 bottom-0 w-32 transform translate-y-full">
            {categories.map((category) => 
                <div className = "text-white text-xs py-2 pl-4 hover:bg-gray-700 rounded">Category {category.name}</div>

            )}
          </div>
      }
      </div>
      <div className = "flex flex-row rounded items-center	justify-center pl-2 cursor-pointer bg-gray-800"><p>Favorites</p> <ChevronDownIcon height={10} width={20}/></div>

    </div>
    {filteredPosts.map((post) => <Post post = {post}/>)}
  </div>
  )
}
export default Posts