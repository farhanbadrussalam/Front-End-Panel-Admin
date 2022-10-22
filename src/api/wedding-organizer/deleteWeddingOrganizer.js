import axios from 'axios'

export const deleteWeddingOrganizer = async (id) => {
  const response = await axios.delete('http://127.0.0.1:8000/api/wedding-organizers/destroy/' + id, {
    headers: {
      'Authorization': localStorage.getItem("token")
    }
  })
    .then(res => res)
    .catch(err => err)

  return response
}