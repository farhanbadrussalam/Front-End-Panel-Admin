import axios from 'axios'
import { useEffect, useState } from 'react'
import { api } from "../../configs/apiConfig";

export const getProducts = (url = 'wedding-organizer-products') => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  const [deleted, setDeleted] = useState(null)
  const [deleteToggle, setDeleteToggle] = useState(false)

  useEffect(() => {
    api.get(url)
      .then(res => setData(res.data.data))
      .catch(err => setError(err))
  }, [deleteToggle])

  const deleteProduct = () => {
    api.delete(url + '/destroy', id)
      .then(res => {
        setDeleted(res.data.data)
        setDeleteToggle(!deleteToggle)
      })
      .catch(err => setError(err))
  }

  return { data, error, deleted, deleteProduct }
}
