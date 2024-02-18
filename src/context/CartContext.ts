import { createContext } from "react";
import { IItem } from "../components/Item";

export type ICartItem = IItem & { qty: number };

interface ICartContext {
  cart: ICartItem[];
  addToCart: (item: IItem) => void;
  removeFromCart: (itemId: number) => void;
  getCartCount: () => number;
  incQty: (itemId: number) => void;
  decQty: (itemId: number) => void;
  emptyCart: () => void;
}

const CartContext = createContext<ICartContext>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  getCartCount: () => 0,
  incQty: () => {},
  decQty: () => {},
  emptyCart: () => {},
});

export default CartContext;
