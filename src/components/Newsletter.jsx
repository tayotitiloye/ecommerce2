'use client'
import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import { slideInFromRight } from 'src/app/utilis/motion'



function Newsletter() {
    const [input, setInput] = useState()
    const [open, setOpen] = useState(false)

    
    function handleSubmit(params) {

        if (input === '')
            return

        try {
            
            setOpen(true)
            
        } catch (error) {
            console.log(error);
        }
    
    } 

    useEffect(() => {
        const close = setTimeout(() => {
            setOpen(false)
        }, 4000);

        return ()=> clearTimeout(close)
    },[open])

    return (
      <aside className="p-4 text-yellow-900 mt-5">
          
            
            {open && (<motion.div
                        variants={slideInFromRight(.3)}
                        initial='hidden'
                        animate='visible'
                        className='flex justify-center items-center absolute left-0 top-[2500px] md:top-[2100px] lg:top-[1600px] w-full h-[calc(100vh-3rem)] bg-black bg-opacity-75 '>
                    <div className='w-full mx-20  h-60 bg-white content-center p-4 rounded-lg text-lg'>
                        
                    Thank you <span className='font-bold text-2xl text-red-600'>{input}</span> <br /> for Subscribing for our newsletter, we would reach out to you with your coupon.
                    
                          <br /><br />  <button className='text-white bg-black rounded-md px-2 mt-2' onClick={()=>setOpen(!open)}>close</button>
                        </div>
                </motion.div>)}
                
                <h1 className="font-bold text-3xl my-3">Join our newsletter and get 20% off</h1>
                <div className="flex flex-col gap-5 md:flex-row">

                    <div className="tracking-8 md:flex-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint unde quaerat ratione soluta veniam provident adipisci cumque eveniet tempore?
                    </div>
                    <div className="flex border rounded-md md:flex-1 border-black">
                        <input onChange={(e)=> setInput(e.target.value)} required type="email" className="flex-[4] p-2" placeholder="Enter Email" />
                        
                        <button onClick={handleSubmit} className="flex[1] p-2 bg-yellow-700 border border-black text-black hover:text-white">Subscribe</button>
                    </div>
                </div>
          
        </aside>
  )
}

export default Newsletter


