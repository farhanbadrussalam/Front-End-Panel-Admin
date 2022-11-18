import axios from 'axios'

export const putUser = async (values, id) => {
  const response = await axios.put('https://apiwo.tokoweb.live/api/users/update/' + id, values, {
    headers: {
      'Authorization': localStorage.getItem("token")
    }
  })
    .then(res => res)
    .catch(err => err)

  return response
}