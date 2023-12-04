import React from "react";
//import { Button } from "./elements";
import { TrashIcon } from "@heroicons/react/24/solid";
interface Props {
  onIncrease: () => void;
  onDecrease: () => void;
  qty: number;
}
const QtyBtn = (props: Props) => {
  return (
    <div className="flex gap-1 md:gap-2 font-bold border-2 rounded-lg w-fit md:p-2 justify-center items-center">
      <button
        className="w-7 md:w-12 h-10 text-lg md:text-4xl font-bold"
        onClick={props.onDecrease}
      >
        {props.qty === 1 ? (
          <TrashIcon className="w-4 " />
        ) : (
          "-"
        )}
      </button>
      <p className=""> {props.qty}</p>
      <button
        className="w-7 md:w-12 h-10 "
        onClick={props.onIncrease}
      >
        +
      </button>
    </div>
  );
};

export default QtyBtn;
