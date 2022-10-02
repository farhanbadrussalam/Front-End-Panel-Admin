import { lazy } from "react";

const PagesRoutes = [
  // PAGES
  {
    path: "/admin/blank-page",
    component: lazy(() => import("../../view/pages/blank")),
    layout: "VerticalLayout",
  },

  // Pages admin
  {
    path: "/admin/dashboard",
    component: lazy(() => import("../../view/pages/dashboard")),
    layout: "VerticalLayout",
  },

  // Pages Master Data
  {
    path: "/admin/users",
    component: lazy(() => import("../../view/pages/masterData")),
    layout: "VerticalLayout",
  },
  {
    path: "/admin/customers",
    component: lazy(() => import("../../view/pages/masterData")),
    layout: "VerticalLayout",
  },
  {
    path: "/admin/venicles",
    component: lazy(() => import("../../view/pages/masterData")),
    layout: "VerticalLayout",
  },

  // Page Error
  {
    path: "/pages/error-404",
    component: lazy(() => import("../../view/pages/errors/404")),
    layout: "FullLayout",
  },
];

export default PagesRoutes;