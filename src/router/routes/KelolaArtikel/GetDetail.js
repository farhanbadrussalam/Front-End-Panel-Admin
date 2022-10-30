import { lazy } from "react";

const GetDetail = [
  {
    path: "/admin/artikel/:id",
    component: lazy(() =>
      import("../../../view/pages/artikel/artikel/form/read")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/admin/kategori-artikel/:id",
    component: lazy(() =>
      import("../../../view/pages/artikel/artikel-kategori/form/read")
    ),
    layout: "VerticalLayout",
  },
];

export default GetDetail;
