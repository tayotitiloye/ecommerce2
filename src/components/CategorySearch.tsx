import React from 'react'

interface Props{

  categories: string[],
  filterItems: (category:string)=>void
    //filterItems: any,
    
}

const CategorySearch = ({ categories, filterItems }:Props) => {
  return (
    <div className="">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="flex border-2 bg-yellow-800 text-white w-fit"
            key={index}
             onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default CategorySearch