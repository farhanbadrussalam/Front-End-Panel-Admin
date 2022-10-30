import { lazy } from "react";

const GetDetail = [
  {
    path: "/admin/artikel/:userid",
    component: lazy(() =>
      import("../../../view/pages/produk-wo/group-user/komisi")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/admin/artikel-category/:userid",
    component: lazy(() =>
      import("../../../view/pages/produk-wo/group-user/komisi")
    ),
    layout: "VerticalLayout",
  },
];

export default GetDetail;
