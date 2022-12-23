import React from 'react'
import Navbar from '../components/Navbar'
import { groq } from 'next-sanity'
import Main from '../components/Main'
import Profiles from '../components/Profiles'

function HomePage() {
  return (
    <div className = "bg-[#131515] font-mono grid grid-cols-12">
      <Navbar/>
      <Main/>
      <Profiles/>

    </div>
  )
}

export default HomePage