import { Transition } from '@headlessui/react'
import { Fragment, useEffect, useId, useState } from 'react'
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'
import urlFor from '../utils/urlFor'
import Link from 'next/link'

type Props = {
  profiles: Author[]
}

const Search = ({profiles}:Props) => {

  const [show, setShow] = useState(false)
  const [searchName, setSearchName] = useState('')
  
  const filteredProfiles = profiles.filter((profile) => 
    profile.name.toLowerCase().includes(searchName.toLowerCase())

  )

  return (
    <>
      <div className="w-full">
        <button onClick={() => setShow(!show)} className = " mt-5 flex flex-row items-center hover:bg-white hover:text-black px-5 h-10 rounded-full hover:shadow-lg"><MagnifyingGlassIcon className = "mr-5" height={25} width={25}/> Search</button>

      </div>
      <Transition.Root show={show}>
        <BackgroundLayer />
        <SlideOverLayer>
          <h2 className="my-6 text-2xl font-bold text-white">Search User</h2>
          <div className="space-y-4">
            <FadeIn delay="delay-[300ms]">
              <input className = "border border-gray-800 rounded-full text-sm font-medium mb-2 text-black pr-11 py-1 focus:outline-none focus:ring-green-500 focus:border-green-500"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
              />
            </FadeIn>
          </div>
          
          <div>
            {filteredProfiles.map((profile) => 
              <div className="flex items-center rounded-lg border border-gray-500 px-5 bg-gray-900 my-2 py-2">
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

          <div className="my-6">
            <FadeIn delay="delay-[900ms]">
              <button className = "bg-white px-4 py-2 rounded-full text-black" onClick={() => setShow(false)}>Close</button>
            </FadeIn>
          </div>
        </SlideOverLayer>
      </Transition.Root>
    </>
  )
}

const BackgroundLayer = () => (
  <Transition.Child
    enter="transition-opacity ease-in-out duration-500"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="transition-opacity ease-in-out duration-500"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
    <div className="fixed inset-0 bg-gray-500 opacity-75" />
  </Transition.Child>
)

const SlideOverLayer = ({ children }:any) => (
  <Transition.Child
    as={Fragment}
    enter="transform transition ease-in-out duration-500"
    enterFrom="translate-x-full"
    enterTo="translate-x-0"
    leave="transform transition ease-in-out duration-500 delay-100"
    leaveFrom="translate-x-0"
    leaveTo="translate-x-full"
  >
    <div className="fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
          <div className="pointer-events-auto w-screen max-w-2xl">
            <div className="flex h-full flex-col overflow-y-scroll bg-black py-6 shadow-xl">
              <div className="px-4 sm:px-6">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition.Child>
)

const FadeIn = ({ delay, children }:any) => (
  <Transition.Child
    enter={`transition-all ease-in-out duration-700 ${delay}`}
    enterFrom="opacity-0 translate-y-6"
    enterTo="opacity-100 translate-y-0"
    leave="transition-all ease-in-out duration-300"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
    {children}
  </Transition.Child>
)
export default Search