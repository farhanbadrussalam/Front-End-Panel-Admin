import { lazy } from "react";

const WORoutes = [
  {
    path: "/admin/login",
    component: lazy(() => import("../../view/pages/authenticationAdmin/Login")),
    layout: "FullLayout",
    noNeedAuth: true,
  },

  {
    path: "/dashboard",
    component: lazy(() => import("../../view/wo-pages/dashboard")),
    layout: "VerticalLayout",
  },

  {
    path: "/wo/profile",
    component: lazy(() => import("../../view/wo-pages/profile")),
    layout: "VerticalLayout",
  },
];

export default WORoutes;
