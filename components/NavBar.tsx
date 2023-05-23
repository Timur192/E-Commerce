"use client";

import { CartContext } from "@/context";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import { ChangeEvent, SetStateAction, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function NavBar() {
  const [searchProduct, setSearchProduct] = useState("");
  const { cartItems } = useContext(CartContext);
  const router = useRouter();

  const Search = () => {
    if (searchProduct == "") {
      return router.push(`/search/IPhone`);
    } else {
      setSearchProduct("");
      return router.push(`/search/${searchProduct}`);
    }
  };

  const change = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchProduct(e.target.value)
  }

  return (
    <div className="flex justify-between items-center w-full h-16 bg-red-500 my-4 p-4 rounded-md">
      <Link href="/">
        <h1 className="text-white">Products</h1>
      </Link>
      <div className="flex">
        <input
          className=" placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 shadow-sm focus:outline-none sm:text-sm"
          value={searchProduct}
          onChange={change}
          placeholder="IPhone"
        />
        <button
          onClick={Search}
          className="bg-white rounded-md ml-1 py-1 px-2 hover:bg-slate-100 text-gray-800 text-sm"
        >
          Search
        </button>
      </div>
      <Link href="/cart">
        <Badge count={cartItems?.length}>
          <div className="bg-white w-10 h-10 flex justify-center items-center rounded-md">
            <ShoppingCartOutlined />
          </div>
        </Badge>
      </Link>
    </div>
  );
}

export default NavBar;
