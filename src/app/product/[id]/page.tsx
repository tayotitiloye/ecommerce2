
//import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
//import AddToCartBtn from 'src/components/AddToCartBtn'
import SingleCartCont from 'src/components/SingleCartCont'
// import AddToCart from 'src/components/AddToCart'
// import AddToCartBtn from 'src/components/AddToCartBtn'

export type Product = {
  id: number
      image: string
      price: number
      title: string
     category?: string
    description: string
     quantity:   number
       
}

// interface Props {
//   onIncrease: () => void;
//   onDecrease: () => void;
//   qty: number;
// }
    
async function getData(id:number) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    
    if (!res.ok) {
        throw new Error('unable to fetch data')
    }

    return res.json()
}


export const revalidate = 0;

const SingleProduct = async ({params}:{params: {id: number}}) => {


    const data: Product = await getData(params.id)


    
    

  return (
      <div>
            <div className='bg-orange-100 px-4 text-yellow-800 my-8 md:px-6 md:text-4xl h-32 flex items-center justify-start text-2xl md:6xl font-bold mt-[100px]'>
                <Link href='/'>
                    
                    Home
              </Link>
              <Link href='/product'>
              <span className=' text-yellow-800 px-4'>/ Product</span>
              </Link>
               <span className=' text-yellow-950'>/ Single</span>

            </div>
          <div>
              <Link href='/product'>
                   <button className='uppercase p-2 text-white rounded-md text-lg bg-text-yellow-800'>back to products</button>
              </Link>
          </div>
          
          <SingleCartCont data={ data} />
          {/* <AddToCart product={ data} />
           */}
         
    </div>
  )
}

export default SingleProduct





