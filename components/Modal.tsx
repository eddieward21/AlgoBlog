import React, { useState } from 'react';

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <button onClick={toggleModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Open Modal
      </button>
      {isOpen && (
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#xA0;
            <div className="z-50 inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
              <form className = "">
                <div className = "">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                    <svg className="h-6 w-6 text-green-600" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                      Sign Up
                    </h3>
                    <div className="mt-2">
                      <input type="email" placeholder="Email" className="w-full px-3 py-2 rounded-md text-gray-700 bg-gray-200 placeholder-gray-500 focus:outline-none focus:bg-white focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out" />
                      <input type="password" placeholder="Password" className="mt-3 w-full px-3 py-2 rounded-md text-gray-700 bg-gray-200 placeholder-gray-500 focus:outline-none focus:bg-white focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out" />
                    </div>
                  </div>
                </div>
                </form>
                </div>
                </div>
                </div>
                )}
      
</>
  )
}
export default Modal