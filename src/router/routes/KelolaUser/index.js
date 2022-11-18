import { lazy } from "react";

const kelolaUser = [
  // get detail data
  {
    path: "/admin/crud-user/detail/:userid",
    component: lazy(() =>
      import("../../../view/pages/kelola-user/crud-user/form/read")
    ),
    layout: "VerticalLayout",
  },
  // {
  //   path: "/admin/atur-role/detail/:userid",
  //   component: lazy(() =>
  //     import("../../../view/pages/kelola-user/crud-user/form/read")
  //   ),
  //   layout: "VerticalLayout",
  // },

  // create data
  {
    path: "/admin/crud-user/create",
    component: lazy(() =>
      import("../../../view/pages/kelola-user/crud-user/form/create")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/admin/policy-user/create",
    component: lazy(() =>
      import("../../../view/pages/kelola-user/atur-permission/form/create")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/admin/atur-role/create",
    component: lazy(() =>
      import("../../../view/pages/kelola-user/atur-role/form/create")
    ),
    layout: "VerticalLayout",
  },

  // update data
  {
    path: "/admin/crud-user/edit/:userid",
    component: lazy(() =>
      import("../../../view/pages/kelola-user/crud-user/form/update")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/admin/atur-role/edit/:userid",
    component: lazy(() =>
      import("../../../view/pages/kelola-user/atur-role/form/update")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/admin/policy-user/edit/:roleid",
    component: lazy(() =>
      import("../../../view/pages/kelola-user/atur-permission/form/update")
    ),
    layout: "VerticalLayout",
  },

  // get all data
  {
    path: "/admin/crud-user",
    component: lazy(() => import("../../../view/pages/kelola-user/crud-user")),
    layout: "VerticalLayout",
  },
  {
    path: "/admin/atur-role",
    component: lazy(() =>
      import("../../../view/pages/kelola-user/atur-role")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/admin/policy-user",
    component: lazy(() =>
      import("../../../view/pages/kelola-user/atur-permission")
    ),
    layout: "VerticalLayout",
  },
];

export default kelolaUser;
