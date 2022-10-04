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
    path: "/admin/wedding-organizer",
    component: lazy(() => import("../../view/pages/admin/masterData")),
    layout: "VerticalLayout",
  },
  {
    path: "/admin/pengantin",
    component: lazy(() => import("../../view/pages/admin/masterData")),
    layout: "VerticalLayout",
  },
  {
    path: "/admin/customer",
    component: lazy(() => import("../../view/pages/admin/masterData")),
    layout: "VerticalLayout",
  },
  {
    path: "/admin/produk-ucapan-digital",
    component: lazy(() => import("../../view/pages/admin/masterData")),
    layout: "VerticalLayout",
  },

  // Page Home 
  {
    path: "/",
    component: lazy(() => import("../../view/pages/admin/masterData")),
    layout: "FullLayout",
  },

  // Page Error
  {
    path: "/pages/error-404",
    component: lazy(() => import("../../view/pages/errors/404")),
    layout: "FullLayout",
  },
];

export default PagesRoutes;