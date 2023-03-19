import React from 'react'

const Navbar2 = () => {
  return (
    <div className="flex flex-col h-screen">
  <nav className="lg:hidden md:hidden bg-gray-800 text-gray-400 flex-shrink-0">
    <div className="flex flex-col items-center h-full py-4">
      <a href="#" className="text-lg font-semibold uppercase tracking-widest mb-8">My Sidebar</a>
      <ul className="text-lg">
        <li className="mb-4"><a href="#" className="hover:text-white">Link 1</a></li>
        <li className="mb-4"><a href="#" className="hover:text-white">Link 2</a></li>
        <li className="mb-4"><a href="#" className="hover:text-white">Link 3</a></li>
        <li className="mb-4"><a href="#" className="hover:text-white">Link 4</a></li>
      </ul>
    </div>
  </nav>
  
  <div className="flex-1 bg-gray-100 p-4">
    <h1 className="text-xl font-semibold mb-4">My Page</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at convallis massa. In non dolor non elit fringilla eleifend. Ut luctus, felis vitae eleifend vulputate, mauris mauris posuere lacus, sit amet pharetra lectus elit sit amet risus.</p>
  </div>
  
  <button className="block md:hidden fixed bottom-0 right-0 p-4 bg-gray-800 text-white">
    <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
      <path v-if="!isOpen" fill-rule="evenodd" clip-rule="evenodd" d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"/>
      <path v-if="isOpen" fill-rule="evenodd" clip-rule="evenodd" d="M19 6h-5v12h5V6zm-7 0H4v12h8V6zm-1 5h6v2h-6v-2z"/>
    </svg>
  </button>
  
  <div className="hidden md:block fixed top-0 left-0 h-screen w-64 bg-gray-800 text-gray-400 overflow-y-auto">
    <div className="flex flex-col items-center h-full py-4">
      <a href="#" className="text-lg font-semibold uppercase tracking-widest mb-8">My Sidebar</a>
      <ul className="text-lg">
        <li className="mb-4"><a href="#" className="hover:text-white">Link 1</a></li>
        <li className="mb-4"><a href="#" className="hover:text-white">Link 2</a></li>
        <li className="mb-4"><a href="#" className="hover:text-white">Link 3</a></li>
        <li className="mb-4"><a href="#" className="hover:text-white">Link 4</a></li>
      </ul>
    </div>
  </div>
</div>
  )
}

export default Navbar2