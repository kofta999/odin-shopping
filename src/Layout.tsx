import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import CartProvider from "./providers/CartProvider";

export default function Layout() {
  return (
    <div>
      <CartProvider>
        <Header />
        <Outlet />
      </CartProvider>
    </div>
  );
}
