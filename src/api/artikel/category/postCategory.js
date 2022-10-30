import { api } from "../../../configs/apiConfig";

export const postArticleCategory = (values) =>
  api
    .post("/article-categories/store", values)
    .then((res) => res)
    .catch((err) => err);
