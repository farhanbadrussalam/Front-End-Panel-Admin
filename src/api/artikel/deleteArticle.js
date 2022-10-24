import { api } from "../../configs/apiConfig";

export const deleteArticleCategory = (values, id) =>
  api
    .delete(`/articles/destroy/${id}`)
    .then((res) => res)
    .catch((err) => err);
