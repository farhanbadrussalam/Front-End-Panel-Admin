import { Suspense, useEffect, useState } from "react";

// Motion
import { motion } from "framer-motion/dist/framer-motion";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { theme } from "../redux/customise/customiseActions";

// Router
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// Routes
import { Routes } from "./routes";

// Layouts
import VerticalLayout from "../layout/VerticalLayout";
import HorizontalLayout from "../layout/HorizontalLayout";
import FullLayout from "../layout/FullLayout";

// Components
import Home from "../view/home";
import Error404 from "../view/pages/errors/404";
import { usePermissionContext } from "../context/PermissionContext";

export default function Router() {
  // Redux
  const customise = useSelector((state) => state.customise);
  const dispatch = useDispatch();

  const auth = localStorage.getItem("token");
  const { permission } = usePermissionContext()

  // Dark Mode
  useEffect(() => {
    document.querySelector("body").classList.add(customise.theme);
    dispatch(theme(customise.theme));
  }, []);

  // RTL
  useEffect(() => {
    if (customise.direction == "ltr") {
      document.querySelector("html").setAttribute("dir", "ltr");
    } else if (customise.direction == "rtl") {
      document.querySelector("html").setAttribute("dir", "rtl");
    }
  }, []);

  // Default Layout
  const DefaultLayout = customise.layout; // FullLayout or VerticalLayout

  // All of the available layouts
  const Layouts = { VerticalLayout, HorizontalLayout, FullLayout };

  // Return Filtered Array of Routes & Paths
  const LayoutRoutesAndPaths = (layout) => {
    const LayoutRoutes = [];
    const LayoutPaths = [];
    if (Routes) {
      // Checks if Route layout or Default layout matches current layout
      Routes.filter(
        (route) =>
          route.layout === layout &&
          (LayoutRoutes.push(route), LayoutPaths.push(route.path))
      );
    }
    return { LayoutRoutes, LayoutPaths };
  };

  // Return Route to Render
  const ResolveRoutes = () => {
    return Object.keys(Layouts).map((layout, index) => {
      const { LayoutRoutes, LayoutPaths } = LayoutRoutesAndPaths(layout);

      let LayoutTag;
      if (DefaultLayout == "HorizontalLayout") {
        if (layout == "VerticalLayout") {
          LayoutTag = Layouts["HorizontalLayout"];
        } else {
          LayoutTag = Layouts[layout];
        }
      } else {
        LayoutTag = Layouts[layout];
      }

      return (
        <Route path={LayoutPaths} key={index}>
          <LayoutTag>
            <Switch>
              {LayoutRoutes.map((route) => {
                if (route.noNeedAuth) {
                  return (
                    <Route
                      key={route.path}
                      path={route.path}
                      exact={route.exact === true}
                      render={(props) => {
                        return (
                          <Suspense fallback={null}>
                            {route.layout === "FullLayout" ? (
                              <route.component {...props} />
                            ) : (
                              <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                  type: "spring",
                                  duration: 0.5,
                                  delay: 0.5,
                                }}
                              >
                                <route.component {...props} />
                              </motion.div>
                            )}
                          </Suspense>
                        );
                      }}
                    />
                  );
                } else {
                  if (auth) {
                    if (permission.includes(route.path) || route.path == "/admin/dashboard") {
                      // if (true) {
                      return (
                        <Route
                          key={route.path}
                          path={route.path}
                          exact={route.exact === true}
                          render={(props) => {
                            return (
                              <Suspense fallback={null}>
                                {route.layout === "FullLayout" ? (
                                  <route.component {...props} />
                                ) : (
                                  <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                      type: "spring",
                                      duration: 0.5,
                                      delay: 0.5,
                                    }}
                                  >
                                    <route.component {...props} />
                                  </motion.div>
                                )}
                              </Suspense>
                            );
                          }}
                        />
                      );
                    }
                    else {
                      return (
                        <Route
                          key={route.path}
                          path={route.path}
                          exact={route.exact === true}
                          render={() => (
                            <Redirect
                              to={{
                                pathname: "/admin/dashboard",
                              }}
                            />
                          )}
                        />
                      );
                    }
                  } else {
                    return (
                      <Route
                        render={() => (
                          <Redirect
                            to={{
                              pathname: "/admin/login",
                            }}
                          />
                        )}
                      />
                    );
                  }
                }
              })}
            </Switch>
          </LayoutTag>
        </Route>
      );
    });
  };

  return (
    <BrowserRouter>
      <Switch>
        {ResolveRoutes()}
        {/* Home Page */}

        {auth ? (
          <Redirect
            to={{
              pathname: "/admin/dashboard",
            }}
          />
        ) : (
          <Route
            render={() => (
              <Redirect
                to={{
                  pathname: "/admin/login",
                }}
              />
            )}
          />
        )}

        {/* NotFound */}
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
