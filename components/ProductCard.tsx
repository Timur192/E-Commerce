"use client";

import { IProduct } from "@/api/getProducts";
import Image from "next/image";
import { Rate } from "antd";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/context";
import Link from "next/link";

function ProductCard({ product }: { product: IProduct }) {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    cartItems?.forEach((cartItems) => {
      if (cartItems.id == product.id) return setIsAdded(true);
    });
  }, []);

  const AddToCart = () => {
    if (!isAdded) {
      setIsAdded(true);
      setCartItems((prev) => (prev ? [...prev, product] : [product]));
    } else {
      const newArr = cartItems
        ? cartItems.filter((cartItems) => cartItems.id !== product.id)
        : null;
      setIsAdded(false);
      setCartItems((prev) => newArr);
    }
  };

  return (
    <div className="w-48 h-64 m-5 p-1 rounded-md">
      <Link href={`/${product.id}`}>
        <div className="w-auto h-36 rounded-md mb-1">
          <Image
            className="w-full h-full object-cover rounded-md"
            src={product.images[0]}
            alt={product.title}
            width={300}
            height={300}
          />
        </div>
        <h2>{product.title}</h2>
        <div className="flex items-center my-2">
          <Rate disabled allowHalf defaultValue={product.rating} />
          <p className="ml-3 mt-2">{product.rating}</p>
        </div>
      </Link>
      <div className="flex justify-between items-center mt-2">
        <p>{product.price}$</p>
        <button
          onClick={AddToCart}
          className={`px-2 py-1 rounded-md border-2 ${
            !isAdded
              ? "bg-red-500 text-white"
              : "text-red-500 border-2 border-red-500 "
          }`}
        >
          {!isAdded ? "Add" : "Remove"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
