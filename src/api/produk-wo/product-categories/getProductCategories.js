import { api } from "../../../configs/apiConfig";

export const getProductCategories = () => {
  const response = api
    .get("product-categories")
    .then((res) => res.data.data)
    .catch((err) => err);

  return response;
};
