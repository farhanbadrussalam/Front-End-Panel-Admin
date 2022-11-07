import { api } from "../../configs/apiConfig"
import { useState, useEffect } from "react"

export const getPesanan = (id) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    api
      .get(`sales-order-items/${id}`)
      .then((res) => {
        setData(res.data.data)
      })
      .catch((err) => {
        setError(err)
      })
  }, [])

  const refetch = () => {
    api
      .get(`articles/${id}`)
      .then((res) => setData(res.data.data.data))
      .catch((err) => setError(err))
  }

  return { data, error, refetch }
}