"use client";

import ItemsCount from "@/components/ItemsCount";
import TotalItems from "@/components/TotalItems";
import { CartContext } from "@/context";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";

export default function Cart() {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [totalSum, setTotalSum] = useState(0);
  
  useEffect(() => {
    cartItems?.forEach((cartItems) =>
    setTotalSum((prev) => prev + cartItems.price)
    );
  }, [cartItems]);
  
  const RemoveToCart = (id: number, price: number) => {
    const newArr = cartItems
    ? cartItems.filter((cartItems) => cartItems.id !== id)
    : null;
    setCartItems((prev) => newArr);
    setTotalSum((prev) => prev - price);
    if (cartItems?.length) return setTotalSum(0)
  };

  return cartItems ? (
    <div className="flex justify-between">
      <div>
        {cartItems.map((product) => (
          <div key={product.id} className="flex items-center h-40 m-5 p-1">
            <div className="w-36 h-36 rounded-md mr-3">
              <Image
                className="w-full h-full object-cover rounded-md"
                src={product.images[0]}
                alt={product.title}
                width={300}
                height={300}
              />
            </div>
            <div className="flex flex-col w-96">
              <h2>{product.title}</h2>
              <p className="text-gray-500">{product.description}</p>
            </div>
            <ItemsCount price={product.price} setTotalSum={setTotalSum} />
            <div>
              <p>{product.price}$</p>
              <button
                onClick={() => RemoveToCart(product.id, product.price)}
                className="px-2 py-1 rounded-md border-2 bg-red-500 text-white"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <TotalItems price={totalSum} />
    </div>
  ) : (
    <>Your basket is empty</>
  );
}
