import Item from "../components/Item";
import useData from "../utils/useData";

const itemsUrl = "https://fakestoreapi.com/products";

export default function Items() {
  const { data, error, isLoading } = useData(itemsUrl);
  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Error</h1>}
      {data && data.map((item) => <Item key={item.id} {...item} />)}
    </div>
  );
}
