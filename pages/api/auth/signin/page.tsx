import React from 'react'
import {getProviders, signIn} from 'next-auth/react'
import SignInComponent from './SignInComponent';
const SignInPage = async() => {
    const providers = await getProviders();
  return (
    <div>SignInPage

        <SignInComponent providers = {providers} />
    </div>
  )
}

export default SignInPage