'use client'
import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromBottom, slideInFromLeft, slideInFromRight } from 'src/app/utilis/motion'

function Vision() {
    return (
        <aside
           
            className="bg-orange-100 pb-8 text-yellow-900 mb-8">
            <div className=" flex flex-col lg:flex-row gap-6 p-5">
                <h1 className=" font-bold mt-12 text-3xl text-start lg:flex-1 capitalize">It is more than just sales <br />for us</h1>
                <p className="mb-12 flex-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur reprehenderit non aliquam voluptates dolore aut vero consequuntur.</p>
            </div>
            <motion.div
            
                initial='hidden'
                whileInView='visible'
                
                className="md:grid md:grid-flow-row md:grid-cols-2 lg:flex lg:flex-row">
                <motion.div variants={slideInFromLeft(.5)} className="bg-orange-200 flex flex-col gap-2 items-center justify-center rounded-md m-5 p-5">
                    <Image src='/mission.jfif' alt="image" width={100} height={100} className="rounded-full"/>
                    <h1 className="font-bold text-xl">Mission</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p>
                </motion.div>
                <motion.div
                    variants={slideInFromBottom}
                    className="bg-orange-200 flex flex-col gap-2 items-center justify-center rounded-md m-5 p-5">
                    <Image src='/mission.jfif' alt="image" width={100} height={100} className="rounded-full"/>
                    <h1 className="font-bold text-xl">Vision</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p>
                </motion.div>
                <motion.div variants={slideInFromRight(.8)} className="bg-orange-200 flex flex-col gap-2 items-center justify-center rounded-md m-5 p-5">
                    <Image src='/mission.jfif' alt="image" width={100} height={100} className="rounded-full"/>
                    <h1 className="font-bold text-xl">History</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p>
                </motion.div>
                
            </motion.div>

            
        </aside>
    )
}

export default Vision