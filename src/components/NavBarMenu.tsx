
import Link from 'next/link'
import React, { useState } from 'react'
import Userlink from './Userlink'
import CartBtn from './CartBtn'


const data = [
    {
        id: 1,
        title: 'Home',
        url:'/'
    },
    {
        id: 2,
        title: 'About',
        url:'/about'
    },
    {
        id: 3,
        title: 'Product',
        url:'/product'
    },
    {
        id: 4,
        title: 'Cart',
        url:'/cart'
    },
]
function NavBarMenu() {


  return (
      <aside>
          <div className='hidden md:block '>
                    {data.map((p, index) => (
                        <Link
                            href={p.url}
                             
                            className="mx-5 cursor-pointer capitalize p-2 rounded-md hover:py-2 hover:underline hover:bg-slate-500 hover:text-white hover:translate-x-1 transition"
                           
                            key={p.id}>
                            {p.title}
                        </Link>
                    ))}
          </div>
          {/* <div className='hidden md:block'>
                <Userlink />
                 <CartBtn />
          </div> */}
          
          {/* {
              show && <NavBarMenuList/>
          } */}


    </aside>
  )
}

export default NavBarMenu


