'use client'
import React, { useState } from 'react'

interface Props{

  categories: string[],
  filterItems: (category:string)=>void
    
}
interface ChangeCat{
    category: string,
    index:number
}

const Category = ({ categories, filterItems }:Props) => {
    const [selected, setSelected] = useState(0)
    
   
    return (
      <div className="md:sticky top-0 w-[150px]">
          <h1 className='font-bold'>Category</h1>
      {categories.map((category, index) => {
          return (
              <div
                  key={index}
                  onClick={() => setSelected(index)}
                  style={{
                      textDecoration: selected === index ? 'underline' : ""

                  }}
            
              >
                  
          <button
            type="button"
            className="flex gap-5 hover:bg-slate-500 hover:text-white hover:scale-105 transition hover:p-2 hover:rounded-lg capitalize py-1"
            key={index}
                  onClick={() => filterItems(category)}
                  
                  >
            {category}
          </button>
              </div>
        );
      })}
    </div>
  );
};

export default Category