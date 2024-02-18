import Item from "../components/Item";
import LoadingSpinner from "../components/LoadingSpinner";
import Status from "../components/Status";
import useData from "../utils/useData";

const itemsUrl = "https://fakestoreapi.com/products";

export default function Items() {
  const { data, error, isLoading } = useData(itemsUrl);
  return (
    <>
      {isLoading && <LoadingSpinner size="large" />}
      {error && <Status status="Error happened while fetching items" />}
      <div className="grid grid-cols-[repeat(auto-fit,24rem)] justify-center gap-10 ">
        {data && data.map((item) => <Item key={item.id} {...item} />)}
      </div>
    </>
  );
}
