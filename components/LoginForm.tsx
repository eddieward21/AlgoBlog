import { useState } from 'react';
import {signIn} from 'next-auth/react'

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event:any) => {
    event.preventDefault();
    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });
    console.log(result);
  };

  return (
    <form onSubmit={handleSubmit}>
 <div className="bg-gray-900 min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-md">
    <h2 className="text-center text-3xl font-extrabold text-white">
      Sign in to your account
    </h2>
  </div>

  <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div className="bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <form className="space-y-6" action="#" method="POST">
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
                          focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm 
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
                          focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm 
                          bg-gray-700 text-white">
                            </input>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"></input>
            <label className="ml-2 block text-sm text-white">
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <button type="submit" className="w-full flex justify-center py-2 px-4 
            border border-transparent rounded-md 
            shadow-sm text-sm font-medium 
            text-white bg-indigo-600 hover:bg-indigo-700 
            focus:outline-none focus:ring-2 
            focus:ring-offset-2 focus:ring-indigo-500">
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
            <span className="px-2 bg-gray-900 text-white">
              Or continue with
            </span>
          </div>
        </div>

        </div>
        </div>
        </div>
        </div>
    </form>

    
  );
};

export default LoginForm;