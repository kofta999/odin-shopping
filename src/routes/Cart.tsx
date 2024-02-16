import { useContext } from "react";
import CartContext from "../context/CartContext";
import CartItem from "../components/CartItem";

export default function Cart() {
  const { cart, getCartCount } = useContext(CartContext);

  return getCartCount() > 0 ? (
    <div>
      {cart.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
    </div>
  ) : (
    <h1>No items in cart</h1>
  );
}
