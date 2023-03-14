import { useState } from 'react';
import {signIn} from 'next-auth/react'

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async(event:any) => {
    event.preventDefault();
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    if (res.status === 200) {
      console.log('res.json: ', res.json)
      //localStorage.setItem('USER', JSON.stringify(res.json))
      
      window.location.href = '/';
    } else {
      setError(true)
      console.error('Failed to login');
      setTimeout(() => {setError(false)}, 3000)

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

        <div className = "py-2">
          {error && 
        <p className = "text-white text-center text-sm">Incorrect username or password</p>
          }
          <button type="submit" className="mt-5 w-full flex justify-center py-2 px-4 
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
              <div className = "mt-8 cursor-pointer hover:bg-gray-500 px-1 py-1 h-10 w-10 bg-white rounded-full flex items-center justify-center">            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>        
</div>
               </span></div>
        </div>

        </div>
        </div>
        </div>
        </div>
    </div>

    
  );
};

export default LoginForm;