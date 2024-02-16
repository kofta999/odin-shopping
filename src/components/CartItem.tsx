import { IItem } from "./Item";

export default function CartItem({
  image,
  price,
  title,
}: Omit<IItem, "description" | "category" | "id">) {
  return (
    <div>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <h2>{price}</h2>
    </div>
  );
}
