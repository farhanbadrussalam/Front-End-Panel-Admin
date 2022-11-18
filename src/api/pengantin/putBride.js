import axios from 'axios'

export const putBride = (values, id) => {
  const response = axios.put('https://apiwo.tokoweb.live/api/brides/update/' + id, values, {
    headers: {
      'Authorization': localStorage.getItem("token"),
    }
  })
    .then(res => res)
    .catch(err => err)

  return response
}