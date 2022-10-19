import axios from 'axios'

export const deleteCustomer = async (id) => {
  const response = await axios.delete('http://127.0.0.1:8000/api/wedding-organizer-customers/destroy/' + id, {
    headers: {
      'Authorization': 'Bearer 5|0HCSR3sQeuygpAXv5tfdoZH6ls5tkyPH9XEydT8F'
    }
  })
    .then(res => res)
    .catch(err => err)

  return response
}