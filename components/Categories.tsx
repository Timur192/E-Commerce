import Link from "next/link";
import React from "react";

function Categories({ categories }: { categories: [string] }) {
  return (
    <div>
      <h1 className="text-lg">Categories</h1>
      <ul className="ml-2">
        {categories.map((category) => (
          <li className="text-sm my-1"><Link href={`/category/${category}`}>{category}</Link></li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
