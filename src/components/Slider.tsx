'use client'
import { SparklesIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { ProductType } from 'src/app/product/page'




    interface Props{
    products: ProductType
    }



const Slider = ({products}:Props) => {

    const [slide, setSlide] = useState(0)

    useEffect(() => {
        const slider = setInterval(() => {
            setSlide((p)=> p === products.length - 1 ? 0 : p + 1)
        }, 3000)
        
        return ()=>{
            clearInterval(slider)
        }
    })

  return (
      <div className='flex flex-col lg:flex-row h-[300px] lg:h-[350px]'>
          
          <div className='w-full h-[200px] lg:h-[300px] relative'>
              <Image src={products[slide].image} alt='slide' fill className='object-contain rounded-lg'/>
        </div>
        
                               
      </div>
  )
}

export default Slider
