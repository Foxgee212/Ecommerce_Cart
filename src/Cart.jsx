import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { PaystackButton } from "react-paystack";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const publicKey = "your_paystack_public_key"; // put your key here
  const email = "customer@example.com";

  const componentProps = {
    email,
    amount: totalAmount * 100, // convert to kobo
    publicKey,
    text: "Checkout Now",
    onSuccess: (res) => {
      alert("Payment Successful! Reference: " + res.reference);
      clearCart();
    },
    onClose: () => alert("Payment closed"),
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between p-2 border-b">
                <div className="w-2xs">
                  <img src={`${import.meta.env.BASE_URL}${item.image}`}  alt={item.name} className="h-30 mx-auto float-left"/>
                  <div className="flex items-start flex-col">
                  <span className="ml-6 text-2xl font-medium ">{item.name}</span>
                  <span className="ml-6  bg-gray-200 p-2 rounded-2xl font-medium">{item.qty}</span>
                  <span className="ml-6 font-n">₦{(item.price * item.qty).toLocaleString()}</span>

                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h3 className="mt-4 font-semibold">
            Total: ₦{totalAmount.toLocaleString()}
          </h3>
          <PaystackButton {...componentProps} className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg" />
        </>
      )}
    </div>
  );
}

