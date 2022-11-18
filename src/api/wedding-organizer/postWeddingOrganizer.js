import axios from 'axios'

export const postWeddingOrganizer = (values) => {
  const response = axios.post('https://apiwo.tokoweb.live/api/wedding-organizers/store', values, {
    headers: {
      'Authorization': localStorage.getItem("token")
    }
  })
    .then(res => res)
    .catch(err => err)

  return response
}