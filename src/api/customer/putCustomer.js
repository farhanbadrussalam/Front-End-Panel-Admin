import axios from 'axios'

export const putCostumer = async (values, id) => {
  const response = await axios.put('http://127.0.0.1:8000/api/wedding-organizer-customers/update/' + id, values, {
    headers: {
      'Authorization': localStorage.getItem("token")
    }
  })
    .then(res => res)
    .catch(err => err)

  return response
}