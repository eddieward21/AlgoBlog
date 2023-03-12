import { useState } from 'react';
import {signIn} from 'next-auth/react'

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async(event:any) => {
    event.preventDefault();
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    if (res.status === 200) {
      // Redirect to the user's dashboard or another authenticated page
      window.location.href = '/';
    } else {
      // Handle any errors
      console.error('Failed to login');
    }
  }

  return (
    <div>
 <div className="bg-gray-900 min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-md">
    <h2 className="text-center text-3xl font-extrabold text-white">
      Sign in to AlgoBlog
    </h2>
  </div>

  <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div className="bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <form className="space-y-6" onSubmit={handleSubmit} method="POST">
        <div>
          <label className="block text-sm font-medium text-white">
            Email address
          </label>
          <div className="mt-1">
            <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        
                   className="appearance-none block w-full px-3 py-2 border border-gray-300 
                          rounded-md shadow-sm placeholder-gray-400 focus:outline-none 
                          focus:ring-green-500 focus:border-green-500 sm:text-sm 
                          bg-gray-700 text-white"/>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-white">
            Password
          </label>
          <div className="mt-1">
            <input type = "password" value = {password} onChange = {(event) => setPassword(event.target.value)}
                   className="appearance-none block w-full px-3 py-2 border border-gray-300 
                          rounded-md shadow-sm placeholder-gray-400 focus:outline-none 
                          focus:ring-green-500 focus:border-green-500 sm:text-sm 
                          bg-gray-700 text-white">
                            </input>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"></input>
            <label className="ml-2 block text-sm text-white">
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <a href="#" className="font-medium text-green-600 hover:text-green-500">
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <button type="submit" className="w-full flex justify-center py-2 px-4 
            border border-transparent rounded-md 
            shadow-sm text-sm font-medium 
            text-white bg-green-600 hover:bg-green-700 
            focus:outline-none focus:ring-2 
            focus:ring-offset-2 focus:ring-green-500">
            Sign in
          </button>
        </div>
      </form>

      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="flex flex-col px-2 items-center text-white">
              Or continue with
              <img src="https://pbs.twimg.com/profile_images/1414990564408262661/r6YemvF9_400x400.jpg" className = "mt-2 cursor-pointer h-8 w-8 rounded-full" alt="" />
            </span>
          </div>
        </div>

        </div>
        </div>
        </div>
        </div>
    </div>

    
  );
};

export default LoginForm;