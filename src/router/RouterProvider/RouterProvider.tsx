import { createBrowserRouter } from "react-router";
import { RouterProvider as ReactRouterProvider } from "react-router/dom";
import App from "@/App";
import MainProducts from "@/components/products/MainProducts";
import MainHome from "@/components/home/MainHome";
import Routes from "../Routes";

const router = createBrowserRouter([
  {
    Component: App,
    children: [
      { index: true, Component: MainHome },
      {
        path: Routes.order,
        Component: MainProducts,
      },
    ],
  },
]);

function RouterProvider() {
  return <ReactRouterProvider router={router} />;
}

export default RouterProvider;
