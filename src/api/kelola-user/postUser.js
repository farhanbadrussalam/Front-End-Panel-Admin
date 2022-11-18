import axios from 'axios'

export const postUser = (values) => {
  const response = axios.post('https://apiwo.tokoweb.live/api/users/store', values, {
    headers: {
      'Authorization': localStorage.getItem("token")
    }
  })
    .then(res => res)
    .catch(err => err)

  return response
}