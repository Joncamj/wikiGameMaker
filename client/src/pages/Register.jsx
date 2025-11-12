import React from "react";
import RegisterForm from "../components/RegisterForm.jsx";

export default function Register() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">

      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Créer un compte
      </h1>


      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <RegisterForm />
      </div>


      <p className="mt-6 text-gray-600">
        Vous avez déjà un compte ?{" "}
        <a
          href="/login"
          className="text-blue-600 hover:underline font-medium"
        >
          Se connecter
        </a>
      </p>
    </div>
  );
}