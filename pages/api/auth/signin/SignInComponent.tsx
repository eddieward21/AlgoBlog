'use client'

import getProviders from 'next-auth/react'
/*
type Props = {
    providers: Awaited<ReturnType<typeof getProviders>>;
}
*/
function SignInComponent({providers}: any) {
  return (
    <div>SignInComponent
        <div>
            {Object.values(providers!).map((provider:any) => 
            <div key = {provider.name}>
                <button>Sign In With {provider.name}</button>
            </div>
            )}
        </div>
    </div>
  )
}

export default SignInComponent