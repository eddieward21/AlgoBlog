import React from 'react'
import Navbar from '../components/Navbar'
import { groq } from 'next-sanity'
import Main from '../components/Main'
import Profiles from '../components/Profiles'
import client from '../utils/client'
import Footer from '../components/Footer'
import Categories from '../components/Categories'
import { SessionProvider } from "next-auth/react"
import { HeartIcon, PlusCircleIcon, UserCircleIcon, HomeIcon, XMarkIcon } from '@heroicons/react/24/outline'

type Props = {
  profiles: Author[]
}


async function HomePage()  {
  const quer = groq`*[_type=='post'] {
    ...,
    author->,
      categories[]->
  }| order(_createdAt desc) 
  `
  const posts = await client.fetch(quer)  

  const query = groq`*[_type=='category'] {

    ...,
  }
  `
const categories = await client.fetch(query)

const q = groq`*[_type=='author'] {

  ...,
}
`
const profiles = await client.fetch(q)

console.log("PROFILES FROM NAVBAR PARENT PROP: ", profiles)

  return (

    <div className="flex flex-col md:flex-row">

  <div className="w-full md:w-1/6 bg-black">
    <Navbar profiles = {profiles} categories={categories}/>
  </div>
  

  <div className="w-full md:w-2/3 py-10 bg-black">
    <Main profiles = {profiles} categories = {categories} posts = {posts}/>
  </div>
  
  <div className="w-full md:w-1/3 bg-gray-900">
    <Categories categories = {categories}/>
  </div>

</div>

  )
}

export default HomePage