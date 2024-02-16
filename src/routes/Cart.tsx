import { useContext } from "react";
import CartContext from "../context/CartContext";
import CartItem from "../components/CartItem";

export default function Cart() {
  const { cart, getCartCount, removeFromCart, incQty, decQty } =
    useContext(CartContext);

  let totalCost = 0;

  return getCartCount() > 0 ? (
    <div className="flex flex-col justify-center gap-10">
      <div className="flex flex-col items-center gap-10">
        {cart.map((item) => {
          totalCost += item.qty * item.price;
          return (
            <CartItem
              key={item.id}
              item={item}
              removeFromCart={removeFromCart}
              incQty={incQty}
              decQty={decQty}
            />
          );
        })}
      </div>
      <div className="flex items-center justify-evenly">
        <div className="text-4xl">Total Cost: ${totalCost}</div>
        <button className="text-white bg-green-500 hover:bg-green-700 active:bg-green-900 rounded-2xl px-24 py-6 text-3xl">
          Checkout
        </button>
      </div>
    </div>
  ) : (
    <h1>No items in cart</h1>
  );
}
