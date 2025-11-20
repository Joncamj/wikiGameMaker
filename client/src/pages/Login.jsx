import React from "react";
import LoginForm from "../components/LoginForm.jsx";
import "./login.css"


export default function Login() {
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
