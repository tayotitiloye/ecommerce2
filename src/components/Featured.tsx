'use client'
import React from 'react'
import CountingDown from './CountingDown'
import Image from 'next/image'
import Link from 'next/link'
import Slider from './Slider'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight } from 'src/app/utilis/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import { ProductType } from 'src/app/product/page'

interface Props{
    products: ProductType
}

function Featured({products}:Props) {
    return (
        <div className='relative mb-10'>
             <video
                        className="w-full h-auto opacity-[90%]"
                        preload="false"
                        playsInline
                        loop
                        muted
                        autoPlay
                        src="/ecomm video.webm"
                    />
        <motion.aside
        
            initial='hidden'
            whileInView='visible'

            className="bg-slate-50 pt-10 opacity-[90%] lg:absolute top-0 h-full w-full"
            >

            
            <div className='flex justify-center items-center bg-red-700'>
                <SparklesIcon className='h-[30px] rounded-full bg-gradient-to-r from-yellow-800 via-yellow-400 to-yellow-200 '/>
                <div className=" bg-gradient-to-r from-yellow-800 via-yellow-400 to-yellow-200 p-4 rounded-md  text-transparent bg-clip-text font-bold text-3xl w-fit"><span className="italic text-4xl font-bold">Exciting</span> Season Sales Offers <span className="italic text-3xl text-yellow-400">!</span> <br />  </div>
                <SparklesIcon className='h-[30px] absolute top-5 rounded-full bg-gradient-to-r from-yellow-800 via-yellow-400 to-yellow-200 '/>
                <SparklesIcon className='h-[30px] rounded-full bg-gradient-to-r from-yellow-800 via-yellow-400 to-yellow-200 '/>
           </div>
            <CountingDown />
            <div className="mt-10 md:grid md:grid-flow-row md:grid-cols-2 md:px-2 lg:flex lg:flex-row">
               
                <motion.div variants={slideInFromLeft(.5)} className="flex flex-1 flex-col relative  mb-5 h-[70%] md:w-[90%]">

        
                    <div className='text-3xl bg-gradient-to-b from-yellow-800 pl-6 via-yellow-500 to-yellow-300 bg-clip-text text-transparent w-full h-[200px] relative'>
                           <span className='italic text-5xl font-bold'>Whopping</span>  30% off <br /> all Items. <br /> Hurry And Take Advantage
                    </div>
                
                        
                     <div className="flex items-center justify-center">
                        <Link href='/product'> 
                                <button className="uppercase bg-yellow-800 text-lg p-2 text-white rounded-md">shop now</button>
                        </Link>
                    </div>
                </motion.div>
   
               
                    <motion.div variants={slideInFromRight(.8)} className='flex-1'>
                        <Slider products={products} />
                    
                    </motion.div>
    
            </div>
              
            </motion.aside>
        </div>
    )
}

export default Featured


 