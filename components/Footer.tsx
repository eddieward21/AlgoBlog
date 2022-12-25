import React from 'react'


const Footer = () => {
    return (
        <footer className="mt-32 bg-black text-white p-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/4 text-center md:text-left">
              <h5 className="uppercase mb-6 font-bold">Company</h5>
              <ul className="mb-4">
                <li className="mt-2">
                  <a href="#" className="hover:underline">About us</a>
                </li>
                <li className="mt-2">
                  <a href="#" className="hover:underline">Contact</a>
                </li>
                <li className="mt-2">
                  <a href="#" className="hover:underline">Blog</a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 text-center md:text-left">
              <h5 className="uppercase mb-6 font-bold">Legal</h5>
              <ul className="mb-4">
                <li className="mt-2">
                  <a href="#" className="hover:underline">Terms</a>
                </li>
                <li className="mt-2">
                  <a href="#" className="hover:underline">Privacy</a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 text-center md:text-left">
              <h5 className="uppercase mb-6 font-bold">Social</h5>
              <ul className="mb-4">
                <li className="mt-2">
                  <a href="#" className="hover:underline">Facebook</a>
                </li>
                <li className="mt-2">
                  <a href="#" className="hover:underline">Twitter</a>
                </li>
                <li className="mt-2">
                  <a href="#" className="hover:underline">Instagram</a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 text-center md:text-left">
              <h5 className="uppercase mb-6 font-bold">Support</h5>
              <ul className="mb-4">
                <li className="mt-2">
                    </li>
                    </ul>
                    </div>
                    </div>
                    </div>
                    </footer>
    );
  };
  
  export default Footer;