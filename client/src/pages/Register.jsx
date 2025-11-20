import React from "react";
import RegisterForm from "../components/RegisterForm.jsx";
import "./register.css";

export default function Register() {
  return (
    <div className="register-page">

      <h1 className="register-title">Créer un compte</h1>

      <div className="register-container">
        <RegisterForm />
      </div>

      <p className="register-bottom-text">
        Vous avez déjà un compte ? <a href="/login">Se connecter</a>
      </p>

    </div>

  );
}