import axios from 'axios'
import { useEffect, useState } from 'react'

export const getBrides = (url = 'https://apiwo.tokoweb.live/api/brides') => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios.get(url, {
      headers: {
        'Authorization': localStorage.getItem("token"),
      }
    })
      .then(res => setData(res.data.data))
      .catch(err => setError(err))
  }, [url])

  return { data, error }
}
