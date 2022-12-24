import React from 'react'
import Navbar from '../components/Navbar'
import { groq } from 'next-sanity'
import Main from '../components/Main'
import Profiles from '../components/Profiles'
import client from '../utils/client'

async function HomePage() {



  const query = groq`*[_type=='author'] {
    ...,
  }
  `
const profiles = await client.fetch(query)
  return (
    <div className = "bg-[#131515] font-mono grid grid-cols-12">
      <Navbar/>
      <Main/>
      <Profiles profiles = {profiles}/>

    </div>
  )
}

export default HomePage