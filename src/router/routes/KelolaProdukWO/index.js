import { lazy } from "react";

const kelolaProdukWO = [
  // update data
  {
    path: "/admin/produk-ucapan-user/edit/:id",
    component: lazy(() =>
      import("../../../view/pages/produk-wo/produk-ucapan-user/form/update")
    ),
    layout: "VerticalLayout",
    type: 2
  },

  // create data
  {
    path: "/admin/produk-ucapan-user/create/:userid",
    component: lazy(() =>
      import("../../../view/pages/produk-wo/produk-ucapan-user/form/create")
    ),
    layout: "VerticalLayout",
    type: 2
  },

  // get detail data
  {
    path: "/admin/group-user/:userid",
    component: lazy(() =>
      import("../../../view/pages/produk-wo/group-user/komisi")
    ),
    layout: "VerticalLayout",
    type: 2
  },
  {
    path: "/admin/produk-ucapan-user/detail/:id",
    component: lazy(() =>
      import("../../../view/pages/produk-wo/produk-ucapan-user/form/read")
    ),
    layout: "VerticalLayout",
    type: 2
  },
  {
    path: "/admin/afiliasi-ucapan/:userid",
    component: lazy(() =>
      import("../../../view/pages/produk-wo/afiliasi-ucapan/afiliasi")
    ),
    layout: "VerticalLayout",
    type: 2
  },

  // get all data
  {
    path: "/admin/group-user",
    component: lazy(() => import("../../../view/pages/produk-wo/group-user")),
    layout: "VerticalLayout",
  },
  {
    path: "/admin/produk-ucapan-user",
    component: lazy(() =>
      import("../../../view/pages/produk-wo/produk-ucapan-user")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/admin/afiliasi-ucapan",
    component: lazy(() =>
      import("../../../view/pages/produk-wo/afiliasi-ucapan")
    ),
    layout: "VerticalLayout",
  },
];

export default kelolaProdukWO;
