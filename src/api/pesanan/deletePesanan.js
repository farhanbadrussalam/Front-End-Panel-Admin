import { api } from "../../configs/apiConfig";

export const deletePesanan = async (
  id,
  url = "http://127.0.0.1:8000/api/sales-order-items/destroy"
) => {
  let response;

  response = await api
    .delete(`${url}/${id}`)
    .then((res) => setData(res))
    .catch((err) => setError(err));

  return response;
};