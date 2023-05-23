"use client";

import { IProduct } from "@/api/getProducts";
import { useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ImageCarousel from "@/components/ImageCarousel";
import { Rate } from "antd";
import { CartContext } from "@/context";

export default function Page() {
  const [product, setProduct] = useState<IProduct | undefined>();
  const [isAdded, setIsAdded] = useState(false);
  const { cartItems, setCartItems } = useContext(CartContext);
  const pathname = usePathname();

  const AddToCart = () => {
    if (product) {
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
    }
  };

  useEffect(() => {
    fetch(`https://dummyjson.com/products${pathname}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, [pathname]);

  return (
    <div className="flex">
      <ImageCarousel images={product?.images} />
      <div className="ml-4">
        <h1 className="text-xl font-bold">{product?.title}</h1>
        <p>Description:</p>
        <h4 className="ml-1">{product?.description}</h4>
        <br />
        <p>Brand: {product?.brand}</p>
        <br />
        <p>Category: {product?.category}</p>
        <br />
        <div>
        <Rate disabled allowHalf defaultValue={product?.rating} />
        </div>
        <br />
        <div className="flex justify-start items-center">
          <p className="mr-5">{product?.price}$</p>
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
    </div>
  );
}
