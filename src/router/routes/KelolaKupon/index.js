import { lazy } from "react";

export default [
  {
    path: "/admin/kupon",
    component: lazy(() => import("../../../view/pages/kupon")),
    layout: "VerticalLayout",
  },
];
