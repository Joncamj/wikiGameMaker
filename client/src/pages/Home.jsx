import React from "react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "../components/Navigation";

export default function Home() {
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("token")
        navigate("/login")
    }

    return (
      <>
        <div className="relative min-h-screen bg-gray-100 flex flex-col items-center">

  <div className="absolute top-0 left-0 w-full flex justify-center pt-6">
    <h1 className="text-3xl font-bold">Accueil</h1>
  </div>

  <button
    onClick={logout}
    className="absolute top-4 right-4 bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition"
  >
    Se déconnecter
  </button>

  <div className="flex flex-col justify-center items-center flex-grow">
  </div>
</div>
      </>


    )
}