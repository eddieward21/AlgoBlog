import React from 'react'
import Navbar from '../components/Navbar'
import { groq } from 'next-sanity'
import Main from '../components/Main'
import Profiles from '../components/Profiles'
import client from '../utils/client'
import Footer from '../components/Footer'
import Categories from '../components/Categories'
import { SessionProvider } from "next-auth/react"
import Navbar2 from '../components/Navbar2'

type Props = {
  profiles: Author[]
}


async function HomePage()  {

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
    <nav className="md:hidden fixed top-0 right-0 left-0 p-2 bg-white shadow-md z-50">
      <div>link1</div>
      <div>link2</div>
      <div>link3</div>
    </nav>
    <div className="md:block hidden h-screen">
      <Navbar profiles = {profiles} categories={categories}/>
    </div>
  </div>
  

  <div className="w-full md:w-2/3 py-28 bg-black">
  <Main/>
  </div>
  

  <div className="w-full md:w-1/3 bg-gray-900">
  <Categories categories = {categories}/>

  </div>
</div>





  )
}

export default HomePage