import React from 'react'
import Link from "next/link"
import urlFor from '../utils/urlFor'

type Props = {
  profiles: Author[]
}

const Profiles = ({profiles}: Props) => {
  return (
<div className="mt-5 w-10/12 h-24 rounded-md border-r border-gray-500">
<div className = "h-full grid grid-flow-col auto-cols-[60%] overflow-x-auto gap-2.5 overscroll-contain snap-mandatory">


    {profiles.map((profile) =>
            <div className="flex items-center rounded-lg border border-gray-500 px-5 bg-black">
            <Link href = {`profiles/${profile.slug.current}`}><img src={urlFor(profile.image).url()} className="object-cover hover:opacity-50 w-12 h-12 rounded-full mr-4" /></Link>
            <div className="text-md font-bold flex flex-col">
              <h1 className = "text-white text-sm hover:text-[#7de2d1]"><Link href = {`profiles/${profile.slug.current}`}>{profile.name}</Link></h1>
              <h1 className='text-xs font-light text-white'>User</h1>
            </div>
            <div className = "ml-auto">
            <h1 className='text-xs text-white hover:text-[#7de2d1] hover:cursor-pointer'>Follow</h1>
          </div>
          </div>
    )}

</div>

    </div>
  )
}

export default Profiles