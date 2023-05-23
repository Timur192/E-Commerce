import getAllCategories from "@/api/getAllCategories";
import { IProducts } from "@/api/getProducts";
import getProductsCategory from "@/api/getProductsCategory";
import Categories from "@/components/Categories";
import ProductCard from "@/components/ProductCard";
import React from "react";

export default async function page({params}: {params: { category: string }}) {
  const { products }: IProducts = await getProductsCategory(params.category);
  const categories = await getAllCategories();

  return (
    <div className="flex justify-around">
      <div className="absolute top-20 bg-red-500 text-white py-1 px-2 rounded-b-lg">
        Category: {params.category}
      </div>
      <Categories categories={categories} />
      <div className="grid grid-cols-4 gap-4 justify-items-center">
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
