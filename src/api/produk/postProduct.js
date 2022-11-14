
import { api } from "../../configs/apiConfig";

export const postProduct = async (values) => {
  const response = await api.post('products/store', values)
    .then(res => res.data.success)
    .catch(err => err)

  return response
}