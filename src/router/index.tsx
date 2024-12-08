import { FC } from "react";
import { RouterProvider } from "react-router-dom";
import { routes } from "./configRoutes";

const RoutesConfig: FC<unknown> = () => <RouterProvider router={routes} />;

export default RoutesConfig;
