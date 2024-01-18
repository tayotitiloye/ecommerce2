'use client'
import React, { useState } from 'react'
import {motion} from 'framer-motion'
import {fadeInMotion } from 'src/app/utilis/motion'
import Image from 'next/image'
import Link from 'next/link'
import { ProductType } from 'src/app/product/page'
import Category from './Category'
import ProductCategory from './ProductCategory'


interface Props{
    data: ProductType
    allcat:string[]
}


function ProductCont({ data,allcat }: Props) {
    
    const [menuItems, setMenuItems] = useState(data);
   const [categories, setCategories] = useState(allcat);

    
    
    const filterItems = (category: string) => {
            if (category === 'all') {
            setMenuItems(data);
            return;
            }
            const newItems = data.filter((item) => item.category === category);
            setMenuItems(newItems);
        };



  return (

      
        <div className='flex flex-col md:flex-row'>
            
                <div className='px-4 '>
                    <Category categories={categories} filterItems={ filterItems} />
                                
                    
                
                </div>
                <div>
                    
                        <ProductCategory items={menuItems}/>
                </div>
               
          </div>

  )
}

export default ProductCont




//const allCategories = ['all', ...new Set(items.map((item) => item.category))];
 
// function App() {
//   const [menuItems, setMenuItems] = useState(items);
//   const [categories, setCategories] = useState(allCategories);

//   const filterItems = (category) => {
//     if (category === 'all') {
//       setMenuItems(items);
//       return;
//     }
//     const newItems = items.filter((item) => item.category === category);
//     setMenuItems(newItems);
//   };

//   return (
//     <main>
//       <section className="menu section">
//         <div className="title">
//           <h2>our menu</h2>
//           <div className="underline"></div>
//         </div>
//         <Categories categories={categories} filterItems={filterItems} />
//         <Menu items={menuItems} />
//       </section>
//     </main>
//   );
// }

