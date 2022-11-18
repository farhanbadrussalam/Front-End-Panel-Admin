import { useEffect, useState } from "react";

import { api } from "../../configs/apiConfig";

export const deleteProduct = async (
  id,
  url = "http://127.0.0.1:8000/api/products/destroy"
) => {
  let response;

  response = await api
    .delete(`${url}/${id}`)
    .then((res) => setData(res))
    .catch((err) => setError(err));

  return response;
};
