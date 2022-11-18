import axios from 'axios'

export const deleteWeddingOrganizer = async (id) => {
  const response = await axios.delete('https://apiwo.tokoweb.live/api/wedding-organizers/destroy/' + id, {
    headers: {
      'Authorization': localStorage.getItem("token")
    }
  })
    .then(res => res)
    .catch(err => err)

  return response
}