import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";

export default function Header() {
  const { getCartCount } = useContext(CartContext);
  return (
    <nav className="flex items-center gap-20 p-4 text-2xl">
      <Link className="mr-auto text-4xl font-bold" to="/">
        Logo
      </Link>
      <Link to="/items">Items</Link>
      <Link to="/cart">Cart {getCartCount()}</Link>
    </nav>
  );
}
