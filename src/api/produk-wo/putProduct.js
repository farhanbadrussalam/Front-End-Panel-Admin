import axios from 'axios'

export const putBride = (values, id) => {
  const response = axios.put('http://127.0.0.1:8000/api/brides/update/' + id, values, {
    headers: {
      'Authorization': localStorage.getItem("token"),
    }
  })
    .then(res => res)
    .catch(err => err)

  return response
}