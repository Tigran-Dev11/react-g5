import { useEffect, useState } from "react";

export const useFetch = ({ url }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const data = await fetch(url);
        const response = await data.json();

        setData(response);
      } catch (error) {
        setError(error?.message)
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [url]);

  return { data, error, loading };
};
