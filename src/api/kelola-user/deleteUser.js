import axios from 'axios'

export const deleteUser = async (id) => {
  const response = await axios.delete('http://127.0.0.1:8000/api/users/destroy/' + id, {
    headers: {
      'Authorization': localStorage.getItem("token")
    }
  })
    .then(res => console.log(res))
    .catch(err => err)

  return response
}