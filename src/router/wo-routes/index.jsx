import { lazy } from "react";

const WoRoutes = [
  {
    path: "/admin/dashboard",
    component: lazy(() => import("../../view/wo-pages/index")),
    layout: "VerticalLayout",
    type: 2,
  },
];

export { WoRoutes };
