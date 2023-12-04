"use client";

import React from "react";
import {
  decrement,
  increment,
  productQtyInCartSelector,
} from "src/store/features/cartSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "src/store/store";
import { Button } from "./elements";
import QtyBtn from "./QtyBtn";

type Product = { id: number
      image: string
      price: number
      title: string
     category?: string
    description: string
       
}

interface Props {
  product: Product;
} 

const AddToCartBtn = (props: Props) => {
  const qty = useAppSelector((state) =>
    productQtyInCartSelector(state, props.product.id)
  );
  const dispatch = useAppDispatch();
  if (!qty)
    return (
      <div className="flex justify-center">
        <Button
          onClick={() => dispatch(increment(props.product))}
          
        >
          Add To Cart
        </Button>
      </div>
    );
  return (
    <QtyBtn
      onDecrease={() => dispatch(decrement(props.product))}
      onIncrease={() => dispatch(increment(props.product))}
      qty={qty}
    />
  );
};

export default AddToCartBtn;


