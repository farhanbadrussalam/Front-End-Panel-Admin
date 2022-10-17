import { lazy } from "react";

const PagesRoutes = [
  // AUTH
  {
    path: "/admin/login",
    component: lazy(() => import("../../view/pages/authenticationAdmin/Login")),
    layout: "FullLayout",
    noNeedAuth: true,
  },
  {
    path: "/admin/register",
    component: lazy(() =>
      import("../../view/pages/authenticationAdmin/Register")
    ),
    layout: "FullLayout",
    noNeedAuth: true,
  },

  // Pages admin
  {
    path: "/admin/dashboard",
    component: lazy(() => import("../../view/pages/dashboard")),
    layout: "VerticalLayout",
  },

  // Pages Master Data
  {
    path: "/admin/wedding-organizer/detail/:userid",
    component: lazy(() =>
      import("../../view/pages/master-data/wedding-organizer/form/read")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/admin/wedding-organizer/edit/:userid",
    component: lazy(() =>
      import("../../view/pages/master-data/wedding-organizer/form/update")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/admin/wedding-organizer/create",
    component: lazy(() =>
      import("../../view/pages/master-data/wedding-organizer/form/create")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/admin/wedding-organizer",
    component: lazy(() =>
      import("../../view/pages/master-data/wedding-organizer")
    ),
    layout: "VerticalLayout",
  },

  {
    path: "/admin/pengantin/detail/:userid",
    component: lazy(() =>
      import("../../view/pages/master-data/pengantin/form/read")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/admin/pengantin/edit/:userid",
    component: lazy(() =>
      import("../../view/pages/master-data/pengantin/form/update")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/admin/pengantin/create",
    component: lazy(() =>
      import("../../view/pages/master-data/pengantin/form/create")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/admin/pengantin",
    component: lazy(() => import("../../view/pages/master-data/pengantin")),
    layout: "VerticalLayout",
  },

  {
    path: "/admin/customer/detail/:userid",
    component: lazy(() =>
      import("../../view/pages/master-data/customer/form/read")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/admin/customer/edit/:userid",
    component: lazy(() =>
      import("../../view/pages/master-data/customer/form/update")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/admin/customer/create",
    component: lazy(() =>
      import("../../view/pages/master-data/customer/form/create")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/admin/customer",
    component: lazy(() => import("../../view/pages/master-data/customer")),
    layout: "VerticalLayout",
  },

  {
    path: "/admin/produk-ucapan-digital/detail/:userid",
    component: lazy(() =>
      import("../../view/pages/master-data/produk-ucapan-digital/form/read")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/admin/produk-ucapan-digital/edit/:userid",
    component: lazy(() =>
      import("../../view/pages/master-data/produk-ucapan-digital/form/update")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/admin/produk-ucapan-digital/create",
    component: lazy(() =>
      import("../../view/pages/master-data/produk-ucapan-digital/form/create")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/admin/produk-ucapan-digital",
    component: lazy(() =>
      import("../../view/pages/master-data/produk-ucapan-digital")
    ),
    layout: "VerticalLayout",
  },

  // Pages Kelola User
  {
    path: "/admin/crud-user/detail/:userid",
    component: lazy(() =>
      import("../../view/pages/kelola-user/crud-user/form/read")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/admin/crud-user/edit/:userid",
    component: lazy(() =>
      import("../../view/pages/kelola-user/crud-user/form/update")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/admin/crud-user/create",
    component: lazy(() =>
      import("../../view/pages/kelola-user/crud-user/form/create")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/admin/crud-user/",
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
    path: "/admin/policy-user/edit/:roleid",
    component: lazy(() =>
      import("../../view/pages/kelola-user/atur-permission/form/update")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/admin/policy-user/create",
    component: lazy(() =>
      import("../../view/pages/kelola-user/atur-permission/form/create")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/admin/policy-user",
    component: lazy(() =>
      import("../../view/pages/kelola-user/atur-permission")
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
    path: "/admin/produk-ucapan-user/:userid",
    component: lazy(() =>
      import("../../view/pages/produk-wo/produk-ucapan-user/produk")
    ),
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
    path: "/admin/afiliasi-ucapan/:userid",
    component: lazy(() =>
      import("../../view/pages/produk-wo/afiliasi-ucapan/afiliasi")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/admin/afiliasi-ucapan",
    component: lazy(() => import("../../view/pages/produk-wo/afiliasi-ucapan")),
    layout: "VerticalLayout",
  },

  // PAGES
  {
    path: "/admin/blank-page",
    component: lazy(() => import("../../view/pages/blank")),
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
