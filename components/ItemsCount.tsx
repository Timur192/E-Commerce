"use client";

import { Dispatch, SetStateAction, useState } from "react";

function ItemsCount({price, setTotalSum}: {price: number, setTotalSum: Dispatch<SetStateAction<number>>}) {
  const [count, setCount] = useState(1);

  const Increment = () => {
    setCount((prev) => prev + 1);
    setTotalSum((prev) => prev + price);
  };

  const Decrement = () => {
    if (count != 1) {
      setCount((prev) => prev - 1);
      setTotalSum((prev) => prev - price);
    } else {
      return;
    }
  };

  return (
    <div className="flex items-center border-2 h-10 rounded-lg mx-6">
      <button onClick={Decrement} className="px-2 py-1 rounded-md text-black">
        -
      </button>
      <p className="mx-2">{count}</p>
      <button onClick={Increment} className="px-2 py-1 rounded-md text-black">
        +
      </button>
    </div>
  );
}

export default ItemsCount;
