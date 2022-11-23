import { useEffect, useState } from 'react'
import { api } from '../../configs/apiConfig'

export const getOneUser = (id) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    api.get('users/' + id)
      .then(res => setData(res.data.data))
      .catch(err => setError(err))
  }, [])

  return { data, error }
}