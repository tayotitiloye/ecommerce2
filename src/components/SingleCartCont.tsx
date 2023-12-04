
import React from 'react'
import AddToCartBtn from './AddToCartBtn'
import { Product } from 'src/app/utilis/interfaces'
//import {motion} from 'framer-motion'
//import { slideInFromLeft, slideInFromRight } from 'src/app/utilis/motion'
import Image from 'next/image'

interface Data{
    data: Product
}

function SingleCartCont({data}: Data) {
  return (
      <div
          className='lg:flex lg:gap-7 lg:h-screen'>
          <div className='relative h-[50vh] lg:h-[75vh] w-[75%] mx-4 px-4 flex-1'>
                  
                  <Image src={data.image} alt="image" fill className='rounded-lg object-contain' />
              </div>
          <div
              className='flex flex-col gap-5 tracking-wider px-4 my-8 py-4 flex-1 lg:h-[80%]'>
                  <h1 className='text-3xl md:5xl font-bold '>{ data.title}</h1>
                  <div className='text-lg  border-b-2 pb-4'>
                    { data.description}       
                  </div>
                  <div className='font-bold text-2xl'>
                     $ {data.price}
                  </div>
                  {/* <AddToCartBtn singleproduct={data} /> */}
                   <AddToCartBtn product={data} />
              </div>
          </div>
          

  )
}

export default SingleCartCont