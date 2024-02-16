import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import CartContext from "./context/CartContext";
import { useState } from "react";
import { IItem } from "./components/Item";

export default function Layout() {
  const [cart, setCart] = useState<IItem[]>([]);
  const addToCart = (item: IItem) => {
    setCart((cart) => [...cart, item]);
  };

  const removeFromCart = (itemId: number) => {
    setCart((cart) => cart.filter((item) => item.id !== itemId));
  };

  const getCartCount = () => cart.length;

  return (
    <div>
      <CartContext.Provider
        value={{ cart, addToCart, removeFromCart, getCartCount }}
      >
        <Header />
        <Outlet />
      </CartContext.Provider>
    </div>
  );
}
