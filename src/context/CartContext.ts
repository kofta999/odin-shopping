import { createContext } from "react";
import { IItem } from "../components/Item";

interface ICartContext {
  cart: IItem[];
  addToCart: (item: IItem) => void;
  removeFromCart: (itemId: number) => void;
  getCartCount: () => number;
}

const CartContext = createContext<ICartContext>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  getCartCount: () => 0,
});

export default CartContext;
