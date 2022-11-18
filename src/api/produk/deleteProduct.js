import { useEffect, useState } from "react";

import { api } from "../../configs/apiConfig";

export const deleteProduct = async (
  id,
  url = "https://apiwo.tokoweb.live/api/products/destroy"
) => {
  let response;

  response = await api
    .delete(`${url}/${id}`)
    .then((res) => setData(res))
    .catch((err) => setError(err));

  return response;
};
