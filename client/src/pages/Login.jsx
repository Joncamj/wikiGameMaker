import React from "react";
import LoginForm from "../components/LoginForm.jsx";

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">

      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Connexion à votre compte
      </h1>


      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <LoginForm />
      </div>


      <p className="mt-6 text-gray-600">
        Pas encore de compte ?{" "}
        <a
          href="/register"
          className="text-blue-600 hover:underline font-medium"
        >
          S’inscrire
        </a>
      </p>
    </div>
  );
}
