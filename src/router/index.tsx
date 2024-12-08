/* eslint-disable @typescript-eslint/ban-ts-comment */
import Private from "@/components/config/Private";
import NotFound from "@/pages/notfound";
import { FC, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Login = lazy(() => import("@/pages/login"));
const Home = lazy(() => import("@/pages/home"));
const Welcome = lazy(() => import("@/pages/welcome"));
const ChildrenA = lazy(() => import("@/pages/childrenA"));
const ChildrenB = lazy(() => import("@/pages/childrenB"));

export const menuRoutes = [
  {
    path: "welcome",
    name: "Welcome",
    element: <Welcome />,
  },
  {
    path: "parent",
    name: "Parent",
    children: [
      {
        path: "childrenA",
        name: "ChildrenA",
        element: <ChildrenA />,
      },
      {
        path: "childrenB",
        name: "ChildrenB",
        element: <ChildrenB />,
      },
    ],
  },
];
const routes = createBrowserRouter([
  {
    path: "/login",
    // @ts-ignore
    name: "Login",
    hideInMenu: true,
    element: <Login />,
  },
  {
    path: "/",
    name: "Home",
    element: <Private children={<Home />} />,
    children: menuRoutes,
  },
  {
    path: "*",
    name: "NotFound",
    hideInMenu: true,
    element: <NotFound />,
  },
]);

const RoutesConfig: FC<unknown> = () => <RouterProvider router={routes} />;

export default RoutesConfig;
