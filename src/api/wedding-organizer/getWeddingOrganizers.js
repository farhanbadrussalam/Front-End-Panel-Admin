import { api } from "../../configs/apiConfig";
import { useEffect, useState } from "react";

export const getWeddingOrganizers = (url = "wedding-organizers") => {
  const [data, setData] = useState([null])
  const [error, setError] = useState(null)
  const [deleteToggle, setDeleteToggle] = useState(false);

  useEffect(() => {
    api
      .get(`${url}`)
      .then((res) => setData(res.data.data))
      .catch((err) => setError(err))
  }, [deleteToggle])

  const deleteWO = async (id) => {
    const isDeleted = await api.delete(`${url}/destroy/${id}`)
      .then(res => {
        setDeleteToggle(!deleteToggle)
        return res.data.success
      })
      .catch(err => setError(err))

    return isDeleted
  }

  return { data, error, deleteWO }
};
