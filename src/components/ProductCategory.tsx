'use client'
import React, { useState } from 'react'
import Product, { ProductType } from 'src/app/product/page';
import {motion} from 'framer-motion'
import { fadeInMotion, slideInFromLeft, slideInFromRight } from 'src/app/utilis/motion';
import Link from 'next/link';
import Image from 'next/image';
import AddToCartBtn from './AddToCartBtn';

interface Props{
  items: ProductType
}

export type Product = { id: number
      image: string
      price: number
      title: string
     category?: string
    description: string
       
}


const ProductCategory = ({ items }: Props) => {
    
    const [query, setQuery] = useState('')
    const [switchView, setSwitchView] = useState(true)
    const [data, setDATA] = useState(items)
    
    const filteredItems = items.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()))
   
    return ( 
        <div className=''>    
           
            <input type="text" className='p-2 ml-8 bg-slate-200 my-3 text-black rounded-lg' placeholder='Search' value={query} onChange={(e)=>setQuery(e.target.value)} />
           
            <div className='ml-8'>
            {filteredItems.length} <span>Products Found</span> 
                
            </div>

            <div
                className='flex gap-2 font-bold m-2 '
                
            >
                <button
                    className='p-1 rounded-md'
                    style={{
                    backgroundColor: switchView ? 'black' : 'white',
                    color: switchView ? 'white' : 'black'
                 }}
                    onClick={() => setSwitchView(true)}>



                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                    </svg>


                </button>/
                <button
                    className='p-1 rounded-md'
                     style={{
                    backgroundColor: !switchView ? 'black' : 'white',
                    color: !switchView ? 'white' : 'black'
                         }}
                    onClick={() => setSwitchView(false)}>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
                    </svg>

                
                </button>
                
            </div>
            {switchView ?
                (<div className='px-4 md:grid border-t-2 md:grid-flow-row md:grid-cols-2 md:gap-4 lg:grid-flow-row lg:grid-cols-3 gap-2 '>
           
                    {
                        filteredItems.map((pdt, index) => (
                            <motion.div
                                key={pdt.id}
                                variants={fadeInMotion}
                                initial='hidden'
                                whileInView='visible'
                                viewport={{ once: true }}
                                custom={index}
                    
                                className='m-4 p-4 rounded-lg shadow-md hover:shadow-xl transition'>
                        
                                <Link href={`/product/${pdt.id}`} key={pdt.id} className='w-full group h-[45vh] md:m-4 md:p-4 cursor-pointer'>
                                    <div className='w-full h-auto relative '>
                                    
                                
                                        <Image src={pdt.image} alt={pdt.title} width={130} height={130} className='object-contain' />
                                    </div>
                                    <div className='flex items-center justify-between my-2'>
                                        <div className=''>{pdt?.title}</div><span>$ {pdt.price}</span>
                                    </div>
                                </Link>
                                       
                            </motion.div>
                        ))
                    }
                </div>) :

                (<div>
                    {/* Single Page Format */}
                    {filteredItems.map((pdt, index) => (
                        <Link href={`/product/${pdt.id}`} key={pdt.id} className='w-[80%]  h-[45vh] md:m-4 md:p-4 cursor-pointer my-4'>
                        
                            <motion.div
                                initial='hidden'
                                whileInView='visible'
                                className='flex flex-col gap-2 lg:flex-row lg:gap-4 p-4 m-6 shadow-md transition hover:shadow-xl'>
                                <motion.div
                                    variants={slideInFromLeft(.5)}
                                    className='relative h-[140px] md:m-4 md:p-4  w-full px-4 flex-1'>
                                           
                            
                                    <Image src={pdt.image} alt={pdt.title} width={120} height={120} className='object-contain' />
                                </motion.div>
                                <motion.div
                                    variants={slideInFromRight(.8)}
                                    className='flex flex-col gap-2 px-2 my-2 py-2 flex-1 lg:h-[80%]'>
                                    <h1 className=' font-bold '>{pdt.title}</h1>
                                    <div className='border-b-2 pb-2 line-clamp-2'>
                                        {pdt.description}
                                    </div>
                                    <div className='font-bold'>
                                        $ {pdt.price}
                                    </div>
                           
                                    {/* <AddToCartBtn product={pdt} /> */}
                                        <button className='p-2 capitalize bg-yellow-800 rounded-lg text-white'>
                                            add to cart
                                        </button>
                                   
                                </motion.div>
                            </motion.div>
                        </Link>
                        
                    ))
                    
                    }
      
                
                </div>)}
                
        </div>
  );
};



export default ProductCategory





