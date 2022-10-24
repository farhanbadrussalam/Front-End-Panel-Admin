import { api } from "../../configs/apiConfig";

export const postArticle = (values) =>
  api
    .post("/articles/store", values)
    .then((res) => res)
    .catch((err) => err);
