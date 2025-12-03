import React from "react";
import { router } from './router.jsx';
import { RouterProvider } from "react-router-dom";
import { Navigation } from "./components/Navigation.jsx";

function App() {
  const path = window.location.pathname;

  const hideNav = ["/login", "/register"].includes(path);

  return (
    <>
      {!hideNav && <Navigation router={router} />}
      <RouterProvider router={router} />
    </>
  );
}

export default App;