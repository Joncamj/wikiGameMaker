import React from "react";
import "./navigation.css";

export function Navigation({ router }) {
  return (
    <nav className="nav">
      <a href="/profile" className="nav-profile">Profil</a>

      <div className="nav-links">
        {router?.routes
          .filter(r => isNaN(parseInt(r.id)))
          .map(route => (
            <a key={route.id} href={route.path}>
              {route.id}
            </a>
          ))}
      </div>
    </nav>
  );
}