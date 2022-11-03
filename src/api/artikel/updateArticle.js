import { api } from "../../configs/apiConfig";

export const updateArticle = (values, id) =>
  api
    .put(`/articles/update/${id}`, values, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => res)
    .catch((err) => err);
