import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import Form from "./components/Form";
import Layout from "./components/Layout";


import Home from "./components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
    ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
