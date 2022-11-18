import axios from 'axios'

export const deleteBride = async (id) => {
  const response = await axios.delete('https://apiwo.tokoweb.live/api/brides/destroy/' + id, {
    headers: {
      'Authorization': localStorage.getItem("token"),
    }
  })
    .then(res => res)
    .catch(err => err)

  return response
}