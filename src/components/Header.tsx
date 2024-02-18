import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";
import { IoBagOutline } from "react-icons/io5";

export default function Header() {
  const { getCartCount } = useContext(CartContext);
  return (
    <nav className="flex items-center gap-20 p-4 text-2xl">
      <Link className="mr-auto text-4xl font-bold" to="/">
        Logo
      </Link>
      <Link to="/items">Items</Link>

      <Link to="/cart" className="relative">
        <IoBagOutline size="40px" />
        <div className="absolute bottom-[-0.5rem] right-[-1rem] flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xl">
          {getCartCount()}
        </div>
      </Link>
    </nav>
  );
}
