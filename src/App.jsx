
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { CartProvider } from "./CartContext";
import ProductList from "./ProductList";
import Cart from "./Cart";
import { FaShoppingCart } from "react-icons/fa"; // Import cart icon
import { FaHome } from "react-icons/fa";

function App() {
  return (
    <CartProvider>
      <Router>
        <nav className="p-4 bg-gray-800 text-white flex justify-between">
          <Link to="/"> <FaHome size={30} className="hover:text-blue-500" />Shop</Link>
          <Link to="/cart"><FaShoppingCart size={28} className="hover:text-blue-500" /></Link>
        </nav>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
