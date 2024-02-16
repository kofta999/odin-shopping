import { useEffect, useState } from "react";
import { IItem } from "../components/Item";

export default function useData(url: string) {
  const [state, setState] = useState<IItem[] | null>();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error();
        }

        return res.json();
      })
      .then((data) => setState(data))
      .catch((e) => setError(e))
      .finally(() => setIsLoading(false));
  }, [url]);

  return { data: state, error, isLoading };
}
