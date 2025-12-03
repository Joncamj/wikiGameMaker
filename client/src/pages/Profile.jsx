import React, { useEffect, useState } from "react";
import { getProfile, logoutUser, deleteAccount } from "../services/Api";
import { useNavigate } from "react-router-dom";
import "./profile.css";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProfile() {
      try {
        const currentUser = await getProfile();
        setUser(currentUser);
    } catch (err) {
        setError(`Impossible de charger votre profil. Error message: ${err}`);
        localStorage.removeItem("token")
        navigate("/login")
      } finally {
        setLoading(false);
      }
    }

    fetchProfile();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await logoutUser();
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Voulez-vous vraiment supprimer votre compte ?")) return;

    try {
      await deleteAccount();
      navigate("/register");
    } catch (err) {
      console.log(err);
      setError("Erreur lors de la suppression du compte");
    }
  };

  if (loading) return <p className="profile-loading">Chargement...</p>;
  if (error) return <p className="profile-error">{error}</p>;

  return (
    <div className="profile-page">

      <header className="profile-header">
        <h1 className="profile-title">Mon Profil</h1>
        <button onClick={handleLogout} className="logout-btn">
          Déconnexion
        </button>
      </header>

      <div className="profile-card">
        <h2>Informations utilisateur</h2>

        <div className="profile-line">
          <strong>Nom de l’utilisateur :</strong> {user?.username}
        </div>

        <div className="profile-line">
          <strong>Email :</strong> {user?.email}
        </div>

        <div className="profile-line">
          <strong>Rôle :</strong> {user?.role}
        </div>

        <button className="delete-btn" onClick={handleDelete}>
          Supprimer mon compte
        </button>
      </div>
    </div>
  );
}
