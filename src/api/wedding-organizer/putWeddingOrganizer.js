import axios from 'axios'

export const putWeddingOrganizer = async (values, id) => {
  const response = await axios.put('http://127.0.0.1:8000/api/wedding-organizers/update/' + id, values, {
    headers: {
      'Authorization': localStorage.getItem("token")
    }
  })
    .then(res => res)
    .catch(err => err)

  return response
}