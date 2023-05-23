import getAllCategories from "@/api/getAllCategories";
import { IProducts } from "@/api/getProducts";
import getSearchProducts from "@/api/getSearchProducts";
import Categories from "@/components/Categories";
import ProductCard from "@/components/ProductCard";
import React from "react";

export default async function page({ params }: { params: { q: string } }) {
  const { products, total }: IProducts = await getSearchProducts(params.q);
  const categories = await getAllCategories();

  return (
    <div className="flex justify-around">
      {total != 0 ? (
        <>
        <Categories categories={categories} />
          <div className="grid grid-cols-4 gap-4 justify-items-center">
            {products.map((product) => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </>
      ) : (
        <div>Sorry, no results were found for your search</div>
      )}
    </div>
  );
}
