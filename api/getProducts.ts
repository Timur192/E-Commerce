export interface IProducts {
  products: IProduct[]
  total: number
  skip: number
  limit: number
}

export interface IProduct {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}

export default async function getProducts() {
  const res = await fetch("https://dummyjson.com/products");

  return res.json();
}
