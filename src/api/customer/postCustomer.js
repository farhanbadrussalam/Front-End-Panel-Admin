import axios from 'axios'

export const postCustomer = (values) => {
  const response = axios.post('https://apiwo.tokoweb.live/api/wedding-organizer-customers/store', values, {
    headers: {
      'Authorization': localStorage.getItem("token")
    }
  })
    .then(res => res)
    .catch(err => err)

  return response
}