export interface IItem {
  id: 1;
  title: string;
  price: string;
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
}: Omit<IItem, "id">) {
  return (
    <div>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <h3>{category}</h3>
      <h4>{price}</h4>
    </div>
  );
}
