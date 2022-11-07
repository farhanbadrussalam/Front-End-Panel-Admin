import { api } from "../../configs/apiConfig";

import { useState, useEffect } from "react";

export const getOrders = () => {
  const [data, setData] = useState([{}])
  const [error, setError] = useState(null)
  const [dataChangedToggle, setDataChangedToggle] = useState(false);

  useEffect(() => {
    api
      .get("sales-order-items")
      .then((res) => setData(res.data.data))
      .catch((err) => setError(err))
  }, [])

  const refetch = () => {
    api
      .get("sales-order-items")
      .then((res) => setData(res.data.data.data))
      .catch((err) => setError(err));
  }

  return { data, error, refetch }
}