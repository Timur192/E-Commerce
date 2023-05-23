'use client'

import { IProduct } from "@/api/getProducts";
import { ReactNode, createContext, useState } from "react";

interface ICartContext {
  cartItems: IProduct[] | null;
  setCartItems: (product: (prev: IProduct[] | null) => IProduct[] | null) => void;
}

export const CartContext = createContext<ICartContext>({
  cartItems: null,
  setCartItems: () => {},
});

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<IProduct[] | null>(null);

  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems }}
    >
      {children}
    </CartContext.Provider>
  );
}
