// Router Data Mode
import React from "react";
import { createBrowserRouter } from "react-router";
import { redirect } from "react-router";
import Login from "./pages/Login";
import Register from "./pages/Register";

const checkAuth = async (props, next) => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw redirect("/login");
  }
  
  await next();
};

export const router = createBrowserRouter([
  {
    path: "/",
    middleware: [checkAuth],
    element: <div />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  // {
  //   path: "/profile",
  //   loader: checkAuth,
  //   element: <Profile />,
  // },
]);