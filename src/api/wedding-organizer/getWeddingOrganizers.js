import axios from "axios";
import { useEffect, useState } from "react";

export const getWeddingOrganizers = (url = "http://127.0.0.1:8000/api/wedding-organizers") => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => setData(res.data.data.data))
      .catch((err) => setError(err));
  }, [url]);

  return { data, error };
};
