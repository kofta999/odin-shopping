import { ICartItem } from "../context/CartContext";

type mutateCartFunc = (itemId: number) => void;

interface Props {
  item: ICartItem;
  removeFromCart: mutateCartFunc;
  incQty: mutateCartFunc;
  decQty: mutateCartFunc;
}

export default function CartItem({
  item,
  removeFromCart,
  decQty,
  incQty,
}: Props) {
  const { id, image, title, price, qty } = item;
  return (
    <div>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <h2>{price}</h2>
      <div>
        <h3>Quantity {qty}</h3>
        <button onClick={() => incQty(id)}>+</button>
        <button onClick={() => decQty(id)}>-</button>
      </div>
      <button onClick={() => removeFromCart(id)}>Remove From Cart</button>
    </div>
  );
}
