import { lazy } from "react";

const Update = [
  {
    path: "/admin/artikel/update/:userid",
    component: lazy(() =>
      import("../../../view/pages/produk-wo/group-user/komisi")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/admin/artikel-category/update/:userid",
    component: lazy(() =>
      import("../../../view/pages/produk-wo/group-user/komisi")
    ),
    layout: "VerticalLayout",
  },
];

export default Update;
