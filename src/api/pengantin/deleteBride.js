import axios from 'axios'

export const deleteBride = async (id) => {
  const response = await axios.delete('http://127.0.0.1:8000/api/brides/destroy/' + id, {
    headers: {
      'Authorization': localStorage.getItem("token"),
    }
  })
    .then(res => res)
    .catch(err => err)

  return response
}