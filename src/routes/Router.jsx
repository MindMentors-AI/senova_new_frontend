import React from "react";
import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About";
import ErrorPage from "../components/ErrorPage";
import App from "../App";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />,
  },
]);

export default Router;
