import { lazy } from "react";

const kelolaProdukWO = [
  // get detail data
  {
    path: "/admin/group-user/:userid",
    component: lazy(() =>
      import("../../../view/pages/produk-wo/group-user/komisi")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/admin/produk-ucapan-user/detail/:userid",
    component: lazy(() =>
      import("../../../view/pages/produk-wo/produk-ucapan-user/form/read")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/admin/afiliasi-ucapan/:userid",
    component: lazy(() =>
      import("../../../view/pages/produk-wo/afiliasi-ucapan/afiliasi")
    ),
    layout: "VerticalLayout",
  },

  // create data
  {
    path: "/admin/produk-ucapan-user/create/:userid",
    component: lazy(() =>
      import("../../../view/pages/produk-wo/produk-ucapan-user/form/create")
    ),
    layout: "VerticalLayout",
  },

  // update data
  {
    path: "/admin/produk-ucapan-user/edit/:userid",
    component: lazy(() =>
      import("../../../view/pages/produk-wo/produk-ucapan-user")
    ),
    layout: "VerticalLayout",
  },

  // delete data
  {
    path: "/admin/produk-ucapan-user/delete/:userid",
    component: lazy(() =>
      import("../../../view/pages/produk-wo/produk-ucapan-user")
    ),
    layout: "VerticalLayout",
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
