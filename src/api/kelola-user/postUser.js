import axios from 'axios'

export const postUser = (values) => {
  axios.post('http://127.0.0.1:8000/api/users/store', values, {
    headers: {
      'Authorization': 'Bearer 5|0HCSR3sQeuygpAXv5tfdoZH6ls5tkyPH9XEydT8F'
    }
  })
    .then(res => console.log(res))
    .catch(err => console.log(err))
}