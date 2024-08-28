import { useEffect, useState } from "react";

const useFecth = (url) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((res) => {
        if (res.status === 500) {
          throw Error("Oops! Something went wrong... Please refresh the page.");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);

        console.log(error);
      });
  }, [url]);

  return { data, error, isLoading };
};

export default useFecth;
