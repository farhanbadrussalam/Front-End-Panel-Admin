import { api } from "../../configs/apiConfig"
import { useState, useEffect } from "react"

export const getOneCommission = (id, url = "commission-history") => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    api
      .get(`${url}/${id}`)
      .then((res) => {
        setData(res.data.data)
      })
      .catch((err) => {
        setError(err)
      })
  }, [])

  return { data, error }
}