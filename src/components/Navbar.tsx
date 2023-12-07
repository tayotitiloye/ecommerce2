import Link from 'next/link'
import {useState} from 'react'
import Euserlink from './Userlink'
import Userlink from './Userlink'
import CartBtn from './CartBtn'
import NavBarMenu from './NavBarMenu'
import {BiSearch} from "react-icons/bi"
import Image from 'next/image'
import MobileNavBar from './MobileNavView'
import DarkModeTheme from './DarkModeTheme'


function Navbar() {


    const user = false
    
    return (
      <aside className='flex items-center justify-between fixed top-0  w-full h-14 bg-white opacity-80 text-black shadow-lg z-10 p-4'>
            <div className='flex flex-row items-center justify-between'>

                <Link href='/' className='flex items-center justify-center text-yellow-800'>
                    <Image src='/coylogo.png' alt='coylogo' width={50} height={50} />
                    <div className="font-bold text-xl">
                        <span className=' italic'>Opor!</span>  Mart</div>
                </Link>
                
            </div> 
         

            <NavBarMenu/>
                         
            {/* <Userlink /> */}
            
            {/* <DarkModeTheme /> */}
            
            <Link href='/cart'>
            <CartBtn />
            </Link>
            <div className='md:hidden'>
                <MobileNavBar/>

            </div>
            {/* <div className='md:hidden'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div> */}

            
            
          
        </aside>
   )
}

export default Navbar





// import React from 'react'
// import Menu from '../app/(foodcomponents)/Menu'
// import Link from 'next/link'
// import Carticon from '../app/(foodcomponents)/Carticon'
// import Image from 'next/image'

// const Navbar = () => {

//   const user = false

//   return (
//     <div className='h-12 text-red-500 md:h-24 flex justify-between items-center border-b-2 border-b-red-500 p-4 uppercase'>
      
//       <div className='hidden md:flex gap-4 flex-1'>
//         <Link href='/'>Homepage</Link>
//         <Link href='/menu'>Menu</Link>
//         <Link href='/'>Contact</Link>
//       </div>

//       <div className='text-xl md:font-bold lg:px-20 xl:px-40 flex-1 md:text-center'>
//         <Link href='/'>
//           MASSIMO
//         </Link>
//       </div>
//       <div className='md:hidden'>
//         <Menu/>
//       </div>
//       <div className='hidden md:flex items-center justify-end flex-1 gap-4   rounded-md'>
        
//         <div className='md:absolute top-3 right-2 lg:static flex items-center gap-4 bg-orange-300 cursor-pointer px-4'>
//           <Image src='/phone.png' alt='phone' height={20} width={20}/>
//           <span>0803 669 0096</span>
//         </div>

//         {!user ? (<Link href='/login'>Login</Link>) :
//         (<Link href='/order'>Order</Link>)}

//         <Carticon/>
//       </div>


//     </div>
//   )
// }

// export default Navbar




