import { api } from "../../../configs/apiConfig";

export const updateArticleCategory = (values, id) =>
  api
    .put(`/articles/update/${id}`, values)
    .then((res) => res)
    .catch((err) => err);
