import React, { useContext } from "react";
import products from "./products";
import { CartContext } from "./CartContext";

export default function ProductList() {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="grid grid-cols-4 gap-6 p-6 mx-20">
      {products.map((p) => (
        <div key={p.id} className="bg-white shadow-lg rounded-xl p-4 text-center">
          <img src={`${import.meta.env.BASE_URL}${p.image}`} alt={p.name} className="h-40 mx-auto" />
          <h3 className="text-lg font-semibold">{p.name}</h3>
          <p className="text-gray-600">₦{p.price.toLocaleString()}</p>
          <button
            onClick={() => addToCart(p)}
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}