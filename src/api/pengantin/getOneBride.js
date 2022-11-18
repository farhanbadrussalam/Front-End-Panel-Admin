import axios from 'axios'
import { useEffect, useState } from 'react'

export const getOneBride = (id) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios.get('https://apiwo.tokoweb.live/api/brides/' + id, {
      headers: {
        'Authorization': localStorage.getItem("token"),
      }
    })
      .then(res => setData(res.data.data))
      .catch(err => setError(err))
  }, [])

  return { data, error }
}