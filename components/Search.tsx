import React from 'react'
import Link from 'next/link'
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'

const Search = () => {
  return (
    <Link className = " mt-5 flex flex-row items-center hover:bg-white hover:text-black px-5 h-10 rounded-full hover:shadow-lg"href = ""><MagnifyingGlassIcon className = "mr-5"height={25} width={25}/> Search</Link>

  )
}

export default Search