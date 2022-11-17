import { useEffect, useState } from 'react'
import { api } from '../../../configs/apiConfig'

export const getOneProductCategory = (id) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    api.get('product-categories/' + id)
      .then(res => setData(res.data.data))
      .catch(err => setError(err))
  }, [])

  return { data, error }
}