import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const useFetch = (url: string, params?: any) => {
  const { isOpen } = useSelector((state: any) => state.modal);
  const [data, setData] = useState<any>([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCtrl = new AbortController();
    const fetchParams = params
      ? { signal: abortCtrl.signal, ...params }
      : { signal: abortCtrl.signal };

    fetch(url, fetchParams)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data");
        }
        return res.json();
      })
      .then((data) => {
        setIsPending(false);
        setData(data);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          setIsPending(false);
          setError(err.message);
        }
      });

    return () => abortCtrl.abort();
  }, [url, params, isOpen]);

  return { data, isPending, error };
};
