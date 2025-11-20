// Router Data Mode
import React from "react";
import { createBrowserRouter } from "react-router";
import { redirect } from "react-router";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

export async function checkAuth () {
  const token = localStorage.getItem("token");
  if (!token) {
    throw redirect("/login");
  }
  
  return null;
};

export const router = createBrowserRouter([
  {
    path: "/",
    middleware: [checkAuth],
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/profile",
    loader: checkAuth,
    element: <Profile />,
  },
]);