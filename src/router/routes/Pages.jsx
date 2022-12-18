import { lazy } from "react";

import kelolaUser from "./KelolaUser";
import masterData from "./MasterData";
import kelolaProdukWO from "./KelolaProdukWO";
import KelolaArtikel from "./KelolaArtikel";
import WebsiteSettings from "./WebsiteSettings";
import commissionData from "./Komisi";
import KelolaKupon from "./KelolaKupon";

//! Type 2 = Wo
const PagesRoutes = [
  // AUTH
  {
    path: "/admin/login",
    component: lazy(() => import("../../view/pages/authenticationAdmin/Login")),
    layout: "FullLayout",
    noNeedAuth: true,
    type: 1,
  },

  // Pages home/dashboard admin
  {
    path: "/dashboard",
    component: lazy(() => import("../../view/pages/dashboard")),
    layout: "VerticalLayout",
    type: 1,
  },

  // Pages Kelola User
  ...kelolaUser,

  // Pages Master Data
  ...masterData,

  // pages Data Produk WO
  ...kelolaProdukWO,

  // pages Artikel
  ...KelolaArtikel,

  // pages Pengaturan Website
  ...WebsiteSettings,

  // pages komisi
  ...commissionData,

  // pages Kupon
  ...KelolaKupon,

  // PAGES
  {
    path: "/admin/blank-page",
    component: lazy(() => import("../../view/pages/blank")),
    layout: "VerticalLayout",
    noNeedAuth: true,
    type: 1,
  },

  // Page Error
  {
    path: "/pages/error-404",
    component: lazy(() => import("../../view/pages/errors/404")),
    layout: "FullLayout",
    noNeedAuth: true,
    type: 1,
  },

  // ORDER
  {
    path: "/pages/order",
    component: lazy(() => import("../../view/pages/order")),
    layout:"FullLayout",
    noNeedAuth: true,
    type: 1,
  }
];

export default PagesRoutes;
