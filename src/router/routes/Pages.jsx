import { lazy } from "react";

const PagesRoutes = [
  // PAGES
  {
    path: "/blank-page",
    component: lazy(() => import("../../view/pages/blank")),
    layout: "FullLayout",
  },

  // Pages Home Admin
  {
    path: "/admin",
    component: lazy(() => import("../../view/pages/admin/home")),
    layout: "VerticalLayout",
  },

  // Pages Dashboard Admin
  {
    path: "/admin/dashboard",
    component: lazy(() => import("../../view/pages/admin/dashboard")),
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

  // Page Error
  {
    path: "/pages/error-404",
    component: lazy(() => import("../../view/pages/errors/404")),
    layout: "FullLayout",
  },
];

export default PagesRoutes;