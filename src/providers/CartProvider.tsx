import { PropsWithChildren, useState } from "react";
import { IItem } from "../components/Item";
import CartContext, { ICartItem } from "../context/CartContext";

export default function CartProvider({ children }: PropsWithChildren) {
  const [cart, setCart] = useState<ICartItem[]>([]);

  const addToCart = (item: IItem) => {
    const idx = cart.findIndex((cartItem) => cartItem.id === item.id);
    const newCart = [...cart];

    if (idx !== -1) {
      newCart[idx] = { ...item, qty: newCart[idx].qty! + 1 };
    } else {
      newCart.push({ ...item, qty: 1 });
    }

    setCart(newCart);
  };

  const removeFromCart = (itemId: number) => {
    setCart((cart) => cart.filter((item) => item.id !== itemId));
  };

  const getCartCount = () => cart.length;

  const modifyQty = (itemId: number, amount: number) => {
    setCart((cart) =>
      cart.map((item) =>
        item.id === itemId
          ? { ...item, qty: item.qty + amount >= 0 ? item.qty + amount : 0 }
          : item,
      ),
    );
  };

  const incQty = (itemId: number) => {
    modifyQty(itemId, 1);
  };

  const decQty = (itemId: number) => {
    modifyQty(itemId, -1);
  };

  const emptyCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        getCartCount,
        decQty,
        incQty,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
