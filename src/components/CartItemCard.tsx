'use client'

import Image from "next/image";
import React from "react";
import {
  decrement,
  increment,
} from "src/store/features/cartSlice";
import { useAppDispatch } from "src/store/store";
import QtyBtn from "./QtyBtn";
import { CartItem } from "src/app/utilis/interfaces";
import {motion} from 'framer-motion'
import { slideInFromLeft } from "src/app/utilis/motion";


interface Props {
  cartItem: CartItem;
}
const CartItemCard = ({ cartItem }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <motion.div
      variants={slideInFromLeft(.3)}
      initial='hidden'
      whileInView= 'visible'
      className="grid grid-cols-3 md:grid-cols-4 items-center py-2 border-b-2">
      <Image
        src={cartItem.product.image}
        width={200}
        height={150}
        alt={cartItem.product.title}
        className="rounded-md"
      />
      <p className="text-slate-600 hidden md:block text-center">
        {cartItem.product.title}
      </p>
      <div className="flex flex-col items-center justify-center gap-3">
        <p>{cartItem.product.price} $</p>
        <p>&#xd7;</p>
        <QtyBtn
          qty={cartItem.qty}
          onDecrease={() =>
            dispatch(decrement(cartItem.product))
          }
          onIncrease={() =>
            dispatch(increment(cartItem.product))
          }
        />
      </div>
      <p className="text-center">
        {(cartItem.qty * cartItem.product.price).toFixed(2)} $
      </p>
    </motion.div>
  );
};

export default CartItemCard;
