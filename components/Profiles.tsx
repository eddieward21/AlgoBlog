import React from 'react'
import Link from "next/link"

type Props = {
  profiles: Author[]
}

const Profiles = ({profiles}: Props) => {
  return (
    <div className='pt-5 col-span-4 px-10'>
        <h1 className = "text-white text-xl font-bold ml-2">Profiles</h1>


    {profiles.map((profile) =>
            <div className="mt-5 flex items-center pr-20 rounded-lg">
            <Link href= ""><img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" className="hover:opacity-50 w-12 h-12 rounded-full mr-4" /></Link>
            <div className="text-md font-bold flex flex-col">
              <h1 className = "text-white text-sm hover:text-[#7de2d1]"><Link href = {profile.slug}>{profile.name}</Link></h1>
              <h1 className='text-xs font-light text-white'>User</h1>
            </div>
            <div className = "ml-auto h-full">
            <h1 className='text-xs text-white hover:text-[#7de2d1] hover:cursor-pointer'>Follow</h1>
          </div>
          </div>
    )}


    </div>
  )
}

export default Profiles