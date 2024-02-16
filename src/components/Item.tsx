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
    <div className="flex w-96 shrink-0 flex-col items-center justify-center gap-4 rounded-2xl bg-card p-4">
      <img src={image} alt={title} className="size-64" />
      <h2 className="text-2xl">{title}</h2>
      <p className="mb-auto">{description}</p>
      <div className="flex w-full justify-evenly">
        <h3>{category}</h3>
        <h4>{price}$</h4>
      </div>
      <button className="rounded-xl bg-primary px-10 py-2 text-xl">
        Add To Cart
      </button>
    </div>
  );
}
