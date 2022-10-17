import axios from 'axios'
import { useEffect, useState } from 'react'

export const getUsers = (url = 'http://127.0.0.1:8000/api/users') => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios.get(url, {
      headers: {
        'Authorization': 'Bearer 5|0HCSR3sQeuygpAXv5tfdoZH6ls5tkyPH9XEydT8F'
      }
    })
      .then(res => setData(res.data.data.data))
      .catch(err => setError(err))
  }, [url])

  const refetch = () => {
    axios.get(url, {
      headers: {
        'Authorization': 'Bearer 5|0HCSR3sQeuygpAXv5tfdoZH6ls5tkyPH9XEydT8F'
      }
    })
      .then(res => setData(res.data.data.data))
      .catch(err => setError(err))
  }

  return { data, error, refetch }
}
