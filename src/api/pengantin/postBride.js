import axios from 'axios'

export const postBride = (values) => {
  const response = axios.post('https://apiwo.tokoweb.live/api/brides/store', values, {
    headers: {
      'Authorization': localStorage.getItem("token"),
    }
  })
    .then(res => res)
    .catch(err => err)

  return response
}