import React, { useState } from "react";
import { registerUser } from "../services/Api";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await registerUser({ username, email, password });
      navigate("/login");
    } catch (err) {
      console.error("❌ Erreur d’inscription :", err);
      setError(err.response?.data?.error || "Erreur lors de l'inscription");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-lg w-80 flex flex-col gap-3"
      >
        <h2 className="text-2xl font-semibold text-center mb-2 text-gray-800">
          Inscription
        </h2>

        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <input
          type="email"
          placeholder="Adresse email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <input
          type="password"
          placeholder="Confirmer le mot de passe"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition disabled:opacity-50"
        >
          {loading ? "Inscription..." : "S’inscrire"}
        </button>

        {error && (
          <p className="text-center text-sm mt-2 text-red-600">{error}</p>
        )}
      </form>
    </div>
  );
}
