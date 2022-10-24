import { api } from "../../configs/apiConfig";

import { useState, useEffect } from "react";

export const getArticles = () => {
  const [data, setData] = useState(null);
  const [simpleData, setSimpleData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get("articles")
      .then((res) => {
        setData(res.data.data);
        setSimpleData(
          res.data.data.map((d) => {
            return {
              name: d.title,
              status: d.status,
              article_category: d.article_category
                ? d.article_category.name
                : "",
            };
          })
        );
      })
      .catch((err) => setError(err));
  }, []);

  const refetch = () => {
    api
      .get("articles")
      .then((res) => setData(res.data.data.data))
      .catch((err) => setError(err));
  };

  // const simpleData = async () => {
  //   const simpleData = await data.map((d) => {
  //     return {
  //       name: d.title,
  //       status: d.status,
  //       article_category: d.article_category.name,
  //     };
  //   });

  //   return simpleData
  // };

  return { data, simpleData, error, refetch };
};
