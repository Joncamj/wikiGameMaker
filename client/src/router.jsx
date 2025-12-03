// Router Data Mode
import React from "react";
import { createBrowserRouter } from "react-router";
import { redirect } from "react-router";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Characters from "./pages/Characters";
import CreateCharacter from "./pages/CreateCharacter";


export async function checkAuth () {
  const token = localStorage.getItem("token");
  if (!token) {
    const originUrl = window.location.href.replace(window.location.origin, "");
    sessionStorage.setItem("origin.url", originUrl);
    throw redirect("/login");
  }
  
  return null;
};

export const router = createBrowserRouter([
  {
    id: "Home",
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
  {
    id: "Characters",
    path: "/characters",
    loader: checkAuth,
    element: <Characters />
  },
  {
    path: "/characters/create",
    loader: checkAuth,
    element: <CreateCharacter />
  }
]);