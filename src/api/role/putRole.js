import { api } from "../../configs/apiConfig";

export const putRole = async (values, id) => {
  const response = api
    .put("access-menus/update/" + id, values, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => res)
    .catch((err) => err);

  return response
} 
