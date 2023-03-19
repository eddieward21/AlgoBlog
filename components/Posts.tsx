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

  /*
  const [filter1, setFilter1] = useState('');
const [filter2, setFilter2] = useState('');

const filteredProps = props.filter(prop => 
  prop.name.toLowerCase().includes(filter1.toLowerCase()) &&
  prop.category.toLowerCase().includes(filter2.toLowerCase())
);
<select>
  {filteredProps.map(prop => (
    <option key={prop.id} value={prop.value}>{prop.name}</option>
  ))}
</select>

<input type="text" value={filterText} onChange={(e) => setFilterText(e.target.value)} />

  */
  const [search, setSearch] = useState('');
  const [catDD, setCatDD]= useState(false);
  const [diffDD, setDiffDD]= useState(false);

  console.log(search)

  function showcatDD() {
    setCatDD(!catDD);
  }
  function showDiffDD() {
    setDiffDD(!diffDD);
  }

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
          <div className = "text-white text-sm rounded bg-gray-800 shadow-md flex flex-col absolute left-0 bottom-0 w-32 transform translate-y-full">
              <div className = "text-xs py-2 pl-4 hover:bg-gray-700 rounded">Easy</div>
              <div className = "text-xs py-2 pl-4 hover:bg-gray-700 rounded">Medium</div>
              <div className = "text-xs py-2 pl-4 hover:bg-gray-700 rounded">Hard</div>


          </div>
      }
      </div>

      <div onClick={showcatDD} className = "mb-2 relative flex flex-row rounded items-center	justify-center pl-2 cursor-pointer bg-gray-800"><p>Categories</p> <ChevronDownIcon height={10} width={20}/>
      {catDD && 
          <div className = "text-white text-sm rounded bg-gray-800 shadow-md flex flex-col absolute left-0 bottom-0 w-32 transform translate-y-full">
              <div className = "text-xs py-2 pl-4 hover:bg-gray-700 rounded">Hashmap</div>
              <div className = "text-xs py-2 pl-4 hover:bg-gray-700 rounded">Array</div>
              <div className = "text-xs py-2 pl-4 hover:bg-gray-700 rounded">BST</div>


          </div>
      }
      </div>
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