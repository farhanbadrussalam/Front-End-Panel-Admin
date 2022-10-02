import { lazy } from "react";

const PagesRoutes = [
  // PAGES
  {
    path: "/pages/blank-page",
    component: lazy(() => import("../../view/pages/blank")),
    layout: "VerticalLayout",
  },
  {
    path: "/pages/dashboard",
    component: lazy(() => import("../../view/pages/dashboard")),
    layout: "VerticalLayout",
  },
  {
    path: "/pages/wedding",
    component: lazy(() => import("../../view/pages/masterData")),
    layout: "VerticalLayout",
  },
  {
    path: "/pages/pengantin",
    component: lazy(() => import("../../view/pages/masterData")),
    layout: "VerticalLayout",
  },
  {
    path: "/pages/customers",
    component: lazy(() => import("../../view/pages/masterData")),
    layout: "VerticalLayout",
  },
  {
    path: "/pages/produk",
    component: lazy(() => import("../../view/pages/masterData")),
    layout: "VerticalLayout",
  },
  {
    path: "/pages/error-404",
    component: lazy(() => import("../../view/pages/errors/404")),
    layout: "FullLayout",
  },
];

export default PagesRoutes;