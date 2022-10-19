import axios from 'axios'

export const deleteUser = async (id) => {
  const response = await axios.delete('http://127.0.0.1:8000/api/users/destroy/' + id, {
    headers: {
      'Authorization': 'Bearer 5|0HCSR3sQeuygpAXv5tfdoZH6ls5tkyPH9XEydT8F'
    }
  })
    .then(res => console.log(res))
    .catch(err => err)

  return response
}