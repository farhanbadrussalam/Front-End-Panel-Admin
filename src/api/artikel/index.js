import { api } from "../../configs/apiConfig";

import { useState, useEffect } from "react";

export const getArticles = () => {
  const [data, setData] = useState([{}]);
  const [error, setError] = useState(null);
  const [dataChangedToggle, setDataChangedToggle] = useState(false);

  useEffect(() => {
    api
      .get("articles")
      .then((res) => setData(res.data.data))
      .catch((err) => setError(err));
  }, [dataChangedToggle]);

  const refetch = () => {
    api
      .get("articles")
      .then((res) => setData(res.data.data.data))
      .catch((err) => setError(err));
  };

  const destroy = (id) => {
    setError(
      api.delete(`/articles/destroy/${id}`).catch((err) => setError(err))
    );
    dataChangedToggle
      ? setDataChangedToggle(false)
      : setDataChangedToggle(true);
  };

  return { data, error, refetch, destroy };
};
