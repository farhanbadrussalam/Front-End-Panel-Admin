import { lazy } from "react";

const PagesRoutes = [
  // PAGES
  {
    path: "/admin/blank-page",
    component: lazy(() => import("../../view/pages/blank")),
    layout: "VerticalLayout",
  },

  // AUTH
  {
    path: "/admin/login",
    component: lazy(() => import("../../view/pages/authenticationAdmin")),
    layout: "FullLayout",
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
    component: lazy(() => import("../../view/pages/master-data")),
    layout: "VerticalLayout",
  },
  {
    path: "/admin/pengantin",
    component: lazy(() => import("../../view/pages/master-data")),
    layout: "VerticalLayout",
  },
  {
    path: "/admin/customer",
    component: lazy(() => import("../../view/pages/master-data")),
    layout: "VerticalLayout",
  },
  {
    path: "/admin/produk-ucapan-digital",
    component: lazy(() => import("../../view/pages/master-data")),
    layout: "VerticalLayout",
  },

  // Pages Kelola User
  {
    path: "/admin/crud-user",
    component: lazy(() => import("../../view/pages/kelola-user/crud-user")),
    layout: "VerticalLayout",
  },
  {
    path: "/admin/atur-role",
    component: lazy(() =>
      import("../../view/pages/kelola-user/atur-role-staff")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/admin/policy-user",
    component: lazy(() =>
      import("../../view/pages/kelola-user/atur-role-user")
    ),
    layout: "VerticalLayout",
  },

  // pages data produk wo
  {
    path: "/admin/group-user/:userid",
    component: lazy(() =>
      import("../../view/pages/produk-wo/group-user/komisi")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/admin/group-user",
    component: lazy(() => import("../../view/pages/produk-wo/group-user")),
    layout: "VerticalLayout",
  },
  {
    path: "/admin/produk-ucapan-user",
    component: lazy(() =>
      import("../../view/pages/produk-wo/produk-ucapan-user")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/admin/afiliasi-ucapan",
    component: lazy(() => import("../../view/pages/produk-wo/afiliasi-ucapan")),
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
