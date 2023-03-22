import { Transition } from '@headlessui/react'
import { Fragment, useId, useState } from 'react'
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'


const Search = () => {
  const [show, setShow] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  return (
    <>
      <div className="w-full">
        <button onClick={() => setShow(!show)} className = " mt-5 flex flex-row items-center hover:bg-white hover:text-black px-5 h-10 rounded-full hover:shadow-lg"><MagnifyingGlassIcon className = "mr-5" height={25} width={25}/> Search</button>

      </div>
      <Transition.Root show={show}>
        <BackgroundLayer />
        <SlideOverLayer>
          <h2 className="my-6 text-2xl font-bold">Register</h2>
          <div className="space-y-4">
            <FadeIn delay="delay-[300ms]">
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </FadeIn>
            <FadeIn delay="delay-[600ms]">
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </FadeIn>
            <FadeIn delay="delay-[800ms]">
              <input
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FadeIn>
          </div>
          <div className="my-6">
            <FadeIn delay="delay-[900ms]">
              <button className = "bg-black px-4 py-2 rounded-full" onClick={() => setShow(false)}>Close</button>
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
            <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
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