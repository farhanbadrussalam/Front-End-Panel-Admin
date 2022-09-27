import { lazy } from "react";

const PagesRoutes = [
  // PAGES
  {
    path: "/pages/blank-page",
    component: lazy(() => import("../../view/pages/blank")),
    layout: "VerticalLayout",
  },
  {
    path: "/pages/error-404",
    component: lazy(() => import("../../view/pages/errors/404")),
    layout: "FullLayout",
  },
];

export default PagesRoutes;