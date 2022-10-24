import { api } from "../../../configs/apiConfig";

import { useState, useEffect } from "react";

export const getArticleCategories = (
  url = "http://127.0.0.1:8000/api/article-categories"
) => {
  const [data, setData] = useState([]);
  const [simpleData, setSimpleData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api
      .get("/article-categories")
      .then((res) => {
        setData(res.data.data);
        setSimpleData(
          res.data.data.map((d) => {
            return {
              name: d.name,
              description: d.description,
            };
          })
        );
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  const refetch = () => {
    setLoading(true);
    api
      .get("/article-categories")
      .then((res) => {
        setData(res.data.data);
        setSimpleData(
          res.data.data.map((d) => {
            return {
              name: d.name,
              description: d.description,
            };
          })
        );
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  return { data, simpleData, error, loading, refetch };
};
