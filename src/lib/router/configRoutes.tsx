import Private from "@/components/config/Private";
import NotFound from "@/pages/notfound";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { menuRoutes } from "./menuRoutes";

const Login = lazy(() => import("@/pages/login"));
const Home = lazy(() => import("@/pages/home"));

export const routes = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Private children={<Home />} />,
    children: menuRoutes,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
