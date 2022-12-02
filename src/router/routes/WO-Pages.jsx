import { lazy } from "react";

//! Type 2 = Wo
const WOPagesRoutes = [
  // Pages home/dashboard admin
  {
    path: "/wo/dashboard",
    component: lazy(() => import("../../view/pages/errors/404")),
    layout: "VerticalLayout",
    type: 1,
  },

  // PAGES
  {
    path: "/admin/blank-page",
    component: lazy(() => import("../../view/pages/blank")),
    layout: "VerticalLayout",
    noNeedAuth: true,
    type: 1,
  },

  // Page Error
  {
    path: "/pages/error-404",
    component: lazy(() => import("../../view/pages/errors/404")),
    layout: "FullLayout",
    noNeedAuth: true,
    type: 1,
  },
];

export default WOPagesRoutes;
