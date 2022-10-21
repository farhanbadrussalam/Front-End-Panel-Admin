import axios from 'axios'

export const postBride = (values) => {
  const response = axios.post('http://127.0.0.1:8000/api/brides/store', values, {
    headers: {
      'Authorization': localStorage.getItem("token"),
    }
  })
    .then(res => res)
    .catch(err => err)

  return response
}