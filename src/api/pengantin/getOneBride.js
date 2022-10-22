import axios from 'axios'
import { useEffect, useState } from 'react'

export const getOneBride = (id) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/brides/' + id, {
      headers: {
        'Authorization': localStorage.getItem("token"),
      }
    })
      .then(res => setData(res.data.data))
      .catch(err => setError(err))
  }, [])

  return { data, error }
}