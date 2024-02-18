import { ICartItem } from "../context/CartContext";

type mutateCartFunc = (itemId: number) => void;

interface Props {
  item: ICartItem;
  removeFromCart: mutateCartFunc;
  incQty: mutateCartFunc;
  decQty: mutateCartFunc;
}

const QtyButton = ({
  id,
  qtyModifier,
  symbol,
}: {
  qtyModifier: mutateCartFunc;
  symbol: string;
  id: number;
}) => {
  return (
    <button
      onClick={() => qtyModifier(id)}
      className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-300 p-4 text-3xl font-light hover:bg-blue-700 hover:text-white active:bg-blue-900 active:text-white"
    >
      {symbol}
    </button>
  );
};

export default function CartItem({
  item,
  removeFromCart,
  decQty,
  incQty,
}: Props) {
  const { id, image, title, price, qty } = item;
  return (
    <div className="grid w-3/4 grid-cols-[6rem_1fr_0.5fr] grid-rows-2 gap-6 rounded-2xl bg-card p-10 text-xl shadow-xl">
      <img className="row-span-2 w-24" src={image} alt={title} />
      <h1>{title}</h1>
      <div className="flex items-center gap-2">
        <h3 className="mr-auto">
          Quantity: <span className="text-2xl">{qty}</span>
        </h3>
        <QtyButton symbol="+" qtyModifier={incQty} id={id} />
        <QtyButton symbol="-" qtyModifier={decQty} id={id} />
      </div>
      <h2>
        Total: $<span className="text-2xl">{(price * qty).toFixed(2)}</span>
      </h2>
      <button
        className="rounded-2xl bg-red-500 text-white hover:bg-red-700 active:bg-red-900"
        onClick={() => removeFromCart(id)}
      >
        Remove From Cart
      </button>
    </div>
  );
}
