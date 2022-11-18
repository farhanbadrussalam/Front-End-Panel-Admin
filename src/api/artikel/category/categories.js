import { api } from "../../../configs/apiConfig";

import { useState, useEffect } from "react";

export const getArticleCategories = (
  url = "https://apiwo.tokoweb.live/api/article-categories"
) => {
  const [data, setData] = useState([{}]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dataChangedToggle, setDataChangedToggle] = useState(false);

  useEffect(() => {
    setLoading(true);
    api
      .get("/article-categories")
      .then((res) => setData(res.data.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [dataChangedToggle]);

  const refetch = () => {
    setLoading(true);
    api
      .get("/article-categories")
      .then((res) => setData(res.data.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  const destroy = (id) => {
    api.delete(`/article-categories/destroy/${id}`);
    dataChangedToggle
      ? setDataChangedToggle(false)
      : setDataChangedToggle(true);
  };

  return { data, error, loading, refetch, destroy };
};
