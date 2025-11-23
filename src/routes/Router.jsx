import React from "react";
import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About";
import ErrorPage from "../components/ErrorPage";
import App from "../App";
import Contact from "../pages/Contact";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/aboutus",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contacts",
    element: <Contact />,
    errorElement: <ErrorPage />,
  },
]);

export default Router;
