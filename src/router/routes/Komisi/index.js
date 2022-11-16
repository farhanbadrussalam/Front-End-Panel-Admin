import { lazy } from "react";

const commissionData = [
  //Read
  {
    path: "/admin/riwayat-komisi-admin/detail/:userid",
    component: lazy(() =>
      import(
        "../../../view/pages/komisi/riwayat-admin/form/read"
      )
    ),
    layout: "VerticalLayout",
  },

  {
    path: "/admin/riwayat-komisi-wo/detail/:userid",
    component: lazy(() =>
      import(
        "../../../view/pages/komisi/riwayat-wo/form/read"
      )
    ),
    layout: "VerticalLayout",
  },

  {
    path: "/admin/riwayat-pencairan-komisi-wo/detail/:userid",
    component: lazy(() =>
      import(
        "../../../view/pages/komisi/riwayat-pencairan/form/read"
      )
    ),
    layout: "VerticalLayout",
  },
  //Update

  //Get All
  {
    path: "/admin/riwayat-komisi-admin",
    component: lazy(() =>
      import(
        "../../../view/pages/komisi/riwayat-admin"
      )
    ),
    layout: "VerticalLayout",
  },

  {
    path: "/admin/riwayat-komisi-wo",
    component: lazy(() =>
      import(
        "../../../view/pages/komisi/riwayat-wo"
      )
    ),
    layout: "VerticalLayout",
  },

  {
    path: "/admin/riwayat-pencairan-komisi-wo",
    component: lazy(() =>
      import(
        "../../../view/pages/komisi/riwayat-pencairan"
      )
    ),
    layout: "VerticalLayout",
  },

  {
    path: "/admin/saldo-komisi-wo",
    component: lazy(() =>
      import(
        "../../../view/pages/komisi/saldo-komisi"
      )
    ),
    layout: "VerticalLayout",
  },
]

export default commissionData