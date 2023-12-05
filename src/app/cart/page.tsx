"use client";
import Link from "next/link";
import React from "react";
import CartItemCard from "src/components/CartItemCard";
import { TotalPriceSelector } from "src/store/features/cartSlice";
import { useAppSelector } from "src/store/store";



const CartPage = () => {
  const cartItems = useAppSelector(
    (state) => state.cart.cartItems
  );

  const totalPrice = useAppSelector(TotalPriceSelector);
   
  if (cartItems.length === 0) {
    return (<div className="mt-[200px] flex justify-center items-center capitalize font-bold p-4 text-2xl md:text-4xl">
      <div> Your cart is empty kindly shop 
      <Link href='/product' className="italic underline text-red-500 text-3xl md:text-5xl ml-2">here</Link>  
      </div>
    </div>)
  }
  return (
    <>
    <div className="p-2 mt-[100px] ">
                      {cartItems.map((item, index) => (
                        <CartItemCard key={index} cartItem={item} />
                      ))}

                      
    </div>

    <div className='flex items-center justify-end'>
              <div>
                  
                    <div className='border-2 p-4 m-8 w-[420px] rounded-lg '>
                      <div className='flex justify-between'>Subtotal : <span>$ { totalPrice.toFixed(2)}</span></div>
                        <div className='flex justify-between my-2 underline'>Shipping Fee  <span className="text-green-600 font-bold">(FREE)</span> : <span className=''>$ 0:00</span></div>
                      <div className='flex justify-between font-bold my-5 text-2xl'>Order Total : <span>$ { totalPrice.toFixed(2)}</span></div>
                    </div>
                    <div className='mx-8 w-[420px]'>
                        
                    {/* <button className='text-white p-2 bg-yellow-700 rounded-md w-full'>login</button> */}
                    </div>
              </div>
      </div>
      </>
    
  );
};

export default CartPage;

  



  


