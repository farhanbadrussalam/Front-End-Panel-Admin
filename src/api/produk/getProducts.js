import { useEffect, useState } from "react";

import { api } from "../../configs/apiConfig";

export const getProducts = (url = "products") => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const [deleteToggle, setDeleteToggle] = useState(false)

  useEffect(() => {
    api
      .get(url)
      .then((res) => setData(res.data.data))
      .catch((err) => setError(err));
  }, [deleteToggle]);

  const refetch = () => {
    api
      .get(url)
      .then((res) => setData(res.data.data))
      .catch((err) => setError(err));
  };

  const deleteProduct = (id) => {
    const deleted = api.delete(url + '/destroy/' + id)
      .then(res => {
        setDeleteToggle(!deleteToggle)
        return res.data.success
      })
      .catch(err => setError(err))

    return deleted
  }

  return { data, error, refetch, deleteProduct };
};
