import { useEffect, useState } from 'react';
import { api } from '../../../configs/apiConfig';

export const getProductCategory2 = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [deleteToggle, setDeleteToggle] = useState(null)

  useEffect(() => {
    api
      .get("product-categories")
      .then((res) => setData(res.data.data))
      .catch((err) => setError(err));

  }, [deleteToggle])

  const deleteProduct = (id) => {
    const deleted = api.delete(url + '/destroy/' + id)
      .then(res => {
        setDeleteToggle(!deleteToggle)
        return res.data.success
      })
      .catch(err => setError(err))

    return deleted
  }

  return { data, error, deleteProduct }
}
