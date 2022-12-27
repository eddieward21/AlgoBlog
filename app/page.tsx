import React from 'react'
import Navbar from '../components/Navbar'
import { groq } from 'next-sanity'
import Main from '../components/Main'
import Profiles from '../components/Profiles'
import client from '../utils/client'
import Footer from '../components/Footer'
import Categories from '../components/Categories'
async function HomePage() {



  const query = groq`*[_type=='category'] {

    ...,
  }
  `
const categories = await client.fetch(query)



  return (
    <div className = "flex flex-col">
    <div className = "bg-[#131515] font-poppins grid grid-cols-12 h-max">
      <Navbar/>
      <Main/>
      <Categories categories = {categories}/>
    </div>

    </div>
  )
}

export default HomePage