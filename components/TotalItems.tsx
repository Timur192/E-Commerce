import React from "react";

function TotalItems({ price }: { price: number }) {
  return (
    <div className="w-60 h-40 bg-gray-300 rounded-md p-2">
      <div className="flex justify-between">
        <p>Total</p>
        <p>{price}$</p>
      </div>
      <div className="flex flex-col items-center mt-16">
        <button className="w-full bg-red-500 text-white rounded-lg py-3 hover:bg-red-600">Checkout</button>
      </div>
    </div>
  );
}

export default TotalItems;
