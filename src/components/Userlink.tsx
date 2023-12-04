'use client'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const Userlink = () => {


  const {status} = useSession()

  return (
      <aside className='hidden md:block'> 
          {
              status === 'authenticated' ? (
                  <div>
            <Link href='/order' className=' cursor-pointer'>Order </Link>
                  <span className='ml-2 cursor-pointer' onClick={()=>signOut()}>Logout</span>
                </div>
              ) : (<Link href='/signin'>Login</Link>)
          }
    </aside>
  )
}

export default Userlink