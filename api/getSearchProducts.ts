export default async function getSearchProducts(search: string) {
    const res = await fetch(
      `https://dummyjson.com/products/search?q=${search}`
    );
  
    return res.json();
  }
  