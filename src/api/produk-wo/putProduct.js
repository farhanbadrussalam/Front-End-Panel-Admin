import { api } from '../../configs/apiConfig'

export const putProduct = async (values, id) => {
  const response = await api.put('products/update/' + id, values)
    .then(res => res.data.success)
    .catch(err => err)

  return response
}