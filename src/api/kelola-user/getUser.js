import axios from 'axios'

export const getUsers = async () => {
  const response = await axios.get('http://127.0.0.1:8000/api/users', {
    headers: {
      'Authorization': 'Bearer 5|0HCSR3sQeuygpAXv5tfdoZH6ls5tkyPH9XEydT8F'
    }
  })
    .then(res => res.data.data.data)

  return response
}