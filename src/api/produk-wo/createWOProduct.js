import { Airpod } from "iconsax-react";
import { api } from "../../configs/apiConfig";

export const postProduct = (values) => {
  const response = api
    .post("products/store", values, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      console.log(res.data.data.id);
      // api
      //   .post(
      //     "wedding-organizer-products/store",
      //     {
      //       wedding_organizer_id: wedding_organizer_id,
      //       bride_id: 1,
      //       product_id: res.data.data.id,
      //       quota: 5000,
      //       active_date: "2022-10-12",
      //     },
      //     {
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //     }
      //   )
      //   .then((res) => res)
      //   .catch((err) => err);
      return res;
    })
    .catch((err) => err);

  return response;
};
