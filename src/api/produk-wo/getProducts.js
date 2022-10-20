import { useEffect, useState } from "react";

import { api } from "../../configs/apiConfig";

export const getProducts = (url = "products") => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get(url)
      .then((res) => setData(res.data.data))
      .catch((err) => setError(err));
  }, [url]);

  const refetch = () => {
    api
      .get(url)
      .then((res) => setData(res.data.data))
      .catch((err) => setError(err));
  };

  return { data, error, refetch };
};
