import React from 'react'

const Categories = () => {
  return (
<div className="max-w-full mx-auto p-8 border border-gray-500">

<ul className="flex flex-row justify-between items-center space-x-6 font-serif border border-gray-500 rounded-md px-10 py-2">


<li className="flex flex-col items-center ">
    <div className="bg-gradient-to-tr from-yellow-500 to-fuchsia-600 p-1 rounded-full">
      <a className=" bg-white block rounded-full p-1 hover:-rotate-6 transform transition" href="#">
        <img className="h-10 w-10 rounded-full" src="http://placekitten.com/100/200" alt="cute kitty" />
      </a>
    </div>
      <a className = "text-sm font-thin text-white"href="#">
        meoww_2
      </a>
  </li>

  <li className="flex flex-col items-center ">
    <div className="bg-gradient-to-tr from-yellow-500 to-fuchsia-600 p-1 rounded-full">
      <a className=" bg-white block rounded-full p-1 hover:-rotate-6 transform transition" href="#">
        <img className="h-10 w-10 rounded-full" src="http://placekitten.com/100/200" alt="cute kitty" />
      </a>
    </div>
      <a className = "text-sm font-thin text-white"href="#">
        meoww_2
      </a>
  </li>

  <li className="flex flex-col items-center ">
    <div className="bg-gradient-to-tr from-yellow-500 to-fuchsia-600 p-1 rounded-full">
      <a className=" bg-white block rounded-full p-1 hover:-rotate-6 transform transition" href="#">
        <img className="h-10 w-10 rounded-full" src="http://placekitten.com/100/200" alt="cute kitty" />
      </a>
    </div>
      <a className = "text-sm font-thin text-white"href="#">
        meoww_2
      </a>
  </li>

</ul>

</div>
    )
}

export default Categories