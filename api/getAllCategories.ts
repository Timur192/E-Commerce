export default async function getAllCategories() {
  const res = await fetch("https://dummyjson.com/products/categories");

  return res.json();
}
