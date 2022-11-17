import axios from 'axios'

export const deleteCustomer = async (id) => {
  const response = await axios.delete('https://apiwo.tokoweb.live/api/wedding-organizer-customers/destroy/' + id, {
    headers: {
      'Authorization': localStorage.getItem("token")
    }
  })
    .then(res => res)
    .catch(err => err)

  return response
}