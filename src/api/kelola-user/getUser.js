import axios from "axios";
import { useEffect, useState } from "react";

export const getUsers = (url = "https://apiwo.tokoweb.live/api/users") => {
  const [data, setData] = useState(null);
  const [type, setType] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setData(res.data.data.users)
        setType(res.data.data.types)
      })
      .catch((err) => setError(err));
  }, [url]);

  const refetch = () => {
    axios
      .get(url, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => setData(res.data.data.data))
      .catch((err) => setError(err));
  };

  return { data, type, error, refetch };
};
