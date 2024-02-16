import { useContext } from "react";
import CartContext from "../context/CartContext";

export interface IItem {
  id: 1;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export default function Item({
  title,
  description,
  category,
  image,
  price,
  id,
}: IItem) {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="flex w-96 shrink-0 flex-col items-center justify-center gap-4 rounded-2xl bg-card p-4 shadow-xl">
      <img src={image} alt={title} className="size-64" />
      <h2 className="text-2xl">{title}</h2>
      <p className="mb-auto">{description}</p>
      <div className="flex w-full justify-evenly">
        <h3>{category}</h3>
        <h4>{price}$</h4>
      </div>
      <button
        className="bg-green-500 hover:bg-green-700 active:bg-green-900 text-white rounded-xl px-10 py-2 text-xl"
        onClick={() =>
          addToCart({ category, description, id, image, price, title })
        }
      >
        Add To Cart
      </button>
    </div>
  );
}
