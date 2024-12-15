import { lazy } from "react";

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
