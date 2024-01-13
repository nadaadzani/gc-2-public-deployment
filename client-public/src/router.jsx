import { redirect, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import ProductDetail from "./components/ProductDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products/:id",
    element: <ProductDetail />,
  },
]);
