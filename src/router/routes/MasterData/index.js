import { lazy } from "react";

const masterData = [

  // get detail data
  {
    path: "/admin/wedding-organizer/detail/:userid",
    component: lazy(() =>
      import("../../../view/pages/master-data/wedding-organizer/form/read")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/admin/pengantin/detail/:userid",
    component: lazy(() =>
      import("../../../view/pages/master-data/pengantin/form/read")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/admin/customer/detail/:userid",
    component: lazy(() =>
      import("../../../view/pages/master-data/customer/form/read")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/admin/produk-ucapan-digital/detail/:userid",
    component: lazy(() =>
      import("../../../view/pages/master-data/produk-ucapan-digital/form/read")
    ),
    layout: "VerticalLayout",
  },

  // create data
  {
    path: "/admin/wedding-organizer/create",
    component: lazy(() =>
      import("../../../view/pages/master-data/wedding-organizer/form/create")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/admin/pengantin/create",
    component: lazy(() =>
      import("../../../view/pages/master-data/pengantin/form/create")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/admin/customer/create",
    component: lazy(() =>
      import("../../../view/pages/master-data/customer/form/create")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/admin/produk-ucapan-digital/create",
    component: lazy(() =>
      import(
        "../../../view/pages/master-data/produk-ucapan-digital/form/create"
      )
    ),
    layout: "VerticalLayout",
  },

  // update data
  {
    path: "/admin/wedding-organizer/edit/:userid",
    component: lazy(() =>
      import("../../../view/pages/master-data/wedding-organizer/form/update")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/admin/pengantin/edit/:userid",
    component: lazy(() =>
      import("../../../view/pages/master-data/pengantin/form/update")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/admin/customer/edit/:userid",
    component: lazy(() =>
      import("../../../view/pages/master-data/customer/form/update")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/admin/produk-ucapan-digital/edit/:userid",
    component: lazy(() =>
      import(
        "../../../view/pages/master-data/produk-ucapan-digital/form/update"
      )
    ),
    layout: "VerticalLayout",
  },

  // get all data
  {
    path: "/admin/wedding-organizer",
    component: lazy(() =>
      import("../../../view/pages/master-data/wedding-organizer")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/admin/pengantin",
    component: lazy(() => import("../../../view/pages/master-data/pengantin")),
    layout: "VerticalLayout",
  },
  {
    path: "/admin/customer",
    component: lazy(() => import("../../../view/pages/master-data/customer")),
    layout: "VerticalLayout",
  },
  {
    path: "/admin/produk-ucapan-digital",
    component: lazy(() =>
      import("../../../view/pages/master-data/produk-ucapan-digital")
    ),
    layout: "VerticalLayout",
  },
];

export default masterData;
