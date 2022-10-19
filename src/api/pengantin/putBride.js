import axios from 'axios'

export const putUser = async (values, id) => {
  const response = await axios.put('http://127.0.0.1:8000/api/users/update/' + id, values, {
    headers: {
      'Authorization': 'Bearer 5|0HCSR3sQeuygpAXv5tfdoZH6ls5tkyPH9XEydT8F'
    }
  })
    .then(res => res)
    .catch(err => err)

  return response
}