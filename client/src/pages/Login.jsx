import { useEffect } from "react";
import React from "react";
import LoginForm from "../components/LoginForm.jsx";
import "./login.css"


export default function Login() {

  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  return (
    <div className="login-page">

      <h1 className="login-title">Connexion à votre compte</h1>

      <div className="login-container">
        <LoginForm />
      </div>

      <p className="login-bottom-text">
        Pas encore de compte ? <a href="/register">S’inscrire</a>
      </p>

    </div>

  );
}