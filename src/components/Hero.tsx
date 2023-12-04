'use client'
import React from 'react'
import { motion } from "framer-motion";
import { slideInFromTop } from 'src/app/utilis/motion';
import Link from 'next/link';
import Image from 'next/image';

function Hero() {
    return (
        <motion.aside
          initial="hidden"
          animate="visible"
           variants={slideInFromTop}
        className="flex mb-6 lg:flex-row lg:h-screen ">
            <div className="flex flex-col flex-1 mt-7 lg:mt-3 gap-5 md:px-20 lg:p-4  h-1/2 lg:h-screen tracking-widest">
                
                <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-800 via-yellow-500 to-yellow-300 text-transparent bg-clip-text">Selling only the <br /> <span className='italic text-5xl'>best</span>  things online</h1>
                <p className="py-3 leading-7 lg:leading-10 text-lg tracking-wider lg:tracking-widest">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa maxime ipsam temporibus vitae tenetur recusandae nobis, sit facere numquam dolore ullam, earum nam saepe quam in, minima voluptatibus.</p>
                <Link href='/product'>
                <button className="uppercase px-4 py-2 w-fit rounded-md bg-yellow-800 text-white">all products</button>
                </Link>
            </div>
          
            <div className="hidden lg:block flex-1 relative">
                

              <Image src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg" alt='image' width={150} height={150} className='absolute object-contain bottom-[150px] left-[100px] z-10'/>  
                
              <Image src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg" alt='image' width={150} height={150} className='absolute bottom-[150px] right-[120px] z-10 object-contain'/>  
              <Image src="https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg" alt='image' width={300} height={250} className='absolute left-[100px]  object-contain'/>  
          {/* <img className='object-contain rounded-xl' src="https://images.unsplash.com/photo-1562280963-8a5475740a10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2hvcHBpbmclMjBtYWxsfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" alt="" /> */}
            </div>
        </motion.aside>
    )
}

export default Hero