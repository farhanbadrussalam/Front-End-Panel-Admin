import { lazy } from "react";

import kelolaUser from "./KelolaUser";
import masterData from "./MasterData";
import kelolaProdukWO from "./KelolaProdukWO";
import KelolaArtikel from "./KelolaArtikel";
import WebsiteSettings from "./WebsiteSettings";
import commissionData from "./Komisi";
import KelolaKupon from "./KelolaKupon";

const PagesRoutes = [
  // AUTH
  {
    path: "/admin/login",
    component: lazy(() => import("../../view/pages/authenticationAdmin/Login")),
    layout: "FullLayout",
    noNeedAuth: true,
  },

  // Pages home/dashboard admin
  {
    path: "/admin/dashboard",
    component: lazy(() => import("../../view/pages/dashboard")),
    layout: "VerticalLayout",
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
  },

  // Page Error
  {
    path: "/pages/error-404",
    component: lazy(() => import("../../view/pages/errors/404")),
    layout: "FullLayout",
    noNeedAuth: true,
  },
];

export default PagesRoutes;
