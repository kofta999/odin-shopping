import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="flex gap-20 p-4 text-2xl items-center">
      <Link className="mr-auto text-4xl" to="/">Logo</Link>
      <Link to="/items">Items</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  );
}
