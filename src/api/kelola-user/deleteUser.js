import axios from 'axios'

export const deleteUser = async (id) => {
  const response = await axios.delete('https://apiwo.tokoweb.live/api/users/destroy/' + id, {
    headers: {
      'Authorization': localStorage.getItem("token")
    }
  })
    .then(res => console.log(res))
    .catch(err => err)

  return response
}