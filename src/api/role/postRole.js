import { api } from "../../configs/apiConfig";

export const postRole = (values) => {
  console.log(values);
  api
    .post("access-menus/store", values, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => res)
    .catch((err) => err);

}
