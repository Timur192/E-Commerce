import getAllCategories from "@/api/getAllCategories";
import getProducts, { IProducts } from "@/api/getProducts";
import Categories from "@/components/Categories";
import ProductCard from "@/components/ProductCard";

export default async function Home() {
  const { products }: IProducts = await getProducts();
  const categories = await getAllCategories();

  return (
    <div className="flex justify-around">
      <Categories categories={categories} />
      <div className="grid grid-cols-4 gap-4 justify-items-center">
        {products.map((product) => (
            <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
}
